/** @type {import('next').NextConfig} */
const nextConfig = {
	/* config options here */
	reactCompiler: true,
	devIndicators: false,
};

export default nextConfig;

import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
