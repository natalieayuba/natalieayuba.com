import React, { cloneElement } from 'react';
import type { IconType } from 'react-icons';
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiPlay,
  FiX,
} from 'react-icons/fi';
import { LuPresentation } from 'react-icons/lu';

export interface IconProps {
  name: string;
  size?: number;
}

const Icon = ({ name, size }: IconProps) => {
  const icons = {
    github: <FiGithub />,
    linkedin: <FiLinkedin />,
    site: <FiExternalLink />,
    presentation: <LuPresentation />,
    prototype: <FiPlay />,
    close: <FiX />,
    prev: <FiChevronLeft />,
    next: <FiChevronRight />,
  };

  return cloneElement(icons[name.toLowerCase() as keyof IconType], {
    size: size ?? 24,
  });
};

export default Icon;
