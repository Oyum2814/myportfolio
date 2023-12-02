import React from 'react';
import useSWR from 'swr';
import fetcher from "@/lib/fetcher";

const useProjects = ()=>{
    const {data, error, isLoading, mutate } = useSWR('/api/projects',fetcher);
    return {
        data,
        error,
        isLoading,
        mutate,
    };
};

export default useProjects;