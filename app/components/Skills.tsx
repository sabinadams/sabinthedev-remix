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
    const skills = [
        prisma,
        reactIcon,
        graphql,
        nestjs,
        gatsbyIcon,
        tailwindcssIcon,
        postgres,
        vueIcon,
        angularIcon,
        remix,
        nodejsIcon,
        awsIcon,
        microsoftsqlserverIcon,
        fileTypeMongo,
        coldfusionIcon
    ]
    return (
        <div id="skills" className="w-screen px-6 md:px-24 text-center py-4">
            <div className="flex items-center justify-center space-x-4 space-y-4 flex-wrap">
                { skills.map( (skill, i) => <Skill key={i} logo={skill}/> ) }
            </div>
            <h2 className="font-bold text-2xl text-gray-700 dark:text-gray-300 mt-10">... and more!</h2>
        </div>
    )
}
