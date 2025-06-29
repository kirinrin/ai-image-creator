"use client";

import Image from "next/image";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./i18n/translations";
import FeatureSection from "./components/FeatureSection";
import SampleSection from "./components/SampleSection";

export default function Landing() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-white">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="py-24 sm:py-16 lg:pb-10">
          <div className="flex flex-col md:flex-row gap-4">
            {/* 文字说明 */}
            <div className="md:w-1/2 px-6 lg:px-8 mx-auto max-w-2xl text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                {t.landing.title}
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                {t.landing.description}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-gradient-to-r from-custom-purple to-custom-pink px-3.5 py-2.5 w-40 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2">
                  {t.landing.getStarted}
                </a>
                {/* 浏览作品 */}
                <a
                  href="#samples"
                  className="text-sm/6 font-semibold text-gray-900">
                  {t.landing.learnMore} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            {/* 图片展示 */}
            <div className="md:w-1/2 p-6 flow-root">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image
                  alt="Image Creator Example 03"
                  src="/gallery/example03.png"
                  width={1024}
                  height={1024}
                  className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
        <FeatureSection />
        <SampleSection />
        {/* 渐变模糊背景 */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
