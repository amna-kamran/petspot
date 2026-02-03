"use client";
import AboutUsSection from "@/components/main-page/about-us";
import HeroSection from "@/components/main-page/hero";
import ImageGridSection from "@/components/main-page/image-grid";
import InfoSection from "@/components/main-page/info";
import PartnerSection from "@/components/main-page/partner-section";
import ServicesSection from "@/components/main-page/services";
import { Divider } from "@heroui/divider";

export default function Home() {
  return (
    <section className="w-full py-8 md:py-10">
      <HeroSection />
      <InfoSection />
      <ServicesSection />
      <AboutUsSection />
      <ImageGridSection />
      <PartnerSection />
    </section>
  );
}

{
  /* <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "blue" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */
}
