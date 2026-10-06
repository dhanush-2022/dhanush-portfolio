type ResumeLink = {
  href: string;
  download: string;
};

export function getResumeLink(): ResumeLink {
  return {
    href: `${import.meta.env.BASE_URL}Dhanush_Resume21.pdf`,
    download: 'Dhanush_K_Resume.pdf',
  };
}