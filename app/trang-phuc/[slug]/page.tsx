import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components/WeddingPage";
import ScrollReveal from "../../components/ScrollReveal";
import { outfitCategories, outfitGalleries } from "../../data/outfits";

export function generateStaticParams() {
  return outfitCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/trang-phuc/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cat = outfitCategories.find((c) => c.slug === slug);
  if (!cat) return { title: "Trang phục cưới | Tuấn Tú Wedding" };
  return {
    title: `${cat.title} | Tuấn Tú Wedding`,
    description: cat.description,
  };
}

export default async function TrangPhucDetailPage({ params }: PageProps<"/trang-phuc/[slug]">) {
  const { slug } = await params;
  const cat = outfitCategories.find((c) => c.slug === slug);
  if (!cat) notFound();

  const images = outfitGalleries[slug] ?? [cat.image];

  return (
    <main className="outfit-page outfit-detail-page">
      <Header solid />

      <section className="outfit-page-heading section-pad" aria-label="Trang phục Tuấn Tú Wedding">
        <ScrollReveal>
          <p className="section-label"><span>Trang phục</span><span>Tuấn Tú Wedding</span></p>
        </ScrollReveal>
      </section>

      <section className="outfit-detail-heading section-pad" aria-labelledby="outfit-detail-title">
        <ScrollReveal>
          <h1 id="outfit-detail-title">{cat.title.toUpperCase()}</h1>
          <p className="outfit-detail-desc">{cat.description}</p>
        </ScrollReveal>
      </section>

      <section className="outfit-detail-gallery section-pad" aria-label={`Bộ sưu tập ${cat.title}`}>
        <div className="outfit-detail-grid">
          {images.map((src, index) => (
            <ScrollReveal key={src + index} className="outfit-detail-card-reveal" delay={index * 80}>
              <div className="outfit-detail-card">
                <div className="outfit-detail-image" style={{ backgroundImage: `url('${src}')` }} role="img" aria-label={cat.title} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="outfit-detail-back section-pad">
        <Link href="/trang-phuc" className="text-link">
          ← Quay lại tất cả trang phục
        </Link>
      </section>

      <Footer />
    </main>
  );
}
