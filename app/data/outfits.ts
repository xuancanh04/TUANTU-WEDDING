export type OutfitCategory = {
  slug: string;
  title: string;
  shortLabel: string;
  image: string;
  description: string;
};

export const outfitCategories: OutfitCategory[] = [
  {
    slug: "ao-dai",
    title: "Áo dài cưới",
    shortLabel: "Áo dài cưới",
    image: "/698127715_2042508893332938_3485680641989805247_n.jpg",
    description: "Áo dài cưới thêu tay tinh xảo, tôn dáng và giữ nét truyền thống.",
  },
  {
    slug: "vay-cuoi",
    title: "Bộ Sưu Tập Váy Cưới Cao Cấp, Luxury",
    shortLabel: "Váy cưới",
    image: "/731462985_2082258662691294_3744620196738825949_n.jpg",
    description: "Váy cưới luxury bồng xòe, đuôi cá và chữ A cho mọi vóc dáng.",
  },
  {
    slug: "ao-dai-bung-qua",
    title: "Áo dài bưng quả",
    shortLabel: "Áo dài bưng quả",
    image: "/751871787_2103689473881546_264446681136333968_n.jpg",
    description: "Áo dài bưng quả đồng bộ màu sắc, cho đội hình bưng lễ thêm rạng rỡ.",
  },
  {
    slug: "vest",
    title: "Vest chú rể",
    shortLabel: "Vest",
    image: "/733171808_2082259139357913_6330504224245085979_n.jpg",
    description: "Vest chú rể lịch lãm, may đo vừa vặn cho ngày trọng đại.",
  },
];

export const outfitGalleries: Record<string, string[]> = {
  "ao-dai": [
    "/698127715_2042508893332938_3485680641989805247_n.jpg",
    "/780160806_2131763894407437_145323078288009800_n.jpg",
    "/798888625_2144674686449691_5290257589761309098_n.jpg",
  ],
  "vay-cuoi": [
    "/731462985_2082258662691294_3744620196738825949_n.jpg",
    "/731500951_2082258816024612_2201150244894537816_n.jpg",
    "/733171808_2082259139357913_6330504224245085979_n.jpg",
  ],
  "ao-dai-bung-qua": [
    "/751871787_2103689473881546_264446681136333968_n.jpg",
    "/792046908_122115057327333279_8242116682544989826_n.jpg",
    "/768205289_122112132933333279_914924309500977199_n.jpg",
  ],
  vest: [
    "/733171808_2082259139357913_6330504224245085979_n.jpg",
    "/731462985_2082258662691294_3744620196738825949_n.jpg",
    "/698127715_2042508893332938_3485680641989805247_n.jpg",
  ],
};
