import type { Metadata } from "next";
import ContactPage from "../components/ContactPage";

export const metadata: Metadata = {
  title: "Liên hệ | Tuấn Tú Wedding",
  description: "Liên hệ Tuấn Tú Wedding để được tư vấn makeup, chụp ảnh và phóng sự cưới tại Đắk Lắk.",
};

export default function Contact() {
  return <ContactPage />;
}
