import type { Metadata } from "next";
import Link from "next/link";
import { Footer, Header } from "../components/WeddingPage";
import ScrollReveal from "../components/ScrollReveal";
import { outfitCategories } from "../data/outfits";

export const metadata: Metadata = {
  title: "Trang phục cưới | Tuấn Tú Wedding",
  description:
    "Áo dài cưới, váy cưới cao cấp và áo dài bưng quả tại Tuấn Tú Wedding — thiết kế tỉ mỉ, dẫn đầu xu hướng.",
};

export default function TrangPhucPage() {
  return (
    <main className="outfit-page">
      <Header solid />

      <section className="outfit-page-heading section-pad" aria-label="Trang phục Tuấn Tú Wedding">
        <ScrollReveal>
          <p className="section-label"><span>Trang phục</span><span>Tuấn Tú Wedding</span></p>
        </ScrollReveal>
      </section>

      <section className="outfit-heading section-pad" aria-labelledby="outfit-title">
        <ScrollReveal>
          <h1 id="outfit-title">TRANG PHỤC CƯỚI</h1>
          <p className="outfit-lead">
            Tuấn Tú Wedding là đơn vị cung cấp <strong>ÁO DÀI CƯỚI – TRANG PHỤC CƯỚI (VÁY/VEST) – ÁO DÀI BƯNG QUẢ</strong>
          </p>
          <p className="outfit-sub">
            Với đa dạng các mẫu thiết kế được kiến tạo một cách tỉ mỉ, chỉn chu, tiên phong dẫn đầu xu hướng thời trang cưới, góp phần tôn vinh vẻ đẹp tình yêu hoàn hảo trong ngày trọng đại.
          </p>
        </ScrollReveal>
      </section>

      <section className="outfit-grid-section section-pad" aria-label="Danh mục trang phục">
        <div className="outfit-grid">
          {outfitCategories.map((cat, index) => (
            <ScrollReveal key={cat.slug} className="outfit-card-reveal" delay={index * 90}>
              <Link href={`/trang-phuc/${cat.slug}`} className="outfit-card">
                <div className="outfit-card-image" style={{ backgroundImage: `url('${cat.image}')` }} aria-hidden />
                <div className="outfit-card-overlay" />
                <span className="outfit-card-badge" aria-hidden>
                  TUẤN TÚ
                </span>
              </Link>
              <Link href={`/trang-phuc/${cat.slug}`} className="outfit-card-title">
                {cat.title}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
