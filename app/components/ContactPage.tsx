"use client";

import { FormEvent, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Footer, Header } from "./WeddingPage";

const ADDRESS = "Thôn Điện Tân, xã Cư Pui, huyện Krông Bông, Đắk Lắk";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main className="contact-page">
      <Header solid />
      <section className="contact-page-heading section-pad" aria-label="Liên hệ">
        <ScrollReveal>
          <p className="section-label"><span>Liên hệ</span><span>Tuấn Tú Wedding</span></p>
        </ScrollReveal>
      </section>

      <section className="contact-map-section">
        <ScrollReveal className="contact-map-copy section-pad scroll-reveal-left">
          <h2>GHÉ STUDIO MỘT BUỔI</h2>
          <p>{ADDRESS}</p>
          <a className="map-direction" href="https://maps.app.goo.gl/Jieztynya9e3PKjk7" target="_blank" rel="noreferrer">Chỉ đường trên Google Maps <span>↗</span></a>
        </ScrollReveal>
        <ScrollReveal className="contact-map scroll-reveal-right" delay={140}>
          <div aria-label="Bản đồ vị trí Tuấn Tú Wedding">
            <iframe title="Bản đồ Tuấn Tú Wedding" src="https://www.google.com/maps?q=Thon+Dien+Tan,+Cu+Pui,+Krong+Bong,+Dak+Lak&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </ScrollReveal>
      </section>

      <section className="contact-form-section section-pad" aria-labelledby="form-title">
        <ScrollReveal className="contact-form-heading">
          <h2 id="form-title">KỂ MÌNH NGHE VỀ NGÀY ĐẶC BIỆT ẤY</h2>
        </ScrollReveal>
        <ScrollReveal delay={120}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field"><label htmlFor="name">Họ và tên <sup>*</sup></label><input id="name" name="name" autoComplete="name" required placeholder="Tên của bạn" /></div>
            <div className="field"><label htmlFor="phone">Số điện thoại <sup>*</sup></label><input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="Ví dụ: 0817 550 150" /></div>
          </div>
          <div className="form-row">
            <div className="field"><label htmlFor="date">Ngày cưới dự kiến</label><input id="date" name="date" type="date" /></div>
            <div className="field"><label htmlFor="service">Dịch vụ quan tâm</label><select id="service" name="service" defaultValue=""><option value="" disabled>Chọn dịch vụ</option><option>Pre-wedding</option><option>Wedding Day</option><option>Makeup Bridal</option><option>Trang phục cưới</option><option>Khác</option></select></div>
          </div>
          <div className="field"><label htmlFor="message">Lời nhắn <sup>*</sup></label><textarea id="message" name="message" required rows={5} placeholder="Bạn mong muốn concept, địa điểm hoặc ngân sách như thế nào?" /></div>
          <div className="form-submit-row"><p>Những mục có dấu <sup>*</sup> là bắt buộc.</p><button type="submit">Gửi thông tin <span>↗</span></button></div>
          <p className="form-success" role="status" aria-live="polite">{submitted ? "Cảm ơn bạn! Tuấn Tú Wedding sẽ liên hệ lại sớm nhất có thể." : ""}</p>
        </form>
        </ScrollReveal>
      </section>
      <Footer />
    </main>
  );
}
