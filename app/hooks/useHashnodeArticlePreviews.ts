import { useState, useEffect } from 'react';
import { BlogPostPreview } from '~/models/Hashnode';
import moment from 'moment'

export default function useHashnodeArticles() {
    let [posts, setPosts] = useState<BlogPostPreview[]>([]);
    let [page, setPage] = useState(0)
    let [allBlogsFetched, setAllBlogsFetched] = useState(false);
    const DATA_LOCATION = `sabinthedev-preview-data`
    const MINUTES_VALID = 30

    // Hashnode only lets you grab 6 at a time, so we iteratively grab them all and cache them for 30 minutes
    useEffect(() => {
        if ( !allBlogsFetched )
            getMore()
    }, [posts])

    const getMore = async () => {
        if ( localStorage.getItem(DATA_LOCATION) ) {
            const cache = JSON.parse(localStorage.getItem(DATA_LOCATION) || '{}')
            const now = moment.utc()
            const expiration = moment.utc(cache.expires)

            if ( now.isAfter(expiration) ) {
                localStorage.removeItem(DATA_LOCATION)
            } else {
                setAllBlogsFetched(true)
                setPage(0)
                return setPosts(cache.posts)
            }
        }

        let response = await fetch('/blog/getpreviews?page=' + page, { method: 'GET' } )
            .then( res => res.json() )

        const newSet = [...posts, ...response.posts]
            .map( post => ({...post, date: new Date(post.dateAdded)}))
            .sort( (a,b) => moment(b.dateAdded) > moment(a.dateAdded) ? 1 : 0)
        
        if ( newSet.length >= response.total ) {
            setAllBlogsFetched(true)
            localStorage.setItem(DATA_LOCATION, JSON.stringify({
                expires: moment.utc().add(MINUTES_VALID, 'minutes'),
                posts: newSet
            }))
        }

        setPage(page => page + 1);
        setPosts(newSet)
    }

    return { getMore, posts, allBlogsFetched }
}