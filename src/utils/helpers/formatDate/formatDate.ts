export const formatDate = (date: Date | string) => {
    const dateObject = new Date(date);
    return dateObject.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
};
