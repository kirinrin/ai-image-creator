import Image from "next/image";

export default function SampleSection() {
  return (
    <div id="samples" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
            只用一句话，就可以生成这样的图
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            我们准备了很多好用的提示词模板，都是大家用过验证的，简单易懂，没经验也能轻松做出好作品。
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/example01.png"
                  alt="示例图片1"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">梦幻吉卜力风格</p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/example02.png"
                  alt="示例图片2"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">潮流动漫风格</p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/example03.png"
                  alt="示例图片3"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">卡通风格</p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/example04.png"
                  alt="示例图片4"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">名作再创作</p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/example05.png"
                  alt="示例图片5"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">海报直出（3D）</p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/example06.png"
                  alt="示例图片6"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">奇幻场景</p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/example07.png"
                  alt="示例图片7"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">海报直出</p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/example08.png"
                  alt="示例图片8"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">怀旧卡通风格</p>
            </div>
            <div className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="/example09.png"
                  alt="示例图片9"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">照片3D化</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
