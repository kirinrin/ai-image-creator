"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../i18n/translations";
import { useSession } from "next-auth/react";
import { AvatarButton } from "@/components/avatar";

const navigation = [
  { name: "samples", href: "#samples" },
  { name: "features", href: "#" },
  { name: "price", href: "#" },
  { name: "start", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  const { data: session, status } = useSession();

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh");
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/40 backdrop-blur-sm shadow-sm">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-2 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">AI Image Creator</span>
            <Image
              width={48}
              height={48}
              alt=""
              src="/logo-r.png"
              className="h-12 w-auto"
            />
          </Link>
          <span className="ml-4 text-xl font-bold flex items-center">
            {t.app.title}
          </span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
            <span className="sr-only">{t.app.title}</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-700">
              {t.navigation[item.name as keyof typeof t.navigation]}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700 mr-10 cursor-pointer"
            onClick={toggleLanguage}>
            {language === "zh" ? "English" : "中文"}
          </button>
          {status === "authenticated" && session?.user ? (
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-600">
                欢迎，{session.user.name || session.user.email}!
              </p>
              {session.user.image ? (
                <Image
                  width={24}
                  height={24}
                  src={session.user.image}
                  alt="头像"
                  className="inline-block size-10 rounded-full"
                />
              ) : (
                <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <UserIcon className="size-6 text-gray-500" />
                </div>
              )}
            </div>
          ) : (
            <a
              href="/login"
              className="rounded-md text-sm font-medium px-3 h-8 w-16 items-center justify-center inline-flex whitespace-nowrap bg-gradient-to-r from-custom-purple to-custom-pink transition-colors text-white dark:text-black">
              {t.auth.login}
            </a>
          )}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">AI Image Creator</span>
              <Image
                width={48}
                height={48}
                alt=""
                src="/logo.png"
                className="h-12 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    {t.navigation[item.name as keyof typeof t.navigation]}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {status === "authenticated" && session?.user ? (
                  <div className="flex items-center space-x-2">
                    <p className="text-sm text-gray-600">
                      欢迎，{session.user.name || session.user.email}!
                    </p>
                    {session.user.image ? (
                      <AvatarButton
                        className="size-10"
                        src={session.user.image}
                      />
                    ) : (
                      <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <UserIcon className="size-6 text-gray-500" />
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    {t.auth.login}
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
