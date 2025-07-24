"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">认证错误</h1>
        <p className="text-gray-600 mb-4">
          {error === "Configuration" && "服务器配置错误，请检查环境变量设置。"}
          {error === "AccessDenied" && "访问被拒绝，请确保您有权限访问此应用。"}
          {error === "Verification" && "验证失败，请重试。"}
          {!error && "发生未知错误，请重试。"}
        </p>
        <a href="/login" className="text-indigo-600 hover:text-indigo-500">
          返回登录页面
        </a>
      </div>
    </div>
  );
}

export default function ErrorPage() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <ErrorContent />
    </Suspense>
  );
}
