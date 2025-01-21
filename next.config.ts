import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|avi)$/,
      type: 'asset/resource',
    });
    return config;
  },
};

export default withNextVideo(nextConfig);