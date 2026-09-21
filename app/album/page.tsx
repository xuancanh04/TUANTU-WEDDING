import type { Metadata } from "next";
import AlbumPage from "../components/AlbumPage";

export const metadata: Metadata = {
  title: "Album ảnh cưới | Tuấn Tú Wedding",
  description: "Tổng hợp những album ảnh cưới đẹp, lãng mạn nhất tại Tuấn Tú Wedding.",
};

export default function Album() {
  return <AlbumPage />;
}
