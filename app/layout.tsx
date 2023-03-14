import "./globals.css";
import { Poppins } from "next/font/google";
import Sidebar from "./Sidebar";
import Landing from "./Landing";
import useAuthStore from "@/store/authStore";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Noteflix",
  description: "An Anime Theme Notes Application.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthStore();

  console.log("User from layout component: ", user);

  return (
    <html className="overflow-hidden" lang="en">
      <body className={`${poppins.variable} font-poppins bg-[#202124]`}>
        {user ? (
          <>
            {/* @ts-ignore */}
            <Navbar />
            <div className="flex">
              <div>
                <Sidebar />
              </div>
              <div className="flex-1">{children}</div>
            </div>
          </>
        ) : (
          <>
            <Landing />
          </>
        )}
      </body>
    </html>
  );
}
