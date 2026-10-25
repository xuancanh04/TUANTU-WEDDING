"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";
import { albums } from "@/app/data/albums";
import { outfitCategories } from "@/app/data/outfits";
import { pricingCards } from "@/app/data/pricing";
import ScrollReveal from "./ScrollReveal";

type NavState = "top" | "hero" | "after";

function useDesktopHoverDropdown() {
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  useEffect(() => () => clearCloseTimer(), []);

  const supportsHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const closeDropdown = (el: HTMLDetailsElement) => {
    el.classList.remove("is-open");
    closeTimer.current = setTimeout(() => {
      el.open = false;
    }, 220);
  };

  const onMouseEnter = (event: MouseEvent<HTMLDetailsElement>) => {
    if (!supportsHover()) return;
    clearCloseTimer();
    const current = event.currentTarget;
    current.parentElement?.querySelectorAll("details.nav-dropdown").forEach((item) => {
      if (item !== current) {
        const other = item as HTMLDetailsElement;
        other.classList.remove("is-open");
        other.open = false;
      }
    });
    current.open = true;
    requestAnimationFrame(() => current.classList.add("is-open"));
  };

  const onMouseLeave = (event: MouseEvent<HTMLDetailsElement>) => {
    if (!supportsHover()) return;
    const current = event.currentTarget;
    clearCloseTimer();
    closeTimer.current = setTimeout(() => closeDropdown(current), 120);
  };

  const onSummaryClick = (event: MouseEvent<HTMLElement>) => {
    if (!supportsHover()) return;
    event.preventDefault();
  };

  return { onMouseEnter, onMouseLeave, onSummaryClick };
}

export function Header({ solid = false }: { solid?: boolean }) {
  const router = useRouter();
  const [navState, setNavState] = useState<NavState>(solid ? "after" : "top");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { onMouseEnter, onMouseLeave } = useDesktopHoverDropdown();

  const onOutfitsSummaryClick = (event: MouseEvent<HTMLElement>) => {
    const supportsHover =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!supportsHover) return;
    event.preventDefault();
    router.push("/trang-phuc");
  };

  const onServicesSummaryClick = (event: MouseEvent<HTMLElement>) => {
    const supportsHover =
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!supportsHover) return;
    event.preventDefault();
    router.push("/dich-vu");
  };

  useEffect(() => {
    if (solid) return;
    const handleScroll = () => {
      const hero = document.querySelector(".hero");
      const heroHeight = hero?.getBoundingClientRect().height ?? window.innerHeight;
      const scrollY = window.scrollY;
      if (scrollY <= 12) setNavState("top");
      else if (scrollY < heroHeight - 80) setNavState("hero");
      else setNavState("after");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [solid]);

  return (
    <nav className={`nav-shell nav-${navState}`} aria-label="Điều hướng chính">
      <div className="nav-links nav-left">
        <Link href="/gioi-thieu">Giới thiệu</Link>
        <details className="nav-dropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <summary onClick={onServicesSummaryClick}>Dịch vụ</summary>
          <div className="dropdown-menu service-menu">
            <Link className="menu-all" href="/dich-vu">Xem tất cả <span>↗</span></Link>
            <div className="menu-group">
              <Link className="menu-group-title" href="/dich-vu/pre-wedding">Pre-wedding <span>↗</span></Link>
              <Link href="/dich-vu/studio">Studio</Link>
              <Link href="/dich-vu/phim-truong">Phim trường</Link>
              <Link href="/dich-vu/ngoai-canh">Ngoại cảnh</Link>
            </div>
            <div className="menu-group">
              <Link className="menu-group-title" href="/dich-vu/wedding-day">Wedding Day <span>↗</span></Link>
              <Link href="/dich-vu/tron-goi-ngay-cuoi">Trọn gói ngày cưới</Link>
              <Link href="/dich-vu/phong-su">Chụp truyền thống | Phóng sự</Link>
            </div>
            <div className="menu-group">
              <Link className="menu-group-title" href="/trang-phuc">Thuê trang phục <span>↗</span></Link>
              <Link href="/bang-gia">Bảng giá</Link>
            </div>
            <div className="menu-group">
              <Link className="menu-group-title" href="/dich-vu/makeup">Makeup <span>↗</span></Link>
            </div>
          </div>
        </details>
        <details className="nav-dropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <summary onClick={onOutfitsSummaryClick}>Trang phục</summary>
          <div className="dropdown-menu outfit-menu">
            <Link className="menu-group-title" href="/trang-phuc">Xem tất cả <span>↗</span></Link>
            <Link href="/trang-phuc/ao-dai">Áo dài cưới</Link>
            <Link href="/trang-phuc/vay-cuoi">Váy cưới</Link>
            <Link href="/trang-phuc/ao-dai-bung-qua">Áo dài bưng quả</Link>
            <Link href="/trang-phuc/vest">Vest</Link>
          </div>
        </details>
      </div>
      {solid ? (
        <Link className="brand-logo" href="/" aria-label="Tuấn Tú Wedding trang chủ">
          <Image src="/logo-transparent.png" alt="Tuấn Tú Wedding Studio" fill sizes="108px" priority />
        </Link>
      ) : (
        <a className="brand-logo" href="#top" aria-label="Tuấn Tú Wedding trang chủ">
          <Image src="/logo-transparent.png" alt="Tuấn Tú Wedding Studio" fill sizes="108px" priority />
        </a>
      )}
      <div className="nav-links nav-right">
        <Link href="/album">Album</Link>
        <Link href="/bang-gia">Bảng giá</Link>
        <Link href="/lien-he">Liên hệ</Link>
      </div>
      <button className="mobile-menu-toggle" type="button" aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((open) => !open)}>
        <span />
        <span />
        <span />
      </button>
      <div className={`mobile-menu${isMobileMenuOpen ? " is-open" : ""}`}>
        <Link href="/gioi-thieu" onClick={() => setIsMobileMenuOpen(false)}>Giới thiệu</Link>
          <details className="mobile-dropdown">
            <summary>Dịch vụ</summary>
            <div className="mobile-service-menu">
              <Link className="menu-all" href="/dich-vu" onClick={() => setIsMobileMenuOpen(false)}>Xem tất cả <span>↗</span></Link>
              <div className="mobile-service-group">
                <Link className="menu-group-title" href="/dich-vu/pre-wedding" onClick={() => setIsMobileMenuOpen(false)}>Pre-wedding <span>↗</span></Link>
                <Link href="/dich-vu/studio" onClick={() => setIsMobileMenuOpen(false)}>Studio</Link>
                <Link href="/dich-vu/phim-truong" onClick={() => setIsMobileMenuOpen(false)}>Phim trường</Link>
                <Link href="/dich-vu/ngoai-canh" onClick={() => setIsMobileMenuOpen(false)}>Ngoại cảnh</Link>
              </div>
              <div className="mobile-service-group">
                <Link className="menu-group-title" href="/dich-vu/wedding-day" onClick={() => setIsMobileMenuOpen(false)}>Wedding Day <span>↗</span></Link>
                <Link href="/dich-vu/tron-goi-ngay-cuoi" onClick={() => setIsMobileMenuOpen(false)}>Trọn gói ngày cưới</Link>
                <Link href="/dich-vu/phong-su" onClick={() => setIsMobileMenuOpen(false)}>Chụp truyền thống | Phóng sự</Link>
              </div>
              <div className="mobile-service-group">
                <Link className="menu-group-title" href="/trang-phuc" onClick={() => setIsMobileMenuOpen(false)}>Thuê trang phục <span>↗</span></Link>
                <Link href="/bang-gia" onClick={() => setIsMobileMenuOpen(false)}>Bảng giá</Link>
              </div>
              <div className="mobile-service-group">
                <Link className="menu-group-title" href="/dich-vu/makeup" onClick={() => setIsMobileMenuOpen(false)}>Makeup <span>↗</span></Link>
              </div>
            </div>
          </details>
          <details className="mobile-dropdown">
            <summary>Trang phục</summary>
            <div className="mobile-outfit-menu">
              <Link href="/trang-phuc" onClick={() => setIsMobileMenuOpen(false)}>Xem tất cả <span>↗</span></Link>
              <Link href="/trang-phuc/ao-dai" onClick={() => setIsMobileMenuOpen(false)}>Áo dài cưới</Link>
              <Link href="/trang-phuc/vay-cuoi" onClick={() => setIsMobileMenuOpen(false)}>Váy cưới</Link>
              <Link href="/trang-phuc/ao-dai-bung-qua" onClick={() => setIsMobileMenuOpen(false)}>Áo dài bưng quả</Link>
              <Link href="/trang-phuc/vest" onClick={() => setIsMobileMenuOpen(false)}>Vest</Link>
            </div>
          </details>
        <Link href="/album" onClick={() => setIsMobileMenuOpen(false)}>Album</Link>
        <Link href="/bang-gia" onClick={() => setIsMobileMenuOpen(false)}>Bảng giá</Link>
        <Link href="/lien-he" onClick={() => setIsMobileMenuOpen(false)}>Liên hệ</Link>
      </div>
    </nav>
  );
}

const HERO_SLIDES = [
  { className: "hero-slide-one", src: "/hero-1.jpg", label: "Ảnh cưới lãng mạn" },
  { className: "hero-slide-two", src: "/hero-2.jpg", label: "Lễ gia tiên áo dài" },
];

const REVIEWS = [
  {
    quote:
      "Dịch vụ chụp ảnh cưới của Tuấn Tú Wedding thật tuyệt vời! Từ trang phục đến cách chụp hình đều rất chuyên nghiệp. Chúng tôi rất hài lòng với những bức ảnh kỷ niệm.",
    name: "Nguyễn Thị Lan",
    place: "Đắk Lắk",
  },
  {
    quote:
      "Tuấn Tú Wedding đã giúp ngày cưới của chúng tôi trở nên hoàn hảo với dịch vụ trang điểm và váy cưới. Mọi thứ đều tuyệt vời và chu đáo.",
    name: "Trần Văn Bình",
    place: "Buôn Ma Thuột",
  },
  {
    quote:
      "Tôi rất hài lòng với dịch vụ thuê áo dài cô dâu. Áo dài đẹp, chất lượng, nhân viên nhiệt tình và thân thiện. Sẽ giới thiệu cho bạn bè.",
    name: "Lê Thị Hương",
    place: "Krông Bông",
  },
  {
    quote:
      "Ekip chụp phóng sự cưới rất chuyên nghiệp. Những bức ảnh đẹp và phong cách, lưu giữ trọn vẹn khoảnh khắc đáng nhớ của chúng tôi.",
    name: "Phạm Minh Tú",
    place: "Đắk Lắk",
  },
];

function Hero() {
  const [active, setActive] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const activeRef = useRef(active);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      if (isDragging.current) return;
      setActive((index) => (index + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    const total = HERO_SLIDES.length;
    setActive(((index % total) + total) % total);
  };

  const endDrag = (clientX?: number) => {
    if (dragStartX.current !== null && clientX !== undefined) {
      const delta = clientX - dragStartX.current;
      const threshold = 50;
      if (delta <= -threshold) goTo(activeRef.current + 1);
      else if (delta >= threshold) goTo(activeRef.current - 1);
    }
    dragStartX.current = null;
    isDragging.current = false;
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.button !== 0 && event.pointerType === "mouse") return;
    dragStartX.current = event.clientX;
    isDragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    endDrag(event.clientX);
  };

  const handlePointerCancel = () => {
    endDrag();
  };

  return (
    <section
      className="hero"
      id="top"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onLostPointerCapture={() => endDrag()}
    >
      <div className="hero-slideshow" aria-label="Bộ ảnh cưới Tuấn Tú Wedding" aria-live="polite">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.className}
            className={`hero-slide ${slide.className}${index === active ? " is-active" : ""}`}
            style={{ backgroundImage: `url("${slide.src}")` }}
            role="img"
            aria-label={slide.label}
            aria-hidden={index !== active}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-copy">
        <p className="eyebrow light">Makeup Bridal · Photography · Phóng sự cưới</p>
        <h1 className="hero-title">TUẤN TÚ WEDDING</h1>
      </div>
      <div className="hero-dots" aria-hidden>
        {HERO_SLIDES.map((slide, index) => (
          <span key={slide.className} className={index === active ? "is-active" : undefined} />
        ))}
      </div>
    </section>
  );
}

function BrandStatement() {
  return (
    <section className="brand-statement section-pad" id="studio">
      <ScrollReveal className="brand-statement-inner">
        <h2 className="statement-title">Tuấn Tú Wedding Studio</h2>
        <span className="statement-rule" aria-hidden />
        <p className="statement-intro">
          <strong>Tuấn Tú Wedding</strong> – Đơn vị có hệ sinh thái cưới trọn vẹn tại Đắk Lắk,
          đồng hành Makeup · Photography · Phóng sự cưới.
        </p>
        <p className="statement-copy">
          Tuấn Tú Wedding là nơi sẵn sàng lắng nghe, thấu hiểu cùng câu chuyện của khách hàng.
          Sẵn sàng trao giá trị, đồng hành cùng các cặp đôi trong hành trình hạnh phúc của họ.
        </p>
        <p className="statement-slogan">Ngày cưới của bạn cũng là ngày trọng đại nhất của chúng tôi</p>
        <p className="statement-copy">
          Đằng nào cũng cưới hãy để Tuấn Tú chăm sóc cho bạn tận tình trong ngày cưới trọng đại nhất
        </p>
        <p className="statement-tagline">Vì bạn xứng đáng!</p>
      </ScrollReveal>
    </section>
  );
}

function HomeServices() {
  return (
    <section className="home-services section-pad" id="services">
      <ScrollReveal className="home-section-head home-section-head-center">
        <h2>Bảng giá</h2>
        <p className="home-section-desc">
          Các gói chụp ảnh và thuê trang phục được tư vấn rõ ràng theo concept và nhu cầu của từng cặp đôi.
        </p>
      </ScrollReveal>
      <div className="pricing-menu-grid">
        {pricingCards.map((card, index) => (
          <ScrollReveal key={card.id} className="pricing-menu-reveal" delay={index * 70}>
            <Link href={card.href ?? "/lien-he"} className="pricing-menu-card">
              <div
                className="pricing-menu-image"
                style={{ backgroundImage: `url('${card.image}')` }}
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
      <ScrollReveal delay={80}>
        <div className="home-section-cta">
          <Link className="text-link" href="/bang-gia">
            Xem bảng giá <span>↗</span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

function HomeOutfits() {
  const featured = outfitCategories.filter((item) => item.slug !== "vest");

  return (
    <section className="home-outfits section-pad" id="outfits">
      <ScrollReveal className="home-section-head home-section-head-center">
        <h2>Trang phục cưới tại Tuấn Tú Wedding</h2>
        <p className="home-section-desc">
          <strong>Tuấn Tú Wedding</strong> cung cấp trang phục cưới — váy, vest, áo dài cưới và áo dài bưng quả —
          với nhiều mẫu thiết kế tỉ mỉ, chỉn chu, theo kịp xu hướng.
        </p>
      </ScrollReveal>
      <div className="home-outfit-grid">
        {featured.map((item, index) => (
          <ScrollReveal key={item.slug} delay={index * 90}>
            <Link href={`/trang-phuc/${item.slug}`} className="home-outfit-card">
              <div className="home-outfit-photo" style={{ backgroundImage: `url('${item.image}')` }} />
              <div className="home-outfit-overlay" />
              <h3>{item.shortLabel}</h3>
            </Link>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal delay={80}>
        <div className="home-section-cta">
          <Link className="text-link" href="/trang-phuc">
            Xem tất cả trang phục <span>↗</span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

function HomeAlbum() {
  return (
    <section className="home-album section-pad" id="stories">
      <ScrollReveal className="home-section-head home-section-head-center">
        <h2>Tổng hợp album ảnh cưới đẹp</h2>
      </ScrollReveal>
      <div className="album-grid">
        {albums.map((album, index) => (
          <ScrollReveal key={album.id} className="album-card-reveal" delay={index * 70}>
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
      <ScrollReveal delay={80}>
        <div className="home-section-cta">
          <Link className="button-outline" href="/album">
            Xem thêm album
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

function HomeReviews() {
  return (
    <section className="home-reviews section-pad" id="reviews" aria-labelledby="reviews-title">
      <ScrollReveal className="home-section-head home-section-head-center">
        <h2 id="reviews-title">Nhận xét của khách hàng</h2>
        <span className="statement-rule" aria-hidden />
      </ScrollReveal>
      <div className="home-review-grid">
        {REVIEWS.map((review, index) => {
          const initials = review.name
            .split(" ")
            .filter(Boolean)
            .slice(-2)
            .map((part) => part[0])
            .join("")
            .toUpperCase();

          return (
            <ScrollReveal key={review.name} delay={index * 80}>
              <article className="home-review-card">
                <span className="home-review-mark" aria-hidden>
                  “
                </span>
                <div className="home-review-stars" aria-label="5 sao">
                  {Array.from({ length: 5 }, (_, star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
                <p className="home-review-quote">{review.quote}</p>
                <div className="home-review-author">
                  <span className="home-review-avatar" aria-hidden>
                    {initials}
                  </span>
                  <div>
                    <strong>{review.name}</strong>
                    <span>{review.place}</span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-about">
          <Link className="brand-logo" href="/" aria-label="Tuấn Tú Wedding trang chủ">
            <Image src="/logo-transparent.png" alt="Tuấn Tú Wedding Studio" fill sizes="108px" />
          </Link>
          <p>
            Makeup Bridal, Photography và Phóng sự cưới. Đồng hành cùng bạn lưu giữ những khoảnh khắc đẹp nhất của ngày trọng đại.
          </p>
          <a href="tel:0817550150">☎ &nbsp;0817 550 150</a>
          <p className="footer-address">
            Thôn Điện Tân, xã Cư Pui,<br />huyện Krông Bông, Đắk Lắk
          </p>
        </div>
        <div className="footer-column">
          <h3>Dịch vụ nổi bật</h3>
          <Link href="/#services">→ &nbsp;Makeup Bridal</Link>
          <Link href="/#services">→ &nbsp;Wedding Photography</Link>
          <Link href="/#services">→ &nbsp;Phóng sự cưới</Link>
          <Link href="/#outfits">→ &nbsp;Trang phục cưới</Link>
        </div>
        <div className="footer-column">
          <h3>Bản đồ</h3>
          <div className="map-card">
            <iframe
              title="Bản đồ Tuấn Tú Wedding"
              src="https://www.google.com/maps?q=Thon+Dien+Tan,+Cu+Pui,+Krong+Bong,+Dak+Lak&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="map-open" href="https://maps.app.goo.gl/Jieztynya9e3PKjk7" target="_blank" rel="noreferrer">
              Mở trong Google Maps ↗
            </a>
          </div>
          <p className="footer-address">
            Thôn Điện Tân, xã Cư Pui<br />Krông Bông, Đắk Lắk
          </p>
        </div>
        <div className="footer-column">
          <h3>Fanpage</h3>
          <div className="facebook-widget">
            <iframe
              title="Fanpage Tuấn Tú Wedding"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTuantuwedding&tabs=timeline&width=340&height=320&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              loading="lazy"
              scrolling="no"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <a className="facebook-link" href="https://www.facebook.com/Tuantuwedding" target="_blank" rel="noreferrer">
            Xem fanpage trên Facebook ↗
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Tuấn Tú Wedding</span>
        <span>Makeup Bridal · Photography · Phóng sự cưới</span>
      </div>
    </footer>
  );
}

export default function WeddingPage() {
  return (
    <main>
      <Header />
      <Hero />
      <BrandStatement />
      <HomeServices />
      <HomeOutfits />
      <HomeAlbum />
      <HomeReviews />
      <Footer />
    </main>
  );
}
