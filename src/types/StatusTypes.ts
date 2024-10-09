export interface IStatusSummary {
    primary_status: IPrimaryStatus;
    active_statements: IActiveStatements[];
    planned_closures: any[]; // TODO: Define this type
}

export interface IStatuses {
    unknown: IStatusesDetails;
    closed: IStatusesDetails;
    open: IStatusesDetails;
    caution: IStatusesDetails;
    mixed: IStatusesDetails;
}

export interface IStatusesDetails {
    message: string;
    modifier: string;
    color: string;
}

export interface IPrimaryStatus extends IStatusesDetails {
    datetime: string;
}

export interface IActiveStatements {
    id: string;
    source: string;
    location: string;
    message: string;
    last_fetched: string;
}
