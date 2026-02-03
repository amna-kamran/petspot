"use client";

import { useState } from "react";
import { title } from "../primitives";
import { Image } from "@heroui/image";

const tabs = ["Paw", "Sip", "Bite", "Game"];

const tabContent = [
  {
    title: "Caring For Every Paw.",
    description:
      "Our grooming services ensure your pet’s paws and coat stay healthy, clean, and happy every day.",
    path: "/images/doghouse.svg",
  },

  {
    title: "Caring For Every Sip.",
    description:
      "From baths to hygiene routines, we make sure your pet stays fresh and comfortable all the time.",
    path: "/images/catwork.svg",
  },
  {
    title: "Caring For Every Bite.",
    description:
      "We provide only the best vet-approved meals and treats to keep your pet strong and healthy.",
    path: "/images/catplay.svg",
  },
  {
    title: "Caring For Every Game.",
    description:
      "Our toys, activities, and play sessions are designed to keep your pet active, happy, and engaged.",
    path: "/images/travel.svg",
  },
];

const tabColors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"]; // Blue, Green, Orange, Red

export default function PartnerSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full py-20">
      <div>
        {/* Subtitle */}
        <p className="text-2xl font-semibold">Everywhere you need us</p>

        {/* Heading */}
        <div className="mt-4">
          <h1 className={title({ size: "lg" })}>
            Caring for your pet, together.
          </h1>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-16 w-full relative mx-auto">
        <div className="flex w-full relative">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-1 text-center py-4 text-2xl font-semibold transition-colors duration-200
                ${activeTab === idx ? "text-blue-500" : "text-gray-500"}`}
            >
              {tab}
            </button>
          ))}

          {/* Continuous underline */}
          <div
            className="w-full absolute bottom-0 h-1 bg-gray-300 rounded transition-all duration-500 ease-in-out"
            style={{
              width: `${100}%`,
              left: 0,
            }}
          />

          {/* Active segment thicker with gradient effect */}
          <div className="absolute bottom-0 h-1 w-full pointer-events-none">
            <div
              className="absolute bottom-0 h-full transition-all duration-500 ease-in-out"
              style={{
                width: `${120 / tabs.length}%`,
                left: `${(93.5 / tabs.length) * activeTab}%`,
                background: `linear-gradient(
        to right,
        ${tabColors[activeTab - 1 < 0 ? activeTab : activeTab - 1]}00,  /* fade from previous tab */
        ${tabColors[activeTab]},                                         /* main color */
        ${tabColors[activeTab + 1 >= tabs.length ? activeTab : activeTab + 1]}80 /* fade to next tab */
      )`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="w-full mt-6 px-20 py-20 bg-gray-50 rounded-xl">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className={`flex justify-between transition-all duration-300 ${
              activeTab === idx ? "block" : "hidden"
            }`}
          >
            <div className=" max-w-2xl flex flex-col items-start justify-center  text-start px-4">
              <p className="text-5xl font-semibold mb-2">
                {tabContent[idx].title}
              </p>
              <p className="text-xl text-gray-600 mt-4">
                {tabContent[idx].description}
              </p>
            </div>
            <Image height={300} width={300} src={tabContent[idx].path} />
          </div>
        ))}
      </div>
    </section>
  );
}
