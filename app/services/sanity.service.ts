import { GraphQLClient, gql } from 'graphql-request'
import {GetSpeakingEventsQuery } from '../models/sanity-generated'
import moment from 'moment'

export interface ISpeakingEvents {
    speakingEvents: GetSpeakingEventsQuery['allSpeakingEvent'],
    total: number
}

export async function getSpeakingEvents(): Promise<ISpeakingEvents> {
    const SpeakingEventsQuery = gql`
       query GetSpeakingEvents {
            allSpeakingEvent {
                _id
                name
                description
                date
                tags
                image {
                    asset {
                        url
                    }
                }
                slug {
                    current
                }
                link
            }
        }
    `;
    
    const graphcms = new GraphQLClient('https://ou53w5qs.api.sanity.io/v1/graphql/production/default')
    const { allSpeakingEvent } = await graphcms.request<GetSpeakingEventsQuery>(SpeakingEventsQuery)

    return { 
        speakingEvents: allSpeakingEvent.sort( (a,b) => moment(b.date) > moment(a.date) ? 1 : 0), 
        total: allSpeakingEvent.length 
    }
}