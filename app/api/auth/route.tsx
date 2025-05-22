import { handlers } from "@/auth"; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;
// vercel 的运行时配置，用edge来运行，属于容器级的优化
export const runtime = "edge"; // optional
