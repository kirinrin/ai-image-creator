import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";
import Decoration1 from "./Decoration1";

export default function SampleSection() {
  const { language } = useLanguage();
  const t = translations[language];
  // 作品风格名
  const styleNames = t.sampleSection.styles;
  // 作品图片信息
  const images = [
    { src: "/gallery/example01.png", alt: "example01" },
    { src: "/gallery/example02.png", alt: "example02" },
    { src: "/gallery/example03.png", alt: "example03" },
    { src: "/gallery/example04.png", alt: "example04" },
    { src: "/gallery/example05.png", alt: "example05" },
    { src: "/gallery/example06.png", alt: "example06" },
    { src: "/gallery/example07.png", alt: "example07" },
    { src: "/gallery/example08.png", alt: "example08" },
    { src: "/gallery/example09.png", alt: "example09" },
  ];

  return (
    <div id="samples" className="relative isolate bg-white py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl -translate-x-32">
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            {t.sampleSection.sectionTitle}
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            {t.sampleSection.sectionDesc}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, idx) => (
              <div className="flex flex-col" key={img.alt}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  {styleNames[idx] || styleNames[styleNames.length - 1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
