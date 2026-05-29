import Link from "next/link";

interface Crumb { label: string; href?: string }

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  cta?: { text: string; href: string };
}

export default function PageHero({ label, title, subtitle, breadcrumbs, cta }: Props) {
  return (
    <section className="pt-28 pb-16 bg-[#36494f] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #109e4c 0%, transparent 60%)" }} />
      <div className="container-site relative z-10">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-white/45 text-sm mb-5">
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {b.href ? (
                  <Link href={b.href} className="hover:text-white/80 transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-white/80">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {label && <p className="text-[#109e4c] text-xs font-bold uppercase tracking-widest mb-3">{label}</p>}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl mb-4">
          {title}
        </h1>
        {subtitle && <p className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed mb-6">{subtitle}</p>}
        {cta && (
          <Link href={cta.href} className="inline-flex items-center gap-2 bg-[#109e4c] hover:bg-[#097a3a] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors">
            {cta.text} →
          </Link>
        )}
      </div>
    </section>
  );
}
