import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";

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
    <div id="samples" className="bg-white py-24 sm:py-32">
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
