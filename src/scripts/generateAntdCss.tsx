import fs from "fs";
import React from "react";
import { extractStyle } from "@ant-design/static-style-extract";
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig";

const outputPath = "./public/antd.min.css";

const testGreenColor = "#008000";
const testRedColor = "#ff0000";

const cssText = extractStyle((node) => <ConfigProvider theme={theme}>{node}</ConfigProvider>);

fs.writeFileSync(outputPath, cssText);
