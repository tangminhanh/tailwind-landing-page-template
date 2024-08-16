export const metadata = {
  title: "Lynn Tang",
  description: "Xin Chào! Welcome to my portfolio.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="aboutme">
        <FeaturesPlanet />
      </section>
      <section id="workexperience">
        <BusinessCategories />
      </section>
      <section id="projects">
        <LargeTestimonial />
      </section>
      <section id="contact">
        <Cta />
      </section>
    </>
  );
}
