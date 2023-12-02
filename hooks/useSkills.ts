import React from 'react';
import useSWR from 'swr';
import fetcher from "@/lib/fetcher";

const useSkills = ()=>{
    const {data, error, isLoading, mutate } = useSWR('/api/skills',fetcher);
    return {
        data,
        error,
        isLoading,
        mutate,
    };
};

export default useSkills;