import { ISpeakingEvents } from "~/services/sanity.service"
import moment from 'moment'
import LinkChain from '@iconify/icons-akar-icons/link-chain'
import { Icon } from '@iconify/react'

export const SpeakingEvent = ({ event }: { event: ISpeakingEvents['speakingEvents'][0] }) => {
    return <div className="text-gray-700 dark:text-gray-300 transition ease-in-out duration-300 transform hover:-translate-y-2 flex flex-col space-y-4">
        <a
            className={"font-extrabold text-2xl flex items-center"}
            target={event.link ? '_blank' : '_self'}
            href={event.link || 'javascript:;'}
        >
            {event.link && <Icon icon={LinkChain} className="w-5 h-5 inline mr-2" />}
            {event.name}
        </a>

        <p className="text-xl text-gray-700 dark:text-gray-300">{event.description}</p>

        <p className="text-sm text-gray-800 opacity-75 dark:text-gray-400">
            {moment.utc(event.date).format('MMMM YYYY')}
            {event.event && ` @ ${event.event}`}
        </p>

        <span>
            {
                event.tags?.map((tag, i) => <span key={i} className="rounded-xl bg-blue-800 dark:bg-cyan-900 text-white text-sm px-2 py-1 mr-2">
                    {tag}
                </span>)
            }
        </span>
    </div>
}