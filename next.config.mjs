import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public", // Dónde se almacenará el Service Worker
  // register: true, // Registrará el Service Worker de forma automática
  // skipWaiting: true, // Saltará la espera para activar el Service Worker más rápido
  disable: process.env.NODE_ENV === "development", // Desactiva PWA en modo desarrollo
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
