export type PricingCard = {
  id: string;
  title: string;
  image: string;
  description: string;
  /** Đích khi bấm vào thẻ — mặc định /lien-he */
  href?: string;
};

export const pricingCards: PricingCard[] = [
  {
    id: "bang-gia-vung-tau",
    title: "Chụp ảnh cưới Vũng Tàu",
    image: "/731462985_2082258662691294_3744620196738825949_n.jpg",
    description:
      "Bối cảnh biển và ánh sáng tự nhiên giúp bộ ảnh cưới Vũng Tàu của bạn trở nên nhẹ nhàng, lãng mạn và đầy cảm xúc.",
  },
  {
    id: "chup-anh-ngoai-canh",
    title: "Chụp ảnh ngoại cảnh",
    image: "/733171808_2082259139357913_6330504224245085979_n.jpg",
    description:
      "Những miền cảnh thiên nhiên tươi đẹp được chọn làm phông nền, lưu giữ khoảnh khắc chân thực nhất của hai bạn.",
  },
  {
    id: "chup-anh-pre-wedding",
    title: "Chụp ảnh Pre-wedding",
    image: "/731500951_2082258816024612_2201150244894537816_n.jpg",
    description:
      "Chọn không gian và nhịp điệu riêng cho bộ ảnh mở đầu câu chuyện tình yêu của hai bạn, từ studio đến ngoại cảnh theo concept.",
  },
  {
    id: "chup-anh-phong-su",
    title: "Chụp ảnh phóng sự",
    image: "/698127715_2042508893332938_3485680641989805247_n.jpg",
    description:
      "Kể lại ngày trọng đại theo dòng sự kiện bằng những khung hình chân thực, giàu cảm xúc và không sắp đặt.",
  },
  {
    id: "chup-anh-tiec",
    title: "Chụp ảnh tiệc",
    image: "/770658657_122112132999333279_1010509948571590506_n.jpg",
    description:
      "Ekip ghi lại trọn vẹn không khí buổi tiệc cưới, những khoảnh khắc đáng nhớ của cô dâu chú rể và khách mời.",
  },
  {
    id: "chup-anh-gia-tien",
    title: "Chụp ảnh gia tiên",
    image: "/768205289_122112132933333279_914924309500977199_n.jpg",
    description:
      "Lưu giữ những nghi lễ trang trọng và phút giây sum vầy ấm áp bên gia đình trong ngày vui của hai bạn.",
  },
];
