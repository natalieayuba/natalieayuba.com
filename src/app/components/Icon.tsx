import React, { cloneElement } from 'react';
import type { IconType } from 'react-icons';
import {
  FiChevronLeft,
  FiChevronRight,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPlay,
  FiX,
} from 'react-icons/fi';
import { LuPresentation } from 'react-icons/lu';

export interface IconProps {
  name: string;
  size?: number;
}
const icons = {
  github: <FiGithub />,
  linkedin: <FiLinkedin />,
  email: <FiMail />,
  site: <FiExternalLink />,
  presentation: <LuPresentation />,
  prototype: <FiPlay />,
  close: <FiX />,
  prev: <FiChevronLeft />,
  next: <FiChevronRight />,
};

const Icon = ({ name, size = 24 }: IconProps) =>
  cloneElement(icons[name as keyof IconType], { size });

export default Icon;
