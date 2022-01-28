import Skill from './Skill'
import reactIcon from '@iconify/icons-logos/react'
import vueIcon from '@iconify/icons-logos/vue';
import angularIcon from '@iconify/icons-logos/angular-icon';
import gatsbyIcon from '@iconify/icons-logos/gatsby';
import tailwindcssIcon from '@iconify/icons-logos/tailwindcss-icon';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import awsIcon from '@iconify/icons-logos/aws';
import microsoftsqlserverIcon from '@iconify/icons-simple-icons/microsoftsqlserver';
import fileTypeMongo from '@iconify/icons-vscode-icons/file-type-mongo';
import sassIcon from '@iconify/icons-logos/sass';
import coldfusionIcon from '@iconify/icons-file-icons/coldfusion';

export default function Skills() {
    const skills = {
        'React': reactIcon,
        'Vue': vueIcon,
        'Angular': angularIcon,
        'Gatsby': gatsbyIcon,
        'Tailwind': tailwindcssIcon,
        'NodeJS': nodejsIcon,
        'AWS': awsIcon,
        'MSSQL': microsoftsqlserverIcon,
        'MongoDB': fileTypeMongo,
        'Sass': sassIcon,
        'ColdFusion': coldfusionIcon
    }
    return (
        <div id="skills" className="w-screen px-6 pt-8 md:px-24 text-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                { Object.entries(skills).map( ([key, value], i) => <Skill key={i} name={key} logo={value}/> ) }
                <Skill name={'And more!'}/>
            </div>
        </div>
    )
}
