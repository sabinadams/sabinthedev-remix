import { useState, useEffect } from 'react';
import { MetaFunction } from 'remix'
import { Layout } from '../components/Layout';
import { SpeakingEvent } from '../components/SpeakingEvent'
import { SkeletonLoader } from '~/components/SpeakingEventSkeleton';

import { getSpeakingEvents, ISpeakingEvents } from '../services/sanity.service'

export const meta: MetaFunction = () => {
  return {
    title: 'Speaking Events',
    description: `Sabin Adams's Speaking Events`
  }
}

export default function Speaking() {
    const [events, setEvents] = useState<ISpeakingEvents>({
        speakingEvents: [],
        total: 0
    })

    useEffect(() => {
        getSpeakingEvents().then( data => {
            setEvents(data)
        })
    }, [])

    return (
        <Layout showShape={false}>
            <div className="m-auto text-center w-2/5">
                <div className="text-left">
                    <h2 className="text-gray-700 dark:text-gray-300 text-7xl font-extrabold">Speaking</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-xl mt-4">Events both online and offline I've spoken at</p>
                </div>
                <br/><br/>
                <div className="flex flex-col text-left space-y-6">
                    {
                        !events.speakingEvents.length && (<>
                            <SkeletonLoader/>
                            <SkeletonLoader/>
                            <SkeletonLoader/>
                        </>)
                    }
                    {
                        events.speakingEvents.map( (event, i) => <SpeakingEvent key={i} event={event}/>)
                    }
                </div>
            </div>
        </Layout>
    )
}