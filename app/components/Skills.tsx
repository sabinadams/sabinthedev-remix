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
import graphql from '@iconify/icons-logos/graphql'
import prisma from '@iconify/icons-logos/prisma'
import nestjs from '@iconify/icons-logos/nestjs'
import remix from '@iconify/icons-logos/remix'
import postgres from '@iconify/icons-logos/postgresql'

export default function Skills() {
    const skills = {
        'Prisma': prisma,
        'React': reactIcon,
        'GraphQL': graphql,
        'NestJS': nestjs,
        'Gatsby': gatsbyIcon,
        'Tailwind': tailwindcssIcon,
        'Postgres': postgres,
        'Vue': vueIcon,
        'Angular': angularIcon,
        'Remix': remix,
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
