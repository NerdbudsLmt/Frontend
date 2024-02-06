import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "GeekOps",
  description: "Home Page for GeekOps software development organization",
};

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto text-white w-[97%] tablet:w-[95%] max-w-[1380px]">
      <Nav />
      {children}
      <Footer />
    </section>
  );
}
