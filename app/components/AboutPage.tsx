import Image from "next/image";
import { Camera, ClipboardCheck, HeartHandshake, Sparkles, UsersRound } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { Footer, Header } from "./WeddingPage";

const strengths = [
  ["Ekip chuyên nghiệp", "Chúng tôi sở hữu đội ngũ nhiếp ảnh gia, chuyên viên trang điểm và stylist trẻ, năng động, sáng tạo, giàu kinh nghiệm và tâm huyết.", UsersRound],
  ["Phong cách đa dạng", "Từ lãng mạn, cổ điển đến hiện đại, cá tính, chúng tôi tự tin giúp bạn thể hiện câu chuyện tình yêu theo cách riêng.", Sparkles],
  ["Không gian chụp ảnh độc đáo", "Studio được thiết kế tinh tế, hiện đại cùng phim trường riêng rộng 1200m2 với nhiều bối cảnh đa dạng.", Camera],
  ["Dịch vụ trọn gói", "Chúng tôi cung cấp dịch vụ cưới hỏi trọn gói, bao gồm chụp ảnh, quay phim, trang điểm, cho thuê trang phục.", ClipboardCheck],
  ["Tận tâm đồng hành", "Luôn lắng nghe, tư vấn và chăm chút để hành trình chuẩn bị ngày cưới của bạn thật nhẹ nhàng.", HeartHandshake],
] as const;

const services = [
  ["01", "Chụp ảnh cưới", "Studio, ngoại cảnh và phóng sự cưới giữ lại những khoảnh khắc chân thật.", "/731462985_2082258662691294_3744620196738825949_n.jpg", "Cặp đôi trong ngày cưới"],
  ["02", "Makeup & làm tóc", "Tôn lên nét đẹp tự nhiên với phong cách hợp gương mặt và trang phục.", "/798888625_2144674686449691_5290257589761309098_n.jpg", "Trang điểm cô dâu"],
  ["03", "Trang phục cưới", "Váy cưới, vest và áo dài được chọn lựa để bạn luôn cảm thấy là chính mình.", "/733171808_2082259139357913_6330504224245085979_n.jpg", "Trang phục cưới"],
  ["04", "Thiết kế album", "Kể lại câu chuyện của hai bạn bằng một cuốn album được chăm chút đến từng trang.", "/770658657_122112132999333279_1010509948571590506_n.jpg", "Album ảnh cưới"],
] as const;

export default function AboutPage() {
  return (
    <main className="about-page">
      <Header solid />
      <section className="about-page-heading section-pad" aria-label="Giới thiệu">
        <ScrollReveal>
          <p className="section-label"><span>Giới thiệu</span><span>Tuấn Tú Wedding</span></p>
        </ScrollReveal>
      </section>
      <section className="about-story section-pad" aria-labelledby="story-title">
        <div className="about-story-grid">
          <ScrollReveal className="about-story-copy scroll-reveal-left">
            <h2 id="story-title">MỖI TÌNH YÊU<br /><em>ĐỀU XỨNG ĐÁNG ĐƯỢC NHỚ</em></h2>
            <p>Tuấn Tú Wedding là nơi những ngày chuẩn bị cho lễ cưới trở nên nhẹ nhàng hơn. Chúng tôi đồng hành cùng bạn từ ý tưởng đầu tiên đến những khung hình cuối cùng.</p>
            <p>Không chỉ tạo nên một bộ ảnh đẹp, điều chúng tôi muốn lưu giữ là cảm xúc chân thật và dáng vẻ rạng rỡ nhất của hai bạn.</p>
            <a className="text-link" href="/lien-he">Đặt lịch tư vấn <span>↗</span></a>
          </ScrollReveal>
          <ScrollReveal className="about-story-video scroll-reveal-right" delay={140}>
            <iframe title="Video Tuấn Tú Wedding" src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F3518421348307646%2F&show_text=false&width=560&t=0" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen scrolling="no" />
          </ScrollReveal>
        </div>
      </section>

      <section className="about-strengths section-pad" aria-labelledby="strengths-title">
        <ScrollReveal>
          <h2 id="strengths-title">Điều gì làm nên sự khác biệt của<br />Tuấn Tú Wedding?</h2>
        </ScrollReveal>
        <div className="about-strength-grid">{strengths.map(([title, copy, Icon], index) => (
          <ScrollReveal key={title} delay={index * 90}>
            <article>
              <span className="about-strength-icon" aria-hidden="true"><Icon strokeWidth={1.5} /></span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="about-strength-arrow" aria-hidden="true">↗</span>
            </article>
          </ScrollReveal>
        ))}</div>
      </section>

      <section className="about-services section-pad" aria-labelledby="services-title">
        <ScrollReveal className="about-services-heading">
          <h2 id="services-title">CÁC DỊCH VỤ CHÍNH TẠI TUẤN TÚ WEDDING?</h2>
        </ScrollReveal>
        <div className="about-service-cards">{services.map(([number, title, copy, image, alt], index) => (
          <ScrollReveal key={number} delay={index * 90}>
            <article className="about-service-card">
              <div className="about-service-photo"><Image src={image} alt={alt} fill sizes="(max-width: 700px) 84vw, 25vw" /></div>
              <div className="about-service-card-info"><h3>{title}</h3><p>{copy}</p></div>
            </article>
          </ScrollReveal>
        ))}</div>
      </section>


      <Footer />
    </main>
  );
}
