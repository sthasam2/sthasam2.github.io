export interface NavButtonProps {
  title: string;
  href: string;
  active: boolean;
}

export interface HeadingProps {
  fullName: string;
  designation: string;
  location: string;
}

export interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export type TwemojiProps = {
  emoji: string;
  size?: string;
  className?: string;
};

export interface HeroProps {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  CTAProps: {
    label: string;
    url: string;
  };
}

export interface HeroWithSideImageProps extends HeroProps {
  side: 'left' | 'right';
  bgColor: string;
}
