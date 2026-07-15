import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ============================================
// Site Layout (wrapped with Navbar and Footer)
// ============================================
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 antialiased">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
