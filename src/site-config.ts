export const siteConfig = {
  author: 'Ariel Conde',
  title: 'Product design portfolio',
  subtitle: 'Vitesse theme for Astro, supports Vue and UnoCSS.',
  description: 'A Minimal, SEO-friendly portfolio and blog theme for Astro.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'hola@arielcnd.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: '',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Twitter',
      href: '',
      icon: 'i-simple-icons-x',
      header: 'i-ri-twitter-x-line',
    },
    {
      text: 'Linkedin',
      href: '',
      icon: 'i-simple-icons-linkedin',
    },
    {
      text: 'Instagram',
      href: 'https://www.instagram.com/arielc_nd_/',
      icon: 'i-simple-icons-instagram',
    },
    {
      text: 'Youtube',
      href: '',
      icon: 'i-simple-icons-youtube',
    },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Legal notice',
        href: '/legal-notice',
      },
      {
        text: 'Privacy policy',
        href: '/privacy-policy',
      },
      {
        text: 'Cookies policy',
        href: '/privacy-policy',
      },
    ],
  },
}

export default siteConfig
