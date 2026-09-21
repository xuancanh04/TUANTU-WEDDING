export type ServiceItem = {
  slug: string;
  title: string;
  shortLabel: string;
  group: "pre-wedding" | "wedding-day" | "makeup";
  image: string;
  description: string;
  highlights: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "pre-wedding",
    title: "Pre-wedding",
    shortLabel: "Pre-wedding",
    group: "pre-wedding",
    image: "/731500951_2082258816024612_2201150244894537816_n.jpg",
    description:
      "Bộ ảnh Pre-wedding mở đầu câu chuyện tình yêu của hai bạn — concept riêng, ánh sáng đẹp và nhịp điệu tự nhiên từ studio đến ngoại cảnh.",
    highlights: [
      "Tư vấn concept theo phong cách cặp đôi",
      "Makeup & trang phục theo gói",
      "File ảnh chỉnh màu chuyên nghiệp",
    ],
  },
  {
    slug: "studio",
    title: "Chụp ảnh Studio",
    shortLabel: "Studio",
    group: "pre-wedding",
    image: "/hero-1.jpg",
    description:
      "Không gian studio được chăm chút ánh sáng và phông nền, giúp cặp đôi có bộ ảnh sạch sẽ, hiện đại và dễ phối với nhiều concept.",
    highlights: [
      "Ánh sáng kiểm soát, nền đa dạng",
      "Phù hợp concept Hàn Quốc / tối giản",
      "Thời gian chụp linh hoạt theo gói",
    ],
  },
  {
    slug: "phim-truong",
    title: "Chụp ảnh Phim trường",
    shortLabel: "Phim trường",
    group: "pre-wedding",
    image: "/hero-4.jpg",
    description:
      "Phim trường với nhiều bối cảnh trong một không gian, giúp bạn có album đa dạng mà vẫn tiện lợi và chỉn chu về styling.",
    highlights: [
      "Nhiều góc cảnh trong một buổi chụp",
      "Stylist đồng hành xuyên suốt",
      "Phù hợp cặp đôi muốn tiết kiệm di chuyển",
    ],
  },
  {
    slug: "ngoai-canh",
    title: "Chụp ảnh Ngoại cảnh",
    shortLabel: "Ngoại cảnh",
    group: "pre-wedding",
    image: "/733171808_2082259139357913_6330504224245085979_n.jpg",
    description:
      "Ngoại cảnh mang đến khung hình chân thực với thiên nhiên, đường phố hoặc biển — lưu giữ cảm xúc thật giữa không gian rộng mở.",
    highlights: [
      "Chọn địa điểm theo sở thích cặp đôi",
      "Tận dụng ánh sáng vàng giờ đẹp",
      "Album giàu cảm xúc và chiều sâu không gian",
    ],
  },
  {
    slug: "wedding-day",
    title: "Wedding Day",
    shortLabel: "Wedding Day",
    group: "wedding-day",
    image: "/698127715_2042508893332938_3485680641989805247_n.jpg",
    description:
      "Đồng hành trọn vẹn ngày cưới — từ lễ gia tiên đến tiệc — để từng khoảnh khắc quan trọng được ghi lại chỉn chu và cảm xúc.",
    highlights: [
      "Ekip theo sát timeline ngày cưới",
      "Kết hợp chụp truyền thống và phóng sự",
      "Bàn giao file theo tiến độ đã thống nhất",
    ],
  },
  {
    slug: "tron-goi-ngay-cuoi",
    title: "Trọn gói ngày cưới",
    shortLabel: "Trọn gói ngày cưới",
    group: "wedding-day",
    image: "/770658657_122112132999333279_1010509948571590506_n.jpg",
    description:
      "Gói đồng hành ngày cưới đầy đủ: photography, phóng sự và hỗ trợ timeline — để bạn yên tâm tận hưởng ngày trọng đại.",
    highlights: [
      "Photography + phóng sự trong một ekip",
      "Phối hợp makeup & trang phục nếu cần",
      "Tư vấn timeline trước ngày cưới",
    ],
  },
  {
    slug: "phong-su",
    title: "Chụp truyền thống | Phóng sự",
    shortLabel: "Phóng sự",
    group: "wedding-day",
    image: "/768205289_122112132933333279_914924309500977199_n.jpg",
    description:
      "Kể lại ngày cưới theo dòng sự kiện bằng những khung hình chân thực — nghi lễ truyền thống và khoảnh khắc tự nhiên bên gia đình, bạn bè.",
    highlights: [
      "Ghi lại nghi lễ gia tiên trang trọng",
      "Phóng sự tiệc cưới giàu cảm xúc",
      "Ít sắp đặt, ưu tiên khoảnh khắc thật",
    ],
  },
  {
    slug: "makeup",
    title: "Makeup Bridal",
    shortLabel: "Makeup",
    group: "makeup",
    image: "/731462985_2082258662691294_3744620196738825949_n.jpg",
    description:
      "Makeup cô dâu tôn lên nét đẹp tự nhiên, hợp gương mặt và trang phục — từ buổi makeup thử đến ngày cưới.",
    highlights: [
      "Makeup thử trước ngày cưới",
      "Tư vấn phong cách theo concept",
      "Đồng bộ với váy / áo dài đã chọn",
    ],
  },
];

export const serviceGalleries: Record<string, string[]> = {
  "pre-wedding": [
    "/731500951_2082258816024612_2201150244894537816_n.jpg",
    "/731462985_2082258662691294_3744620196738825949_n.jpg",
    "/hero-4.jpg",
  ],
  studio: [
    "/hero-1.jpg",
    "/792046908_122115057327333279_8242116682544989826_n.jpg",
    "/780160806_2131763894407437_145323078288009800_n.jpg",
  ],
  "phim-truong": [
    "/hero-4.jpg",
    "/733171808_2082259139357913_6330504224245085979_n.jpg",
    "/798888625_2144674686449691_5290257589761309098_n.jpg",
  ],
  "ngoai-canh": [
    "/733171808_2082259139357913_6330504224245085979_n.jpg",
    "/731462985_2082258662691294_3744620196738825949_n.jpg",
    "/731500951_2082258816024612_2201150244894537816_n.jpg",
  ],
  "wedding-day": [
    "/698127715_2042508893332938_3485680641989805247_n.jpg",
    "/768205289_122112132933333279_914924309500977199_n.jpg",
    "/770658657_122112132999333279_1010509948571590506_n.jpg",
  ],
  "tron-goi-ngay-cuoi": [
    "/770658657_122112132999333279_1010509948571590506_n.jpg",
    "/698127715_2042508893332938_3485680641989805247_n.jpg",
    "/751871787_2103689473881546_264446681136333968_n.jpg",
  ],
  "phong-su": [
    "/768205289_122112132933333279_914924309500977199_n.jpg",
    "/698127715_2042508893332938_3485680641989805247_n.jpg",
    "/hero-2.jpg",
  ],
  makeup: [
    "/731462985_2082258662691294_3744620196738825949_n.jpg",
    "/792046908_122115057327333279_8242116682544989826_n.jpg",
    "/798888625_2144674686449691_5290257589761309098_n.jpg",
  ],
};

export function getServiceBySlug(slug: string) {
  return services.find((item) => item.slug === slug);
}
