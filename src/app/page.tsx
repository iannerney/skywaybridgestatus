"use client";
import { PrimaryStatus, ProjectInformation, StatusDetails, SupportSection } from "@/components/Blocks";
import { PageLayout } from "@/components/Layouts";

// async function getData() {
//     const res = await fetch(`https://www.skywaybridgestatus.com/v1/status/?key=${process.env.SBS_API_KEY}`, {
//         next: { revalidate: 5 },
//     });
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.

//     if (!res.ok) {
//         // This will activate the closest `error.js` Error Boundary
//         throw new Error("Failed to fetch data");
//     }

//     return res.json();
// }

const Home = () => {
    // const data = await getData();
    // console.log(data);
    return (
        <PageLayout>
            <PrimaryStatus />
            <StatusDetails />
            <SupportSection />
            <ProjectInformation />
        </PageLayout>
    );
};
export default Home;
