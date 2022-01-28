import { json, LoaderFunction } from 'remix'
import { getPostPreviews } from '~/services/hashnode.service'

export let loader: LoaderFunction = async ({ request }) => {
    const url = new URL(request.url)
    const search = new URLSearchParams(url.search)
    let page = 0

    if ( search.get('page') ) {
        page = Number(search.get('page'))
    }
    
    let response = await getPostPreviews(page)

    return json({
        posts: response.posts,
        total: response.total
    })
}