export const appendClassName = (className: string | undefined) =>
  className ? ` ${className}` : "";

export const formatClassNames = (
  ...classNames: (string | null | undefined | false)[]
) => classNames.filter(Boolean).join(" ");
