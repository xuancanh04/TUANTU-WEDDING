const PHONE = "0817550150";

export default function FloatingContact() {
  return (
    <div className="floating-contact" aria-label="Liên hệ nhanh">
      <a
        className="floating-btn floating-zalo"
        href={`https://zalo.me/${PHONE}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat Zalo"
      >
        <span className="floating-pulse" aria-hidden />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Icon_of_Zalo.svg.webp" alt="" width={56} height={56} draggable={false} />
      </a>
      <a
        className="floating-btn floating-phone"
        href={`tel:${PHONE}`}
        aria-label="Gọi điện 0817 550 150"
      >
        <span className="floating-pulse" aria-hidden />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/thiet-ke-bieu-tuong-dien-thoai_23-2151311664.avif"
          alt=""
          width={56}
          height={56}
          draggable={false}
        />
      </a>
    </div>
  );
}
