import Link from "next/link";
import { albums } from "@/app/data/albums";
import ScrollReveal from "./ScrollReveal";
import { Footer, Header } from "./WeddingPage";

export default function AlbumPage() {
  return (
    <main className="album-page">
      <Header solid />

      <section className="album-page-heading section-pad" aria-label="Album">
        <ScrollReveal>
          <p className="section-label"><span>Album</span><span>Tuấn Tú Wedding</span></p>
        </ScrollReveal>
      </section>

      <section className="album-heading section-pad" aria-labelledby="album-title">
        <ScrollReveal>
          <h1 id="album-title">TỔNG HỢP NHỮNG ALBUM ẢNH CƯỚI ĐẸP, LÃNG MẠN NHẤT TẠI TUẤN TÚ WEDDING</h1>
        </ScrollReveal>
      </section>

      <section className="album-grid-section section-pad" aria-label="Danh sách album">
        <div className="album-grid">
          {albums.map((album, index) => (
            <ScrollReveal key={album.id} className="album-card-reveal" delay={index * 90}>
              <Link href={album.href ?? `/album/${album.id}`} className="album-card">
                <div className="album-card-image" style={{ backgroundImage: `url('${album.image}')` }} />
                <div className="album-card-overlay" />
                <div className="album-card-body">
                  <h2>{album.title}</h2>
                  <span className="album-card-cta">
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
