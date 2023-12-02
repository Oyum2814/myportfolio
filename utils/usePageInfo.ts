import {PageInfo} from '../typings'

export const usePageInfo = async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/pageInfo`);

    const data = await res.json();
    const pageInfo:PageInfo = data.pageInfo;
    
    return pageInfo; 
}