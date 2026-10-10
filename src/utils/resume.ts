import { profile } from '../data/portfolio';

type ResumeLink = {
  href: string;
  download: boolean;
};

/**
 * Returns the resume link. When a PDF is available on the site, use the base-aware path.
 * Otherwise fall back to an email request flow.
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