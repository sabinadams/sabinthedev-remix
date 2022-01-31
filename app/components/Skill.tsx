import { Icon, IconifyIcon } from '@iconify/react'

interface Props {
    name: string;
    logo?: IconifyIcon;
}

export default function Skill({name, logo}: Props) {
    return (
        <div className="flex pl-3 items-center text-center bg-white dark:bg-gray-800 dark:text-gray-300 rounded-xl filter drop-shadow-dark-blue-solid-5">
            {logo && <Icon style={{minWidth: '2.5rem'}} icon={logo} className="w-8 h-8"/>}
            <p className="p-4">{name}</p>
        </div>
    )
}