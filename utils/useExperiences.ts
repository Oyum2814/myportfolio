import {Experience} from '../typings'

export const useExperiences = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/experience`);

    const data = await res.json();
    const experiences:Experience[] = data.experiences;
    
    return experiences; 
}