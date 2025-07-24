"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";

export default function Page() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            alt="AI Image Generator Logo"
            src="/logo.svg"
            className="mx-auto h-20 w-auto"
            width={100}
            height={100}
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            {t.auth.loginTitle}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <button
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
              {t.auth.loginWithGithub}
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">{t.auth.or}</span>
              </div>
            </div>

            <form action="#" method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900">
                  {t.auth.email}
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="verfiyCode"
                    className="block text-sm/6 font-medium text-gray-900">
                    {t.auth.verifyCode}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="verfiyCode"
                    name="verfiyCode"
                    type="text"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-g px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs bg-gradient-to-r from-custom-purple to-custom-pink transition-colors hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  {t.auth.sendCode}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
