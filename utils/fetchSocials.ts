import {Social} from '../typings'
import {groq} from 'next-sanity'
import {sanityClient} from '@/sanity';

const query = groq`
    *[_type == "social"]
`

export const fetchSocials = async()=>{
    const res = await sanityClient.fetch(query);
    const data = await res.json();
    const socials:Social[] = data.socials;
    
    return socials; 
}