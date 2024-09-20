import React, { cloneElement } from 'react';
import type { IconType } from 'react-icons';
import {
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiPlay,
  FiVolumeX,
  FiVolume2,
  FiRotateCw,
  FiChevronDown,
  FiChevronUp,
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
    mute: <FiVolumeX />,
    volume: <FiVolume2 />,
    resize: <FiRotateCw />,
    scrollDown: <FiChevronDown />,
    scrollUp: <FiChevronUp />,
  };

  return cloneElement(icons[name.toLowerCase() as keyof IconType], {
    size: size ?? 24,
  });
};

export default Icon;
