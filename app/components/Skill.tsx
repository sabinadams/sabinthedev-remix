import { Icon, IconifyIcon } from '@iconify/react'

interface Props {
    logo?: IconifyIcon;
}

export default function Skill({logo}: Props) {
    return (
        <div className="p-4 flex justify-center rounded-full bg-white dark:bg-gray-900 dark:bg-opacity-40">
            {logo && <Icon style={{minWidth: '2.5rem'}} icon={logo} className="w-16 h-16"/>}
        </div>
    )
}