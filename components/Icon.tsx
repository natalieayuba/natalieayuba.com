import React from 'react';
import type { IconType } from 'react-icons';
import {
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiPlay,
  FiVolumeX,
  FiVolume2,
  FiRotateCw,
} from 'react-icons/fi';
import { LuPresentation } from 'react-icons/lu';

const Icon = ({ name }: { name: string }) => {
  const icons = {
    github: <FiGithub />,
    linkedin: <FiLinkedin />,
    demo: <FiExternalLink />,
    presentation: <LuPresentation />,
    prototype: <FiPlay />,
    mute: <FiVolumeX />,
    volume: <FiVolume2 />,
    resize: <FiRotateCw />,
  };

  return icons[name as keyof IconType];
};

export default Icon;
