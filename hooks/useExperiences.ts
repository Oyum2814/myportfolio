import React from 'react';
import useSWR from 'swr';
import fetcher from "@/lib/fetcher";

const useExperiences = ()=>{
    const {data, error, isLoading, mutate } = useSWR('/api/experience',fetcher);
    return {
        data,
        error,
        isLoading,
        mutate,
    };
};

export default useExperiences;