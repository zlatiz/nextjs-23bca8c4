import Image from 'next/image';

export default function Footer(): JSX.Element {
  const year = 2026;
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-max mx-auto py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-sm text-white font-semibold">JPM</div>
              <div>
                <p className="font-semibold">JP Malone Construction INC.</p>
                <address className="not-italic text-sm text-muted-foreground">
                  8261 East Evans Rd, Suite 104<br />Scottsdale, AZ 85260
                </address>
                <p className="text-sm text-muted-foreground">CONTACT (480) 443-0201</p>
              </div>
            </div>
          </div>

          <div className="flex gap-12">
            <div>
              <h3 className="font-medium">Services</h3>
              <ul className="mt-2 text-sm text-muted-foreground">
                <li>Design Services</li>
                <li>Build Services</li>
                <li>Renovations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Company</h3>
              <ul className="mt-2 text-sm text-muted-foreground">
                <li>About</li>
                <li>Awards</li>
                <li>Articles</li>
                <li>Home Gallery</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/jpmcustomhomes/?ref=aymt_homepage_panel" aria-label="Facebook">
              <Image src={encodeURI('https://cdn2.editmysite.com/fonts/wSocial/wsocial.svg?buildTime=1756835115#wsocial')} alt="Facebook" width={28} height={28} unoptimized />
            </a>
            <a href="https://www.instagram.com/jpmalonecustomhomes/?hl=en" aria-label="Instagram">
              <Image src={encodeURI('https://cdn2.editmysite.com/fonts/wSocial/wsocial.svg?buildTime=1756835115#wsocial')} alt="Instagram" width={28} height={28} unoptimized />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">© {year} JP Malone Construction INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
