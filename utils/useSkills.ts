import {Skill} from '../typings'

export const useSkills = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`);

    const data = await res.json();
    const skills:Skill[] = data.skills;
    
    return skills; 
}