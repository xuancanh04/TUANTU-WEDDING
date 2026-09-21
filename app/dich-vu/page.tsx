import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components/WeddingPage";
import ScrollReveal from "../components/ScrollReveal";
import { services } from "../data/services";

export const metadata: Metadata = {
  title: "Dịch vụ | Tuấn Tú Wedding",
  description:
    "Pre-wedding, Wedding Day, phóng sự cưới và Makeup Bridal tại Tuấn Tú Wedding — đồng hành chỉn chu cho ngày trọng đại.",
};

export default function DichVuPage() {
  return (
    <main className="service-page">
      <Header solid />

      <section className="service-page-heading section-pad" aria-label="Dịch vụ Tuấn Tú Wedding">
        <ScrollReveal>
          <p className="section-label">
            <span>Dịch vụ</span>
            <span>Tuấn Tú Wedding</span>
          </p>
        </ScrollReveal>
      </section>

      <section className="service-heading section-pad" aria-labelledby="service-title">
        <ScrollReveal>
          <h1 id="service-title">Dịch vụ cưới</h1>
          <p className="service-lead">
            Từ Pre-wedding, studio, ngoại cảnh đến Wedding Day và Makeup Bridal — Tuấn Tú Wedding đồng hành
            cùng bạn bằng một tinh thần nhẹ nhàng, chỉn chu và có gu.
          </p>
        </ScrollReveal>
      </section>

      <section className="service-grid-section section-pad" aria-label="Danh mục dịch vụ">
        <div className="service-hub-grid">
          {services.map((item, index) => (
            <ScrollReveal key={item.slug} className="service-hub-reveal" delay={index * 70}>
              <Link href={`/dich-vu/${item.slug}`} className="service-hub-card">
                <div
                  className="service-hub-image"
                  style={{ backgroundImage: `url('${item.image}')` }}
                  aria-hidden
                />
                <div className="service-hub-overlay" />
                <div className="service-hub-body">
                  <span className="service-hub-group">{item.group.replace("-", " ")}</span>
                  <h2>{item.shortLabel}</h2>
                  <span className="service-hub-cta">
                    Xem chi tiết <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
