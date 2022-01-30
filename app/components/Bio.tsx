import { useEffect, useState } from 'react'
import { HashnodeProfile } from '~/models/Hashnode'
import { getHashnodeProfileData } from '~/services/hashnode.service'

export default function Bio() {
    const [ profile, setProfile ] = useState<HashnodeProfile['user']>()

    useEffect(() => {
        getHashnodeProfileData().then(setProfile)
    }, [])

    return (
        <div className="flex space-x-6 justify-center">
            <div className="w-20 h-20">
                <img className="rounded-xl" src={profile?.photo}/>
            </div>

            <div className="flex flex-col text-gray-700 font-semibold">
                <h2 className="font-extrabold text-2xl text-emerald-400">{profile?.name}</h2>
                <h3 className="font-bold text-emerald-200">{profile?.tagline}</h3>
                <p>
                    Wanna chat? Hit me up on <a className="font-bold text-blue-300 no-underline hover:underline" href={profile?.socialMedia.twitter}>Twitter</a>!
                </p>
            </div>
        </div>
    )
}
