"use client";
import { PrimaryStatus, ProjectInformation, StatusDetails, SupportSection } from "@/components/Blocks";
import { PageLayout } from "@/components/Layouts";

async function getData() {
    const res = await fetch(`https://www.skywaybridgestatus.com/v1/status/?key=${process.env.SBS_API_KEY}`, {
        next: { revalidate: 0 },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

// eslint-disable-next-line @next/next/no-async-client-component
const Home = async () => {
    const data = await getData();
    console.log(data);
    const { primary_status, active_statements, planned_closures } = data;
    return (
        <PageLayout>
            <PrimaryStatus
                status={primary_status.message}
                color={primary_status.color}
                datetime={primary_status.datetime}
            />
            <StatusDetails activeStatements={data.active_statements} plannedClosures={data.plannedClosures} />
            <SupportSection />
            <ProjectInformation />
        </PageLayout>
    );
};
export default Home;
