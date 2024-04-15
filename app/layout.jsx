import "@/assets/styles/globalstyles.css";
import AuthProvider from "@/components/AuthProvider";
import Navbar from "@/components/Navbar";
import { Signika_Negative } from "next/font/google";

export const metadata = {
  title: "Realty Studios",
  discription: "Canada's Real Estate Photography & Studios - Realty Stuios",
};
const inter = Signika_Negative({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const layout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="eng">
        <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
};

export default layout;
