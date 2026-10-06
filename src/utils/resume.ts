import { profile } from '../data/portfolio';

type ResumeLink = {
  href: string;
  download: boolean;
};

/**
 * Returns the resume link. Until a hosted PDF URL is set in data/portfolio.ts,
 * it falls back to an email requesting the resume.
 */
export function getResumeLink(): ResumeLink {
  if (profile.resumeUrl) {
    return { href: profile.resumeUrl, download: true };
  }
  return {
    href: `mailto:${profile.email}?subject=${encodeURIComponent('Resume request — Dhanush K')}`,
    download: false
  };
}