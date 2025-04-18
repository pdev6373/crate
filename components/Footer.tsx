import Image from 'next/image';
import Link from 'next/link';

const links = [
  {
    link: '',
    icon: '/facebook.svg',
  },
  {
    link: '',
    icon: '/twitter.svg',
  },
  {
    link: '',
    icon: '/youtube.svg',
  },
  {
    link: '',
    icon: '/instagram.svg',
  },
  {
    link: '',
    icon: '/telegram.svg',
  },
];

const getIconDimension = (name: string) =>
  name.includes('insta') ? 24 : name.includes('yout') ? 34 : 30;

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white pt-12 pb-8 px-10 flex flex-col gap-14">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
        <div className="flex items-center justify-start">
          <Link href="/">
            <Image
              src="/logo-white.svg"
              alt="Crate Logo"
              width={150}
              height={34.5}
            />
          </Link>
        </div>

        <div className="flex space-x-6 justify-center lg:justify-end">
          {links.map((link) => (
            <a href={link.link} target="_blank" key={link.icon}>
              <Image
                src={link.icon}
                alt="social media"
                width={getIconDimension(link.icon)}
                height={getIconDimension(link.icon)}
              />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1 items-center">
        <p className="text-sm text-white">
          Copyright © 2024 Crate Platforms LLC. All rights reserved.
        </p>
        <p className="text-white text-sm">Terms & Privacy</p>
      </div>
    </footer>
  );
}
