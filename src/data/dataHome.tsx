import { IconGoal, IconVision, IconMission, IconDesignerS, IconCreation, IconApplications } from '../components/icon/iconHome'; 

import { ReactNode } from 'react';

interface Goal {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
}

export const goalsData: Goal[] = [
  {
    icon: <IconGoal />,
    title: 'Our Goal',
    description:
      'To enable businesses throughout the world to realize their full potential through IT Solutions & Digital Transformation.',
  },
  {
    icon: <IconVision />,
    title: 'Our Vision',
    description:
      'Growing exponentially to become the leaders of the industry, owning up to the digital frontier and thus earning global admiration.',
  },
  {
    icon: <IconMission />,
    title: 'Our Mission',
    description:
      'Working collectively towards the pre-defined metrics that bring about complete satisfaction of our customers.',
  },
];

export const Services: Service[] = [
  {
    icon: <IconDesignerS />,
    title: 'Designer',
    description: 'We provide website design services and other things.',
  },
  {
    icon: <IconCreation />,
    title: 'Website Creation',
    description: 'We provide website creation services.',
  },
  {
    icon: <IconApplications />,
    title: 'Applications/Software',
    description: 'We provide applications/software services.',
  },
];
