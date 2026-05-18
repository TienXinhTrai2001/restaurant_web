"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const menu = [
    "Tất cả",
    "Món ăn",
    "Thức uống",
    
    "Blog",
    "Về chúng tôi",
    "Liên hệ",
  ];

  return (
    <>
      <header className="border-b bg-white">

        {/* Top header */}
        <div className="container mx-auto flex h-14 items-center justify-between px-4">

          {/* Left */}
          <div className="flex items-center gap-4">

            {/* Mobile button */}
            <button
              className="text-2xl md:hidden"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>

            {/* Logo */}
            <div className="text-4xl font-bold">
              <span className="text-blue-700">RES</span>
              <span className="text-orange-500">TAURANT</span>
            </div>

            {/* Search desktop */}
            <div className="relative hidden md:block">
              <input
                placeholder="Tìm theo điểm đến, hoạt động"
                className="
                  w-[320px]
                  rounded-full
                  bg-gray-100
                  py-2
                  pl-10
                  pr-4
                  outline-none
                "
              />

              <span className="absolute left-3 top-2">
                🔍
              </span>
            </div>

          </div>

          {/* Right desktop */}
          <div className="hidden md:flex items-center gap-8">

           
            <a href="#">Tải ứng dụng</a>
            <a href="#">Trợ giúp</a>
            <a href="#">Xem gần đây</a>

            <img
              src="https://i.pravatar.cc/40"
              className="h-9 w-9 rounded-full"
              alt=""
            />
          </div>

          {/* Mobile avatar */}
          <img
            src="https://i.pravatar.cc/40"
            className="h-8 w-8 rounded-full md:hidden"
            alt=""
          />
        </div>

        {/* Bottom navbar desktop */}
        <div className="hidden border-t md:block">
          <div className="container mx-auto flex h-16 items-center px-4">

            <div className="flex gap-10">
              {menu.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-blue-600"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="ml-auto flex gap-8">
              <a href="#">🎁 Phiếu quà tặng</a>
              <a href="#">🛒 Giỏ hàng</a>
            </div>

          </div>
        </div>

      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar mobile */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-slate-900 text-white z-50 transform transition-transform duration-300 md:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >

        <div className="flex items-center justify-between border-b p-4">

          <button
            onClick={() => setOpen(false)}
            className="border px-2 rounded"
          >
            ✕
          </button>

          <div className="font-bold">
            RES<span className="text-orange-400">TAURANT</span>
          </div>

          <img
            src="https://i.pravatar.cc/40"
            className="h-8 w-8 rounded-full"
            alt=""
          />
        </div>

        <div className="p-4 space-y-3">

          {menu.map((item) => (
            <div
              key={item}
              className="
                rounded-md
                p-2
                hover:bg-slate-800
                cursor-pointer
              "
            >
              {item}
            </div>
          ))}

        </div>
      </div>
    </>
  );
}