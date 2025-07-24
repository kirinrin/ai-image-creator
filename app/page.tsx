"use client";

import Image from "next/image";
import { useLanguage } from "./contexts/LanguageContext";
import { translations } from "./i18n/translations";
import FeatureSection from "./components/FeatureSection";
import SampleSection from "./components/SampleSection";
import PriceSection from "./components/PriceSection";
import Decoration1 from "./components/Decoration1";
import Decoration2 from "./components/Decoration2";

export default function Landing() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="bg-white">
      <div className="relative isolate">
        <Decoration1 />
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
        <PriceSection />
        <SampleSection />
        <Decoration2 />
      </div>
    </div>
  );
}
