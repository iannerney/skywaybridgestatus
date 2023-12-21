import useSWR, { useSWRConfig } from "swr";
import { fetcher } from "@/utils";
import type { IUseStatusReturn } from "./useStatus.types";

export const useStatus = () => {
    const { data, error, isLoading, isValidating, mutate } = useSWR(
        `https://api.skywaybridgestatus.com/v1/status/?key=${process.env.NEXT_PUBLIC_SBS_API_KEY}`,
        fetcher
    );
    return <IUseStatusReturn>{
        status: data,
        error,
        isLoading,
        isValidating,
        mutate,
    };
};
