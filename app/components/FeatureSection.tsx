import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "风格多样，想怎么画就怎么画",
    description:
      "梦幻吉卜力、潮流动漫、精致3D卡通、复古胶片……上百种风格随你选。灵感来了，立刻就能画出来。",
    href: "#",
    icon: CloudArrowUpIcon,
  },
  {
    name: "指令清楚，画得如你所想",
    description:
      "强大的AI能看懂你的长指令，动作、镜头、光线，全都能准确表现，效果真实，细节满满。",
    href: "#",
    icon: LockClosedIcon,
  },
  {
    name: "图和字搭配，表达更到位",
    description:
      "不管是做海报、做梗图，还是做教学图，只要你输入文字，就能自动加上合适的画面，清楚又吸引人。",
    href: "#",
    icon: ArrowPathIcon,
  },
  {
    name: "现成模板，新手也能上手",
    description:
      "我们准备了很多好用的提示词模板，都是大家用过验证的，简单易懂，没经验也能轻松做出好作品。",
    href: "#",
    icon: ArrowPathIcon,
  },
];

export default function FeatureSection() {
  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            动动手指，AI 帮你把图画出来
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            用最先进的 AI
            技术，帮你把脑海里的创意变成好看的图，不用画画功底，也能做出专业级作品。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon
                    aria-hidden="true"
                    className="size-5 flex-none text-indigo-600"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
