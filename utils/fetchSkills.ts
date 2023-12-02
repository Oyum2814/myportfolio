import {Skill} from '../typings'
import {groq} from 'next-sanity'
import {sanityClient} from '@/sanity'

const query = groq`
    *[_type == "skill"]
`
export const fetchSkills = async()=>{
    const res = await sanityClient.fetch(query);

    const data = await res.json();
    const skills:Skill[] = data.skills;
    
    return skills; 
}