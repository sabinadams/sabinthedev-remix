import { useState, useEffect } from 'react';
import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { Layout } from '../components/Layout';
import { SpeakingEvent } from '../components/SpeakingEvent'
import { SkeletonLoader } from '~/components/SpeakingEventSkeleton';
import { getSpeakingEvents } from '../services/sanity.service'
import { SpeakingEvent as ISpeakingEvent } from '~/models/sanity-generated';
import moment from 'moment'

export const meta: MetaFunction = () => {
    return {
        title: 'Speaking Events',
        description: `Sabin Adams's Speaking Events`
    }
}

export const loader: LoaderFunction = async () => {
    const { speakingEvents } = await getSpeakingEvents()

    return speakingEvents
    .reduce((acc: { past: ISpeakingEvent[], upcoming: ISpeakingEvent[] }, curr: ISpeakingEvent) => {
        acc[
            moment.utc(curr.date) < moment.utc() ? 'past' : 'upcoming'
        ].push(curr)
        return acc
    }, { past: [], upcoming: [] })
}
export default function Speaking() {
    const { past, upcoming } = useLoaderData<{
        past: ISpeakingEvent[],
        upcoming: ISpeakingEvent[]
    }>()

    return (
        <Layout showShape={false}>
            <div className="m-auto text-center w-full px-8 md:w-3/5 md:px-0">
                <div className="md:text-left text-center ">
                    <h2 className="text-gray-700 dark:text-gray-300 text-7xl font-extrabold">Speaking</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-xl mt-4 ">Events both online and offline I've spoken at</p>
                </div>
                <br /><br />
                <div className="flex flex-col text-left space-y-10">
                    {
                        (!past.length && !upcoming.length) && (<>
                            <SkeletonLoader />
                            <SkeletonLoader />
                            <SkeletonLoader />
                        </>)
                    }
                    {!upcoming.length || <>
                        <h3 className="text-gray-700 dark:text-gray-300 font-bold text-3xl text-bl">Upcoming</h3>
                        <hr className='-translate-y-4 border-2 margin-0 rounded-xl border-gray-700 opacity-50' />
                    </>}
                    {!upcoming.length || (<div className="px-6 flex flex-col text-left space-y-6">
                        {
                            upcoming
                            .sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                            .map((event, i) => <SpeakingEvent key={i} event={event} />)
                        }
                    </div>)}
                    {(!past.length || !upcoming.length) || (<>
                        <h3 className="text-gray-700 dark:text-gray-300 font-bold text-3xl text-bl">Past</h3>
                        <hr className='-translate-y-4 border-2 margin-0 rounded-xl border-gray-700 opacity-50' />
                    </>)
                    }
                    {!past.length || (<div className="px-6 flex flex-col text-left space-y-6">
                        {
                            past
                            .sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                            .map((event, i) => <SpeakingEvent key={i} event={event} />)
                        }
                    </div>)}
                </div>
            </div>
        </Layout>
    )
}