import React from 'react';
import useSWR from 'swr';
import fetcher from "@/lib/fetcher";

const useSocials = ()=>{
    const {data, error, isLoading, mutate } = useSWR('/api/socials',fetcher);
    return {
        data,
        error,
        isLoading,
        mutate,
    };
};

export default useSocials;