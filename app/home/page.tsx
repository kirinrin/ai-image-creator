"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";
import { useSession } from "next-auth/react";
import Decoration1 from "../components/Decoration1";

const STYLE_MAP = {
  ghibli: "Convert this image to Studio Ghibli style",
  pixar: "Convert this image to Pixar style",
  anime: "Convert this image to Anime style",
  chibi3d: "Convert this image to Chibi3D style",
  cute3dtoycar: "Convert this image to Cute3DToys style",
} as const;
type StyleKey = keyof typeof STYLE_MAP;

export default function Home() {
  // 上传图片
  const [setUploadedFile] = useState<File | null>(null);
  const [imgPreview, setImgPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 提示词
  const [prompt, setPrompt] = useState("");
  // 风格选择
  const [selectedStyle, setSelectedStyle] = useState<StyleKey | null>(null);
  // 生成图片
  const [genImg, setGenImg] = useState<string | null>(null);
  // 加载状态
  const [loading, setLoading] = useState(false);

  const { language } = useLanguage();
  const t = translations[language];
  const { status } = useSession();

  // 获取按钮文本
  const getButtonText = () => {
    if (status !== "authenticated") return "登录";
    return loading ? t.home.generating : t.home.generateBtn;
  };

  // 检查是否禁用生成按钮
  const isGenerateDisabled = loading || !prompt;

  // 模拟生成图片
  const handleGenerate = async () => {
    if (!prompt) return; // 防止空提示词提交

    setLoading(true);
    try {
      // TODO: 实际应调用API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setGenImg("/gallery/example01.png");
    } catch (error) {
      console.error("生成图片失败:", error);
    } finally {
      setLoading(false);
    }
  };

  // 上传图片处理
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setImgPreview(URL.createObjectURL(file));
    }
  };

  // 拖拽上传
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setUploadedFile(file);
      setImgPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-8">
      <Decoration1 />
      {/* 上传图片区 */}
      <div
        className="w-full max-w-xl border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center bg-white mb-6 cursor-pointer hover:border-blue-400 transition"
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}>
        {imgPreview ? (
          <Image
            src={imgPreview}
            alt={t.home.uploadPreviewAlt}
            width={200}
            height={200}
            className="rounded-md object-contain max-h-48"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-48 w-full">
            <svg
              className="w-12 h-12 text-gray-400 mb-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 15V7a4 4 0 018 0v8"
              />
            </svg>
            <p className="text-gray-500">
              {t.home.uploadDragText}
              <br />
              {t.home.uploadSupportText}
            </p>
            <button className="mt-2 px-4 py-1 bg-gray-200 rounded text-sm">
              {t.home.uploadClickText}
            </button>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>

      {/* 提示词输入 */}
      <div className="w-full max-w-xl mb-4">
        <label className="block mb-2 font-semibold text-gray-700">
          {t.home.promptLabel}
        </label>
        <textarea
          className="w-full border rounded p-3 min-h-[60px] focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder={t.home.promptPlaceholder}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      {/* 风格选择 */}
      <div className="w-full max-w-xl flex flex-wrap gap-2 mb-6">
        {Object.keys(STYLE_MAP).map((key) => (
          <button
            key={key}
            className={`px-3 py-1 rounded-full border text-sm transition ${
              selectedStyle === key
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-blue-100"
            }`}
            onClick={() => {
              // 当点击风格按钮时，将当前风格的描述插入到 textarea（prompt）中
              setPrompt(STYLE_MAP[key as StyleKey]);
              setSelectedStyle(key as StyleKey);
            }}
            type="button">
            {t.home.styles[key as keyof typeof t.home.styles]}
          </button>
        ))}
      </div>

      {/* 生成按钮 */}
      <button
        className="w-full max-w-xl py-3 rounded bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold text-lg shadow mb-6 disabled:opacity-60"
        disabled={isGenerateDisabled}
        onClick={handleGenerate}>
        {getButtonText()}
      </button>

      {/* 生成结果展示 */}
      {genImg && (
        <div className="w-full max-w-xl flex flex-col items-center bg-white rounded-lg p-6 shadow">
          <p className="mb-2 text-gray-700 font-semibold">
            {t.home.resultTitle}
          </p>
          <Image
            src={genImg}
            alt={t.home.resultImgAlt}
            width={400}
            height={400}
            className="rounded-md object-contain max-h-80"
          />
        </div>
      )}
    </div>
  );
}
