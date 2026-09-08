"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from "react";

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

function Header({ solid = false }: { solid?: boolean }) {
  const [navState, setNavState] = useState<NavState>(solid ? "after" : "top");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { onMouseEnter, onMouseLeave, onSummaryClick } = useDesktopHoverDropdown();
  const to = (id: string) => (solid ? `/#${id}` : `#${id}`);

  useEffect(() => {
    if (solid) {
      setNavState("after");
      return;
    }
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
        <a href={to("about")}>Giới thiệu</a>
        <details className="nav-dropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <summary onClick={onSummaryClick}>Dịch vụ</summary>
          <div className="dropdown-menu service-menu">
            <a className="menu-all" href={to("services")}>Xem tất cả <span>↗</span></a>
            <div className="menu-group"><a className="menu-group-title" href={to("services")}>Pre-wedding <span>↗</span></a><a href={to("services")}>Studio</a><a href={to("services")}>Phim trường</a><a href={to("services")}>Ngoại cảnh</a></div>
            <div className="menu-group"><a className="menu-group-title" href={to("services")}>Wedding Day <span>↗</span></a><a href={to("services")}>Trọn gói ngày cưới</a><a href={to("stories")}>Chụp truyền thống | Phóng sự</a></div>
            <div className="menu-group"><a className="menu-group-title" href={to("outfits")}>Thuê trang phục <span>↗</span></a><a href={to("pricing")}>Bảng giá</a></div>
            <div className="menu-group"><a className="menu-group-title" href={to("services")}>Makeup <span>↗</span></a></div>
          </div>
        </details>
        <details className="nav-dropdown" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <summary onClick={onSummaryClick}>Trang phục</summary>
          <div className="dropdown-menu outfit-menu">
            <a className="menu-group-title" href={to("outfits")}>Áo dài <span>↗</span></a>
            <a className="menu-group-title" href={to("outfits")}>Váy cưới <span>↗</span></a>
            <a className="menu-group-title" href={to("outfits")}>Vest <span>↗</span></a>
          </div>
        </details>
      </div>
      <a className="brand-logo" href={solid ? "/" : "#top"} aria-label="Tuấn Tú Wedding trang chủ">
        <Image src="/logo-transparent.png" alt="Tuấn Tú Wedding Studio" fill sizes="108px" priority />
      </a>
      <div className="nav-links nav-right">
        <a href={to("stories")}>Album</a>
        <a href={to("pricing")}>Bảng giá</a>
        <a href="/lien-he">Liên hệ</a>
      </div>
      <button className="mobile-menu-toggle" type="button" aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"} aria-expanded={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen((open) => !open)}>
        <span />
        <span />
        <span />
      </button>
      <div className={`mobile-menu${isMobileMenuOpen ? " is-open" : ""}`}>
        <a href={to("about")} onClick={() => setIsMobileMenuOpen(false)}>Giới thiệu</a>
          <details className="mobile-dropdown">
            <summary>Dịch vụ</summary>
            <div className="mobile-service-menu"><a className="menu-all" href={to("services")} onClick={() => setIsMobileMenuOpen(false)}>Xem tất cả <span>↗</span></a><div className="mobile-service-group"><a className="menu-group-title" href={to("services")} onClick={() => setIsMobileMenuOpen(false)}>Pre-wedding <span>↗</span></a><a href={to("services")} onClick={() => setIsMobileMenuOpen(false)}>Studio</a><a href={to("services")} onClick={() => setIsMobileMenuOpen(false)}>Phim trường</a><a href={to("services")} onClick={() => setIsMobileMenuOpen(false)}>Ngoại cảnh</a></div><div className="mobile-service-group"><a className="menu-group-title" href={to("services")} onClick={() => setIsMobileMenuOpen(false)}>Wedding Day <span>↗</span></a><a href={to("services")} onClick={() => setIsMobileMenuOpen(false)}>Trọn gói ngày cưới</a><a href={to("stories")} onClick={() => setIsMobileMenuOpen(false)}>Chụp truyền thống | Phóng sự</a></div><div className="mobile-service-group"><a className="menu-group-title" href={to("outfits")} onClick={() => setIsMobileMenuOpen(false)}>Thuê trang phục <span>↗</span></a><a href={to("pricing")} onClick={() => setIsMobileMenuOpen(false)}>Bảng giá</a></div><div className="mobile-service-group"><a className="menu-group-title" href={to("services")} onClick={() => setIsMobileMenuOpen(false)}>Makeup <span>↗</span></a></div></div>
          </details>
          <details className="mobile-dropdown">
            <summary>Trang phục</summary>
            <div className="mobile-outfit-menu">
              <a className="menu-group-title" href={to("outfits")} onClick={() => setIsMobileMenuOpen(false)}>Áo dài <span>↗</span></a>
              <a className="menu-group-title" href={to("outfits")} onClick={() => setIsMobileMenuOpen(false)}>Váy cưới <span>↗</span></a>
              <a className="menu-group-title" href={to("outfits")} onClick={() => setIsMobileMenuOpen(false)}>Vest <span>↗</span></a>
            </div>
          </details>
        <a href={to("stories")} onClick={() => setIsMobileMenuOpen(false)}>Album</a>
        <a href={to("pricing")} onClick={() => setIsMobileMenuOpen(false)}>Bảng giá</a>
        <a href="/lien-he" onClick={() => setIsMobileMenuOpen(false)}>Liên hệ</a>
      </div>
    </nav>
  );
}

const HERO_SLIDES = [
  {
    className: "hero-slide-one",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90",
    label: "Ảnh cưới 1",
  },
  {
    className: "hero-slide-two",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=90",
    label: "Ảnh cưới 2",
  },
  {
    className: "hero-slide-three",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2200&q=90",
    label: "Ảnh cưới 3",
  },
];

function Hero() {
  const [active, setActive] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const isDragging = useRef(false);
  const activeRef = useRef(active);
  activeRef.current = active;

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
            style={{ backgroundImage: `url("${slide.image}")` }}
            role="img"
            aria-label={slide.label}
            aria-hidden={index !== active}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-copy">
        <p className="eyebrow light">Makeup Bridal · Photography · Phóng sự cưới</p>
        <h1>Ngày yêu<br /><em>còn mãi.</em></h1>
        <p className="hero-intro">Chúng tôi kể lại câu chuyện của bạn bằng ánh sáng, sự tinh tế và những cảm xúc thật.</p>
      </div>
      <div className="hero-dots" aria-hidden>
        {HERO_SLIDES.map((slide, index) => (
          <span key={slide.className} className={index === active ? "is-active" : undefined} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="intro section-pad" id="about">
      <div className="section-label"><span>01</span><span>Giới thiệu Tuấn Tú Wedding</span></div>
      <div className="intro-content">
        <p className="display-copy">Mỗi tình yêu đều có một nhịp điệu riêng. <em>Tuấn Tú Wedding</em> ở đây để lắng nghe và lưu giữ nhịp điệu ấy.</p>
        <div className="intro-note"><p>Từ buổi makeup đầu tiên đến những khung hình cuối cùng của ngày cưới, chúng tôi đồng hành cùng bạn bằng một tinh thần nhẹ nhàng, chỉn chu và có gu.</p><a className="text-link" href="/lien-he">Tìm hiểu thêm <span>↗</span></a></div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="section-label"><span>02</span><span>Dịch vụ của Tuấn Tú Wedding</span></div>
      <div className="services-heading"><h2>Đủ đầy cho<br /><em>một ngày đẹp.</em></h2><p>Không có công thức chung cho một đám cưới. Chỉ có những lựa chọn vừa vặn với bạn.</p></div>
      <div className="service-grid">
        <article className="service-card service-card-tall"><div className="service-photo photo-makeup" /><div className="service-info"><span>01 / 03</span><h3>Makeup<br />Bridal</h3><a href="/lien-he" aria-label="Xem dịch vụ Makeup Bridal">↗</a></div></article>
        <article className="service-card"><div className="service-photo photo-photo" /><div className="service-info"><span>02 / 03</span><h3>Wedding<br />Photography</h3><a href="/lien-he" aria-label="Xem dịch vụ Wedding Photography">↗</a></div></article>
        <article className="service-card service-card-offset"><div className="service-photo photo-reportage" /><div className="service-info"><span>03 / 03</span><h3>Phóng sự<br />cưới</h3><a href="/lien-he" aria-label="Xem dịch vụ Phóng sự cưới">↗</a></div></article>
      </div>
    </section>
  );
}

function Outfits() {
  return <section className="outfits section-pad" id="outfits"><div className="outfit-copy"><div className="section-label"><span>03</span><span>Trang phục cưới</span></div><h2>Mặc lên<br /><em>câu chuyện.</em></h2><p>Váy cưới, vest và phụ kiện được chọn lọc để tôn lên cá tính riêng của mỗi cặp đôi. Cùng ekip tìm ra diện mạo vừa vặn nhất cho ngày trọng đại.</p><a className="text-link" href="/lien-he">Xem bộ sưu tập <span>↗</span></a></div><div className="outfit-photo" role="img" aria-label="Váy cưới thanh lịch trong studio" /></section>;
}

function Album() {
  return <section className="stories section-pad" id="stories"><div className="section-label"><span>04</span><span>Album ảnh thực tế</span></div><div className="stories-heading"><h2>Frames of<br /><em>feeling.</em></h2><a className="text-link" href="#contact">Xem toàn bộ album <span>↗</span></a></div><div className="story-grid"><figure className="story-large"><div className="story-photo story-one" /><figcaption><span>MINH ANH & HOÀNG NAM</span><span>PRE-WEDDING / ĐÀ LẠT</span></figcaption></figure><figure className="story-small"><div className="story-photo story-two" /><figcaption><span>THẢO NHI & QUANG HUY</span><span>WEDDING DAY / SÀI GÒN</span></figcaption></figure></div></section>;
}

function Pricing() {
  return <section className="pricing section-pad" id="pricing"><div className="section-label"><span>05</span><span>Bảng giá tham khảo</span></div><div className="pricing-heading"><h2>Chọn gói<br /><em>vừa vặn.</em></h2><p>Chi phí được tư vấn rõ ràng theo concept, thời lượng và nhu cầu riêng của từng cặp đôi.</p></div><div className="price-grid"><article><span>01</span><h3>Pre-wedding</h3><strong>Từ 6.900.000đ</strong><p>Concept riêng · Makeup · Trang phục · File ảnh chỉnh màu</p></article><article><span>02</span><h3>Wedding Day</h3><strong>Từ 8.900.000đ</strong><p>Photography · Phóng sự · Ekip theo sát những khoảnh khắc thật</p></article><article><span>03</span><h3>Makeup Bridal</h3><strong>Từ 2.500.000đ</strong><p>Makeup thử · Makeup ngày cưới · Tư vấn phong cách cá nhân</p></article></div></section>;
}

function Contact() {
  return <section className="contact section-pad" id="contact"><div className="section-label"><span>06</span><span>Một cuộc hẹn, một khởi đầu</span></div><div className="contact-content"><h2>Cùng nhau viết nên<br /><em>chương đầu tiên.</em></h2><div className="contact-right"><p>Để lại thông tin, Tuấn Tú Wedding sẽ liên hệ và cùng bạn tìm ra hành trình phù hợp nhất.</p></div></div><div className="contact-footer"><span>0817 550 150</span><span>Thôn Điện Tân, xã Cư Pui, huyện Krông Bông, Đắk Lắk</span></div></section>;
}

function Footer() {
  return <footer className="site-footer"><div className="footer-grid"><div className="footer-about"><a className="brand-logo" href="#top" aria-label="Tuấn Tú Wedding trang chủ"><Image src="/logo-transparent.png" alt="Tuấn Tú Wedding Studio" fill sizes="108px" /></a><p>Makeup Bridal, Photography và Phóng sự cưới. Đồng hành cùng bạn lưu giữ những khoảnh khắc đẹp nhất của ngày trọng đại.</p><a href="tel:0817550150">☎ &nbsp;0817 550 150</a><p className="footer-address">Thôn Điện Tân, xã Cư Pui,<br />huyện Krông Bông, Đắk Lắk</p></div><div className="footer-column"><h3>Dịch vụ nổi bật</h3><a href="#services">→ &nbsp;Makeup Bridal</a><a href="#services">→ &nbsp;Wedding Photography</a><a href="#services">→ &nbsp;Phóng sự cưới</a><a href="#outfits">→ &nbsp;Trang phục cưới</a></div><div className="footer-column"><h3>Bản đồ</h3><div className="map-card"><iframe title="Bản đồ Tuấn Tú Wedding" src="https://www.google.com/maps?q=Thon+Dien+Tan,+Cu+Pui,+Krong+Bong,+Dak+Lak&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="map-open" href="https://maps.app.goo.gl/Jieztynya9e3PKjk7" target="_blank" rel="noreferrer">Mở trong Google Maps ↗</a></div><p className="footer-address">Thôn Điện Tân, xã Cư Pui<br />Krông Bông, Đắk Lắk</p></div><div className="footer-column"><h3>Fanpage</h3><div className="facebook-widget"><iframe title="Fanpage Tuấn Tú Wedding" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTuantuwedding&tabs=timeline&width=340&height=320&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true" loading="lazy" scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" /></div><a className="facebook-link" href="https://www.facebook.com/Tuantuwedding" target="_blank" rel="noreferrer">Xem fanpage trên Facebook ↗</a></div></div><div className="footer-bottom"><span>© 2026 Tuấn Tú Wedding</span><span>Makeup Bridal · Photography · Phóng sự cưới</span></div></footer>;
}

export default function WeddingPage() {
  return <main><Header /><Hero /><About /><Services /><Outfits /><Album /><section className="quote-section"><p className="quote-mark">“</p><blockquote>Buổi chụp nhẹ nhàng hơn mình tưởng. Thành phẩm có gu nhưng vẫn rất giống tụi mình muốn.</blockquote><p className="quote-author">— Khánh Linh & Đức Minh</p></section><Pricing /><Contact /><Footer /></main>;
}
