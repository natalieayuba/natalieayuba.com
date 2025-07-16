import { defaultAnimationInterval } from "@/config";

export const appendClassName = (className: string | undefined) =>
  className ? ` ${className}` : "";

export const formatClassNames = (
  classNames: (string | null | undefined | false)[],
) => classNames.filter(Boolean).join(" ");

export const getAnimationDelay = (
  order: number,
  interval: number = defaultAnimationInterval,
) => ({
  animationDelay: `${interval * (order + 1)}ms`,
});
