import type { ContentProps } from "@/app/_configs/projects";
import { cloneElement } from "react";
import Figure from "./Figure";

const Content = ({ content }: { content: ContentProps[] }) => (
  <div className="mt-24">
    {content.map(({ heading, paragraphs }) => (
      <div
        key={heading}
        className="mb-12 leading-loose [&>*]:mx-auto [&_p]:mb-[1rem]"
      >
        {paragraphs.map((p, index) =>
          index === 0 ? (
            <div key={index} className="max-w-prose">
              <h2 className="heading-md self-start">{heading}</h2>
              {p}
            </div>
          ) : p.type === Figure ? (
            p
          ) : (
            cloneElement(p, { className: "max-w-prose" })
          ),
        )}
      </div>
    ))}
  </div>
);

export default Content;
