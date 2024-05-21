import React from 'react';
import type { IconType } from 'react-icons';
import { FiExternalLink, FiGithub, FiLinkedin } from 'react-icons/fi';
import { LuPresentation } from "react-icons/lu";

const Icon = ({ iconName }: { iconName: string }) => {

  const icons = {
    github: <FiGithub />,
    linkedin: <FiLinkedin />,
    externalLink: <FiExternalLink />,
    presentation: <LuPresentation />
  }

  return icons[iconName as keyof IconType];
};

export default Icon;
