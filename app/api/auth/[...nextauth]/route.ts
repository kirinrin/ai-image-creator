import { handlers } from "@/auth";
// vercel 的运行时配置，用edge来运行，属于容器级的优化
export const runtime = "edge"; // optional
export const { GET, POST } = handlers; 