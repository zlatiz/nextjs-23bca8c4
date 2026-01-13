import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';

const NAV = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Home Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

export default function Header(): JSX.Element {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 shadow-sm">
      <div className="container-max mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm text-white font-semibold">JPM</div>
          <div className="hidden md:block">
            <nav aria-label="Primary" className="flex gap-6">
              <Link href="/"> <a className="font-medium">Home</a> </Link>
              {(Array.isArray(NAV) ? NAV : []).map((item) => (
                <a key={item.href} href={item.href} className="font-medium">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a href="/contact-us.html" className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white">
              Contact Us
            </a>
          </div>
          <MobileNav links={NAV} />
        </div>
      </div>
    </header>
  );
}
