import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Gera pasta 'out' para deploy estático
  images: {
    unoptimized: true, // Necessário para export estático (desativa otimização server-side)
  },
  trailingSlash: true, // (opcional) adiciona "/" no final das rotas, melhora compatibilidade
};

export default nextConfig;
