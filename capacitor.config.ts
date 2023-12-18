import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
    appId: "com.skywaybridgestatus.app",
    appName: "Skyway Bridge Status",
    webDir: "out",
    server: {
        androidScheme: "https",
    },
};

export default config;
