import React from "react";
import Button from "./Button";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section
      id="hero-section"
      className="mx-auto my-20 grid max-w-screen-xl grid-cols-1 md:grid-cols-2"
    >
      <div className="flex justify-between flex-col pr-28 pt-20">
        <div className="space-y-12">
          <h1 className="text-6xl font-bold">Make remote work</h1>
          <p className="text-lg text-mediumGray">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <Button
            name="Learn more"
            className="rounded-xl px-5 py-2 font-semibold outline outline-1 outline-offset-2 hover:bg-almostBlack hover:text-white hover:outline-transparent"
          />
        </div>
        <div className="flex justify-between">
          <Image
            src="/images/client-audiophile.svg"
            alt="client-logo"
            width={120}
            height={75}
            className="object-contain object-center"
          />
          <Image
            src="/images/client-databiz.svg"
            alt="client-logo"
            width={120}
            height={75}
            className="object-contain object-center"
          />
          <Image
            src="/images/client-maker.svg"
            alt="client-logo"
            width={120}
            height={75}
            className="object-contain object-center"
          />
          <Image
            src="/images/client-meet.svg"
            alt="client-logo"
            width={120}
            height={75}
            className="object-contain object-center"
          />
        </div>
      </div>
      <div>
        <Image
          src="/images/image-hero-desktop.png"
          alt="hero-img"
          width={450}
          height={450}
          className="object-cover object-center"
        />
      </div>
    </section>
  );
};

export default HeroSection;
