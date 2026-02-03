interface MegaMenuProps {
  active: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function MegaMenu({
  active,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  // Define content for each tab
  const menuData: Record<
    string,
    { imageSrc: string; title: string; links: string[] }
  > = {
    Dogs: {
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/02/19/11/30/dog-1210559_1280.jpg",
      title: "Dog Care & Tips",
      links: ["Daily Care", "Vaccination Info", "Training Tips"],
    },
    Cats: {
      imageSrc:
        "https://cdn.pixabay.com/photo/2017/09/25/13/12/cat-2785074_1280.jpg",
      title: "Cat Care & Tips",
      links: ["Nutrition", "Grooming", "Health Guides"],
    },
    "All Pets": {
      imageSrc:
        "https://cdn.pixabay.com/photo/2016/08/11/23/48/dog-1583803_1280.jpg",
      title: "Explore PetSpot",
      links: ["Book a Service", "Community & Tips", "Product Recommendations"],
    },
  };

  const content = menuData[active] || menuData["All Pets"];

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="
        fixed
        top-[64px]
        left-0
        w-full
        bg-background
        border-t
        shadow-xl
        z-40
        p-8
        h-[50vh]
        flex
        justify-center
        items-center
      "
    >
      <ImageSection
        imageSrc={content.imageSrc}
        title={content.title}
        links={content.links}
      />
    </div>
  );
}

function ImageSection({
  title,
  imageSrc,
  links,
}: {
  title: string;
  imageSrc: string;
  links: string[];
}) {
  return (
    <div className="flex flex-row gap-8 items-center max-w-5xl w-full">
      {/* Image on left */}
      <div className="relative w-1/2 h-64 overflow-hidden rounded-lg shadow-md">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text + Links on right */}
      <div className="flex flex-col gap-4 w-1/2">
        <h4 className="text-2xl font-bold text-gray-800">{title}</h4>

        <ul className="flex flex-col gap-2 text-base text-gray-700">
          {links.map((label, i) => (
            <li
              key={label}
              className={`
                cursor-pointer
                transition
                hover:text-blue-600
                ${i === 0 ? "font-semibold" : "font-medium"}
              `}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
