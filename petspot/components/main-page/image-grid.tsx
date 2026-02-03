import Image from "next/image";

export default function ImageGridSection() {
  return (
    <section
      className="w-screen overflow-x-auto py-20 -mx-30"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="flex gap-6 min-w-[1000px] ">
        {/* Column 1 – Big image */}
        <div className="w-[30vw] h-[45vw] relative rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src="https://cdn.prod.website-files.com/67911e861e41bff10325ab6b/67c1e2bfc5b146946cc94ef2_gallery-1.webp"
            alt="Pet image"
            fill
            className="object-cover"
          />
        </div>

        {/* Column 2 – Two stacked images */}
        <div className="flex flex-col gap-[2vw] w-[24vw] h-[45vw] flex-shrink-0">
          <div
            className="relative rounded-xl overflow-hidden"
            style={{ height: "calc((45vw - 2vw)/2)" }}
          >
            <Image
              src="https://cdn.prod.website-files.com/67911e861e41bff10325ab6b/67c1e2c33cdb4e4fa68c0025_gallery-2.webp"
              alt="Pet image"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="relative rounded-xl overflow-hidden"
            style={{ height: "calc((45vw - 2vw)/2)" }}
          >
            <Image
              src="https://cdn.prod.website-files.com/67911e861e41bff10325ab6b/67c1e2c6c581f0a954218b54_gallery-3.webp"
              alt="Pet image"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Column 3 – Big image */}
        <div className="w-[30vw] h-[45vw] relative rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src="https://cdn.prod.website-files.com/67911e861e41bff10325ab6b/67c1e39f340e33ae7edcaa54_gallery-4.webp"
            alt="Pet image"
            fill
            className="object-cover"
          />
        </div>

        {/* Column 4 – Two stacked images */}
        <div className="flex flex-col gap-[2vw] w-[24vw] h-[45vw] flex-shrink-0">
          <div
            className="relative rounded-xl overflow-hidden"
            style={{ height: "calc((45vw - 2vw)/2)" }}
          >
            <Image
              src="https://cdn.prod.website-files.com/67911e861e41bff10325ab6b/67c1ea450d3f278a8024b8c8_gallery-5.webp"
              alt="Pet image"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="relative rounded-xl overflow-hidden"
            style={{ height: "calc((45vw - 2vw)/2)" }}
          >
            <Image
              src="https://cdn.prod.website-files.com/67911e861e41bff10325ab6b/67c1ea4b26f8835060b3b08e_gallery-6.webp"
              alt="Pet image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
