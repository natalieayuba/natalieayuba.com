"use client";
import { Hyperlink } from "@/app/components/Hyperlink";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const paths = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Work",
      url: "/#work",
    },
  ];

  return (
    <div>
      <ul className="flex justify-center capitalize">
        {paths.map(({ name, url }) => (
          <li
            key={name}
            className='after:secondary-text after:mx-2 after:content-[">"]'
          >
            <Hyperlink href={url} external={false}>
              {name}
            </Hyperlink>
          </li>
        ))}
        <li>{pathname.split("/")[2]}</li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
