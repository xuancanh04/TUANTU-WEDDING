import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer, Header } from "../../components/WeddingPage";
import ScrollReveal from "../../components/ScrollReveal";
import { getServiceBySlug, serviceGalleries, services } from "../../data/services";

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps<"/dich-vu/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Dịch vụ | Tuấn Tú Wedding" };
  return {
    title: `${service.title} | Tuấn Tú Wedding`,
    description: service.description,
  };
}

export default async function DichVuDetailPage({ params }: PageProps<"/dich-vu/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const images = serviceGalleries[slug] ?? [service.image];

  return (
    <main className="service-page service-detail-page">
      <Header solid />

      <section className="service-page-heading section-pad" aria-label="Dịch vụ Tuấn Tú Wedding">
        <ScrollReveal>
          <p className="section-label">
            <span>Dịch vụ</span>
            <span>Tuấn Tú Wedding</span>
          </p>
        </ScrollReveal>
      </section>

      <section className="service-detail-heading section-pad" aria-labelledby="service-detail-title">
        <ScrollReveal>
          <h1 id="service-detail-title">{service.title}</h1>
          <p className="service-detail-desc">{service.description}</p>
        </ScrollReveal>
      </section>

      <section className="service-detail-gallery section-pad" aria-label={`Hình ảnh ${service.title}`}>
        <div className="service-detail-grid">
          {images.map((src, index) => (
            <ScrollReveal key={src + index} className="service-detail-card-reveal" delay={index * 80}>
              <div className="service-detail-card">
                <div
                  className="service-detail-image"
                  style={{ backgroundImage: `url('${src}')` }}
                  role="img"
                  aria-label={service.title}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="service-detail-cta section-pad">
        <ScrollReveal>
          <Link href="/dich-vu" className="text-link service-back-link">
            ← Quay lại tất cả dịch vụ
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
