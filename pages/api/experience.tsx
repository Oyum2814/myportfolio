import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import {sanityClient} from '../../sanity';
import {Experience} from '../../typings';

const query = groq`
    *[_type == "experience"]{
        ...,
        technologies[]->
    }
`;
type Data = {
    experiences:Experience[]
}

export default async function handler(req:NextApiRequest, res:NextApiResponse<Data>)
{
    if(req.method !='GET'){
        return res.status(405).end();
    }
    try{
        const experiences:Experience[] = await sanityClient.fetch(query);
        return res.status(200).json({experiences});
    }catch(error){
        console.log(error);
        return res.status(500).end();
    }
}