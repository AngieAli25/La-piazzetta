/** @type {import('next').NextConfig} */
const nextConfig = {
    // Disable network detection to avoid uv_interface_addresses error
    experimental: {
        disableOptimizedLoading: false,
    },
};

module.exports = nextConfig;
