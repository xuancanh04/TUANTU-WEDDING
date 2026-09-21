import type { Metadata } from "next";
import AboutPage from "../components/AboutPage";

export const metadata: Metadata = {
  title: "Giới thiệu | Tuấn Tú Wedding",
  description: "Tìm hiểu về Tuấn Tú Wedding - ekip makeup, chụp ảnh và phóng sự cưới tại Đắk Lắk.",
};

export default function About() {
  return <AboutPage />;
}
