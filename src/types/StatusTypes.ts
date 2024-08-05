export interface IStatusSummary {
    primary_status: IPrimaryStatus;
    active_statements: IActiveStatements[];
    planned_closures: any[]; // TODO: Define this type
}

export interface IPrimaryStatus {
    message: string;
    modifier: string;
    color: string;
    datetime: string;
}

export interface IActiveStatements {
    id: string;
    source: string;
    location: string;
    message: string;
    last_fetched: string;
}
