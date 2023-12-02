import type { NextApiRequest, NextApiResponse } from 'next'
import {groq} from 'next-sanity'
import {sanityClient} from '../../sanity';
import {PageInfo} from '../../typings';

const query = groq`
    *[_type == "pageInfo"][0]
`;
type Data = {
    pageInfo:PageInfo;
}

export default async function handler(req:NextApiRequest, res:NextApiResponse<Data>)
{
    if(req.method !='GET'){
        return res.status(405).end();
    }
    try{
        const pageInfo:PageInfo = await sanityClient.fetch(query);
        return res.status(200).json({pageInfo});
    }catch(error){
        console.log(error);
        return res.status(500).end();
    }
}