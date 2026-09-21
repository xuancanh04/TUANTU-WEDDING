import type { Metadata } from "next";
import PricingPage from "../components/PricingPage";

export const metadata: Metadata = {
  title: "Bảng giá dịch vụ | Tuấn Tú Wedding",
  description: "Bảng giá tham khảo cho các dịch vụ Pre-wedding, Wedding Day, trang phục cưới và Makeup Bridal của Tuấn Tú Wedding.",
};

export default function Pricing() {
  return <PricingPage />;
}
