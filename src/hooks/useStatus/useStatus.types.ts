import { KeyedMutator } from "swr";

export interface IUseStatusReturn {
    status: IStatusResponse;
    error: any;
    isLoading: boolean;
    isValidating: boolean;
    mutate: KeyedMutator<any>;
}

export interface IStatusResponse {
    active_statements: IActiveStatement[] | [];
    primary_status: IPrimaryStatus;
    planned_closures: IPlannedClosure[] | [] | null;
    lastUpdated: string;
}

interface IActiveStatement {
    id: string;
    source: string;
    location: string;
    message: string;
    last_fetched: string;
}

interface IPrimaryStatus {
    message: string;
    modifier: string;
    color: string;
    datetime: string;
}

interface IPlannedClosure {
    id: string;
    start_datetime: string;
    end_datetime: string;
    reason: string;
    url: string;
    closed_direction: string;
    message: string;
}
