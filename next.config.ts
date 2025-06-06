import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Permite solicitudes de desarrollo desde tu móvil
  allowedDevOrigins: [
    '192.168.100.6',
    // O más general para toda tu red local:
    '192.168.100.*'
  ]
};

export default nextConfig;