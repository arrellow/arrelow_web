import Footer from "@/app/components/layouts/footer";
import Nav from "./components/Nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import SideBar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="h-screen overflow-hidden">
          <div>
            <Nav />
          </div>
          <section className="flex h-full">
            <div className="w-[15%]">
              <SideBar />
            </div>
            <div className="no-scrollbar  h-full w-[85%]  overflow-scroll ">
              <div className="pt-20">{children}</div>
              <Footer />
            </div>
          </section>
        </div>
      </body>
    </html>
  );
}
