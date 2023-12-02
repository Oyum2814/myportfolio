// import type { NextApiRequest, NextApiResponse } from 'next'
// import {groq} from 'next-sanity'
// import {sanityClient} from '../../sanity';
// import {Social} from '../../typings';

// const query = groq`
//     *[_type == "social"]
// `
// type Data = {
//     socials:Social[]
// }

// export default async function handler(req:NextApiRequest, res:NextApiResponse<Data>)
// {
//     if(req.method !='GET'){
//         return res.status(405).end();
//     }
//     try{
//         const socials:Social[] = await sanityClient.fetch(query);
//         return res.status(200).json({socials});
//     }catch(error){
//         console.log(error);
//         return res.status(500).end();
//     }
// }