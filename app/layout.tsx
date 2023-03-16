import "./globals.css";
import { Poppins } from "next/font/google";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Landing from "./Landing";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  console.log("Session from layout component: ", session);

  return (
    <html className="overflow-hidden" lang="en">
      <body className={`${poppins.variable} font-poppins bg-[#202124]`}>
        {session?.user ? (
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
