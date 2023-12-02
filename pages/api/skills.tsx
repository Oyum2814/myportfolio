import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import {sanityClient} from '../../sanity';
import {Skill} from '../../typings';

const query = groq`
    *[_type == "skill"]
`
type Data = {
    skills:Skill[]
}

export default async function handler(req:NextApiRequest, res:NextApiResponse<Data>)
{
    if(req.method !='GET'){
        return res.status(405).end();
    }
    try{
        const skills:Skill[] = await sanityClient.fetch(query);
        return res.status(200).json({skills});
    }catch(error){
        console.log(error);
        return res.status(500).end();
    }
}