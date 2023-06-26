import React from "react";
import { Work } from "@/components/Pricing/Work";

export const Mobile = () => {
  return (
    <div className="w-full my-20 ">
      <Work
        title="Discover. Transform. Elevate. Embrace Yoga & Wellness"
        bg="linear-gradient(180deg, #7B513D -0.1%, #000000 100%)"
        content="Transform your well-being. Join us for exclusive access to premium yoga and wellness products. Embrace balance, health, and happiness today!"
        img="/images/appYoga.svg"
        btn="#7B513D"
        name="E-Commerce"
      />
      <Work
        title="Simplify HR tasks with our secure app"
        bg="linear-gradient(180deg, #482429 40.1%, #AA3241 100%)"
        content="Revolutionize your HR management with our secure software. Streamline tasks, automate processes, and maximize efficiency with HRIS."
        img="/images/mobilehr.svg"
        btn="#AA3241"
        name="Entertainment"
      />

      <Work
        title="Unleash Entertainment: Stream, Enjoy, Explore"
        bg="linear-gradient(180deg, #1C3147 30.73%, #3B85CC 73.44%)"
        content="Discover a world of entertainment with our streaming app. Unlimited access to thousands of movies, shows, and exclusive content. Sign up now for a premium streaming experience."
        btn="#3B85CC"
        img="/images/net.svg"
        name="Human Resources"
      />
    </div>
  );
};
