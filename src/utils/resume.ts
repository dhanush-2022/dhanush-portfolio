import { profile } from '../data/portfolio';

type ResumeLink = {
  href: string;
  download: string;
};

export function getResumeLink(): ResumeLink {
  const href = profile.resumeUrl || `${import.meta.env.BASE_URL}Dhanush_Resume21.pdf`;

  return {
    href,
    download: 'Dhanush_Resume21.pdf',
  };
}