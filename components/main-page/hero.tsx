// components/HeroSection.tsx
import Image from "next/image";
import { title } from "@/components/primitives";

export default function HeroSection() {
  return (
    <div className="flex justify-between  items-start w-full">
      <div className="flex flex-col max-w-lg text-left gap-4 pt-20">
        <p className={title({ size: "lg" })}>
          A veterinary you and your little friend can trust
        </p>
        <p className="text-xl font-medium">
          We provide pet owners with trusted, 100% vet-reviewed content and
          resources for every stage of their pet’s life.
        </p>
      </div>

      <Image
        src="/images/cat.png"
        alt="cat"
        width={800}
        height={800}
        className="scale-x-[-1]"
      />
    </div>
  );
}
