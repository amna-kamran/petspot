// components/AboutUsSection.tsx
import { Card, CardHeader } from "@heroui/card";
import { title } from "../primitives";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";

const aboutCards = [
  {
    title: "For free, for you",
    description:
      "We exist for pet parents and their furry friends, not advertisers. Everything we recommend is for the best interest of your pet.",
    icon: "solar:heart-bold",
    bg: "#FFE4EC",
  },
  {
    title: "Editorial Integrity",
    description:
      "We pride ourselves in having a diverse team of pet experts committed to superior research, analysis, and transparency.",
    icon: "solar:pen-bold",
    bg: "#E8F7FF",
  },
  {
    title: "100% Vet-reviewed",
    description:
      "All of our content is audited, fact-checked, and approved by vets, licensed technicians, and other certified pet specialists.",
    icon: "solar:shield-check-bold",
    bg: "#EAFBF1",
  },
  {
    title: "Strong Pet Partnerships",
    description:
      "We pair with service providers and pet brands to build a community where pets and their owners can thrive together.",
    icon: "solar:users-group-rounded-bold",
    bg: "#FFF6E5",
  },
];

export default function AboutUsSection() {
  return (
    <section className="w-full mt-20">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-10">
        <p className={title({ size: "lg" })}>About Us</p>
        <Image src="/images/dog.svg" width={100} height={100} alt="Dog" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {aboutCards.map((item, index) => (
          <Card
            key={index}
            className="p-8 border-2 border-gray-200"
            shadow="none"
          >
            <div
              className="p-2 rounded-lg w-fit"
              style={{ backgroundColor: item.bg }}
            >
              <Icon icon={item.icon} width="30" height="30" />
            </div>

            <CardHeader className="p-0 flex-col items-start">
              <h1 className="font-bold text-2xl mt-2">{item.title}</h1>
              <p className="mt-4 text-lg text-gray-500 font-medium">
                {item.description}
              </p>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
