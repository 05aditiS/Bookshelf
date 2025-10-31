const links = [
  { name: 'Our Story', href: '#' },
  { name: 'Team & Culture', href: '#' },
  { name: 'Mission & Vision', href: '#' },
  { name: 'Careers', href: '#' },
];

const stats = [
  { name: 'Books Shared', value: '10,000+' },
  { name: 'Active Users', value: '5,000+' },
  { name: 'Campuses Covered', value: '150+' },
  { name: 'Community Members', value: '20,000+' },
];

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden py-24 sm:py-32 bg-[#fdf6e3]">
      {/* Background Image */}
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80"
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center opacity-20"
      />

      {/* Gradient Blob */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            background: 'linear-gradient(to top right, #a47551, #5e4636)',
            opacity: 0.2,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl lg:mx-0 text-center lg:text-left">
          <h2 className="text-5xl font-extrabold sm:text-7xl text-[#3b2f2f] leading-tight drop-shadow-sm">
            About Us
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-[#5e4636] font-medium max-w-2xl mx-auto lg:mx-0">
            We're a community-driven book sharing platform, built to help students and readers access and exchange knowledge effortlessly.
            From used textbooks to hidden gems, we believe every book deserves a second life — and every learner deserves a fair chance.
          </p>
        </div>

        {/* Links */}
        <div className="mx-auto mt-12 max-w-2xl lg:max-w-none text-center lg:text-left">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:flex justify-center lg:justify-start lg:gap-x-10 font-semibold text-[#5e4636]">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-all hover:text-[#a47551] group"
              >
                {link.name}
                <span className="ml-1 text-[#a47551] group-hover:translate-x-1 inline-block transition-transform">&rarr;</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-[#e8d4a8] w-full" />

        {/* Stats */}
        <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center lg:text-left">
          {stats.map((stat) => (
            <div key={stat.name} className="flex flex-col items-center lg:items-start hover:scale-105 transition-transform duration-300">
              <dt className="text-md text-[#5e4636] font-medium">{stat.name}</dt>
              <dd className="text-4xl font-extrabold tracking-tight text-[#3b2f2f]">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
