import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import {sanityClient} from '../../sanity';
import {Project} from '../../typings';

const query = groq`
    *[_type == "project"]{
        ...,
        technologies[]->
    }
`;
type Data = {
    projects:Project[]
}

export default async function handler(req:NextApiRequest, res:NextApiResponse<Data>)
{
    if(req.method !='GET'){
        return res.status(405).end();
    }
    try{
        const projects:Project[] = await sanityClient.fetch(query);
        return res.status(200).json({projects});
    }catch(error){
        console.log(error);
        return res.status(500).end();
    }
}