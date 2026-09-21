import Link from "next/link";
import { pricingCards } from "@/app/data/pricing";
import ScrollReveal from "./ScrollReveal";
import { Footer, Header } from "./WeddingPage";

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <Header solid />

      <section className="pricing-page-heading section-pad" aria-label="Bảng giá">
        <ScrollReveal>
          <p className="section-label"><span>Bảng giá</span><span>Tuấn Tú Wedding</span></p>
        </ScrollReveal>
        <ScrollReveal delay={120}>
          <h1 className="pricing-heading-title">Bảng giá</h1>
        </ScrollReveal>
      </section>

      <section className="pricing-menu-section section-pad">
        <div className="pricing-menu-grid">
          {pricingCards.map((card, index) => (
            <ScrollReveal key={card.id} className="pricing-menu-reveal" delay={index * 90}>
              <Link href={card.href ?? "/lien-he"} className="pricing-menu-card">
                <div
                  className="pricing-menu-image"
                  style={{
                    backgroundImage: `url('${card.image}')`,
                  }}
                />
                <div className="pricing-menu-overlay" />
                <div className="pricing-menu-content">
                  <h3>{card.title}</h3>
                  {card.description ? <p className="pricing-menu-desc">{card.description}</p> : null}
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
