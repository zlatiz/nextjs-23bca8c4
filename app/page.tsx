import Image from 'next/image';
import Link from 'next/link';

const IMAGES: string[] = [
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/kitchen_orig.jpg',
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/1_orig.jpg',
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/2019-best-of-houzz-badge.jpg',
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/2019-best-of-houzz-badge_orig.jpg',
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/best-in-american-living.jpeg',
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/abbpage_orig.jpg',
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/correct.png',
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/correct_orig.png',
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/houzz-badge.gif',
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/houzz-badge_orig.gif',
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/published/jpm-logo-jpg.jpeg?1501880811',
  'https://www.jpmalone.com/uploads/1/0/9/7/109792963/background-images/1937660504.jpg',
  'https://cdn2.editmysite.com/fonts/wIcons/wicons.svg?buildTime=1756835115#wicons',
  'https://cdn2.editmysite.com/fonts/wSocial/wsocial.svg?buildTime=1756835115#wsocial',
  '/generated/generated-hero-1768321837262.png',
  '/generated/generated-gallery_interior_living-1768321862854.png',
  '/generated/generated-gallery_kitchen-1768321889547.png',
  '/generated/generated-gallery_master_suite-1768321916446.png'
];

export default function Page() {
  return (
    <div>
      <section id="hero" className="border-t border-border py-24">
        <div className="container-max mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">JP Malone</p>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                JP Malone Construction INC.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Home is where we make it yours!
              </p>
              <div className="mt-8 flex gap-4">
                <Link href="#contact">
                  <a className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90">
                    Contact Us
                  </a>
                </Link>
                <Link href="/questionaire.html">
                  <a className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted">
                    Interested in building with JP Malone?
                  </a>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={encodeURI('https://www.jpmalone.com/uploads/1/0/9/7/109792963/background-images/1937660504.jpg')}
                  alt="Hero project background image"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover hero-image"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-border py-24">
        <div className="container-max mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">About</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Company Overview</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            JP Malone Construction INC. is a Scottsdale, Arizona based custom home design and build firm. Since 1983, we have specialized in designing, and building unique, one-of-a-kind custom homes, in Carefree, Cave Creek, Paradise Valley, and Scottsdale, Arizona.
          </p>
        </div>
      </section>

      <section id="services" className="border-t border-border py-24">
        <div className="container-max mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Services</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Design & Build</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Design Services, Build Services, Renovations
          </p>
        </div>
      </section>

      <section id="work" className="border-t border-border py-24">
        <div className="container-max mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Home Gallery</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">A selection of project imagery and awards.</p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(Array.isArray(IMAGES) ? IMAGES : []).map((src, idx) => {
              const isGenerated = src.startsWith('/generated/');
              const safeSrc = isGenerated ? src : encodeURI(src);
              const alt = idx === 0
                ? 'Southwest Kitchen with granite counter tops.'
                : idx === 11
                ? 'Background project image'
                : idx === 2 || idx === 3
                ? '2019 Best of Houzz badge'
                : idx === 4
                ? 'Best in American Living badge'
                : idx === 5
                ? 'ABB page badge'
                : idx === 8 || idx === 9
                ? 'Houzz badge'
                : idx === 10
                ? 'JP Malone logo'
                : `Project image ${idx + 1}`;

              return (
                <div key={idx} className="rounded-xl border border-border bg-white p-0 overflow-hidden">
                  <Image
                    src={safeSrc}
                    alt={alt}
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                    unoptimized
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="testimonials" className="border-t border-border py-24">
        <div className="container-max mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Testimonials</p>
          <blockquote className="mt-6 text-left text-lg text-muted-foreground">
            "My husband and I could not be more pleased with our home built by JP Malone in 1996. They had wonderful ideas on how to make our desired floor plan better and were a pleasure to work with. The house was completed on time and under budget and the workmanship was first rate. There have been no structural problems with our home in over 20 years, and we have recommended JP Malone to many others" - New Build
          </blockquote>
        </div>
      </section>

      <section id="contact" className="border-t border-border py-24">
        <div className="container-max mx-auto max-w-2xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Contact</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            ADDRESS: 8261 East Evans Rd, Suite 104, Scottsdale, AZ 85260
          </p>
          <p className="mt-2 text-lg text-muted-foreground">
            CONTACT (480) 443-0201
          </p>
          <div className="mt-8">
            <Link href="/contact-us.html">
              <a className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent/90">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section id="awards" className="border-t border-border py-24">
        <div className="container-max mx-auto text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-accent">Awards</p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
            <Image src={encodeURI('https://www.jpmalone.com/uploads/1/0/9/7/109792963/2019-best-of-houzz-badge.jpg')} alt="2019 Best of Houzz badge" width={300} height={300} unoptimized />
            <Image src={encodeURI('https://www.jpmalone.com/uploads/1/0/9/7/109792963/best-in-american-living.jpeg')} alt="Best in American Living badge" width={300} height={300} unoptimized />
            <Image src={encodeURI('https://www.jpmalone.com/uploads/1/0/9/7/109792963/abbpage_orig.jpg')} alt="ABB badge" width={300} height={300} unoptimized />
            <Image src={encodeURI('https://www.jpmalone.com/uploads/1/0/9/7/109792963/correct.png')} alt="Award badge" width={300} height={300} unoptimized />
          </div>
        </div>
      </section>

      <footer className="py-24" />
    </div>
  );
}
