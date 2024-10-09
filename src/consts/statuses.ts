import { IStatuses } from "@/types/StatusTypes";

export const statuses: IStatuses = {
    unknown: {
        message: "unknown – cannot fetch status",
        modifier: "error",
        color: "#4A4A4A",
    },
    closed: {
        message: "closed",
        modifier: "closed",
        color: "red",
    },
    open: {
        message: "open",
        modifier: "open",
        color: "darkgreen",
    },
    caution: {
        message: "open with an advisory",
        modifier: "caution",
        color: "#FFB600",
    },
    mixed: {
        message: "mixed status (see active statements)",
        modifier: "error",
        color: "#4A4A4A",
    },
};
