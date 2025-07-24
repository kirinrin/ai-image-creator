"use client";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";
const featureIcons = [
  CloudArrowUpIcon,
  LockClosedIcon,
  ArrowPathIcon,
  ArrowPathIcon,
];

export default function FeatureSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const features = t.featuresSection.features.map((feature, idx) => ({
    ...feature,
    icon: featureIcons[idx],
    href: "#",
  }));

  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            {t.featuresSection.sectionTitle}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            {t.featuresSection.sectionDesc}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-indigo-600"
                  />
                  {feature.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.desc}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
