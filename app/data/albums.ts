export type AlbumCard = {
  id: string;
  title: string;
  image: string;
  href?: string;
};

export const albums: AlbumCard[] = [
  {
    id: "ao-dai-ngoai-canh-2024",
    title: "Tổng hợp những bộ ảnh áo dài ngoại cảnh đẹp nhất 2024",
    image: "/698127715_2042508893332938_3485680641989805247_n.jpg",
  },
  {
    id: "chup-anh-cuoi-tphcm",
    title: "Chụp ảnh cưới đẹp tại TPHCM",
    image: "/731462985_2082258662691294_3744620196738825949_n.jpg",
  },
  {
    id: "phim-truong-tphcm",
    title: "Chụp ảnh cưới phim trường ở TPHCM",
    image: "/733171808_2082259139357913_6330504224245085979_n.jpg",
  },
  {
    id: "pre-wedding-da-lat",
    title: "Pre-wedding lãng mạn tại Đà Lạt",
    image: "/731500951_2082258816024612_2201150244894537816_n.jpg",
  },
  {
    id: "studio-han-quoc",
    title: "Concept Hàn Quốc trong studio",
    image: "/hero-4.jpg",
  },
  {
    id: "ngoai-canh-bien",
    title: "Album cưới ngoại cảnh bên bờ biển",
    image: "/792046908_122115057327333279_8242116682544989826_n.jpg",
  },
];
