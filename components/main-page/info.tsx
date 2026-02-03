// components/InfoSection.tsx
import { Icon } from "@iconify/react";

const infoData = [
  {
    title: "Contact us",
    icon: "mynaui:mail",
    content: ["contact@vet.com", "(323) 238 - 0696"],
    hoverEffect: true, // only content will animate
  },
  {
    title: "Open Hours",
    icon: "ion:time-outline",
    content: [
      "Mon - Fri: 8:00 AM to 5:00 PM",
      "Saturday: 9:00 AM to 3:00 PM",
      "Sunday: 9:00 AM to 2:00 PM",
    ],
  },
  {
    title: "Location",
    icon: "proicons:location",
    content: ["9400 S Normandie Ave #14", "Los Angeles, CA"],
  },
];

export default function InfoSection() {
  return (
    <section className="my-24">
      <div className="flex flex-col lg:flex-row justify-between w-full gap-10">
        {infoData.map((item) => (
          <div
            key={item.title}
            className={`flex items-start gap-6 ${item.hoverEffect ? "group" : ""}`}
          >
            {/* Icon */}
            <div className="p-4 rounded-full bg-gray-100 flex-shrink-0">
              <Icon icon={item.icon} width="50" height="50" />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-2">
              {/* Title stays static */}
              <p className="text-2xl font-bold">{item.title}</p>

              {/* Content lines hover only if hoverEffect=true */}
              {item.content.map((line, idx) => (
                <p
                  key={idx}
                  className={`text-gray-500 text-lg font-semibold transition-transform duration-300 ${
                    item.hoverEffect
                      ? "hover:underline hover:translate-x-2"
                      : ""
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
