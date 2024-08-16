import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
export const metadata = {
  title: "Lynn Tang",
  description: "Xin Chào! Welcome to my portfolio.",
};

export default function Home() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="features-planet">
        <FeaturesPlanet />
      </section>
      <section id="business-categories">
        <BusinessCategories />
      </section>
      <section id="large-testimonial">
        <LargeTestimonial />
      </section>
      <section id="cta">
        <Cta />
      </section>
    </>
  );
}
