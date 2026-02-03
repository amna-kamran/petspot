"use client";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Icon } from "@iconify/react";
export default function ServicesSection() {
  const list = [
    {
      title: "Cat Pet Visit",
      img: "/images/cat.svg",
      description:
        "Dog pet visit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit",
    },
    {
      title: "Dog Pet Visit",
      img: "/images/dog.svg",
      description:
        "Dog pet visit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit",
    },
    {
      title: "Pet Bath",
      img: "/images/bath.svg",
      description:
        "Dog pet visit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit",
    },
    {
      title: "Pet Grooming",
      img: "/images/grooming.svg",
      description:
        "Dog pet visit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit",
    },
  ];
  return (
    <section>
      <div className="gap-10 grid grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          /* eslint-disable no-console */
          <Card
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
            shadow="none"
            className="group border-2 border-gray-200  transition-all duration-300 hover:-translate-y-2 hover:border-[#A8DEF3]"
          >
            <CardBody className="p-18">
              <div className="flex items-start gap-10">
                <Image
                  alt={item.title}
                  className="w-[200vw] transition-transform duration-300 group-hover:scale-105"
                  src={item.img}
                />
                <div className="flex flex-col gap-2 ">
                  <p className="text-3xl font-bold transition-colors duration-300 group-hover:text-[#79C3E0]">
                    {item.title}
                  </p>
                  <p className="text-lg font-[600] text-gray-400">
                    {item.description}
                  </p>
                  <div className="flex gap-4 mt-6">
                    <Button
                      className="bg-gray-100 p-6 text-md font-[500]"
                      startContent={
                        <Icon
                          icon="ant-design:dollar-outlined"
                          width="50"
                          height="50"
                        />
                      }
                      radius="sm"
                    >
                      99 USD
                    </Button>
                    <Button
                      className="bg-gray-100 p-6 text-md font-[500]"
                      startContent={
                        <Icon icon="ion:time-outline" width="50" height="50" />
                      }
                      radius="sm"
                    >
                      1 hr
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
