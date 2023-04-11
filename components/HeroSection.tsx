import React from "react";
import Button from "./Button";
import Image from "next/image";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <section
      id="hero-section"
      className="mx-auto my-5 grid max-w-screen-xl grid-cols-1 md:grid-cols-2"
    >
      <div className="flex flex-col justify-between px-5 md:col-start-1 md:col-end-2 md:pr-36 md:pt-20">
        <div className="mb-12 space-y-8 md:mb-0 md:space-y-12">
          <h1 className="text-center text-4xl font-bold md:text-left md:text-6xl">
            Make <br />
            remote work
          </h1>
          <p className="text-center text-lg text-mediumGray md:text-left">
            Get your team in sync, no matter your
            <br /> location. Streamline processes, create team <br />
            rituals, and watch productivity soar.
          </p>
          <Button
            name="Learn more"
            className="mx-auto block rounded-xl px-5 py-2 font-semibold outline outline-1 outline-offset-2 hover:bg-almostBlack hover:text-white hover:outline-transparent md:inline-block"
          />
        </div>
        <div className="flex justify-between">
          <Image
            src="/images/client-audiophile.svg"
            alt="client-logo"
            width={88}
            height={54}
            className="w-16 object-contain  object-center md:h-auto md:w-auto"
          />
          <Image
            src="/images/client-databiz.svg"
            alt="client-logo"
            width={88}
            height={54}
            className="w-16 object-contain  object-center md:h-auto md:w-auto"
          />
          <Image
            src="/images/client-maker.svg"
            alt="client-logo"
            width={88}
            height={54}
            className="w-16 object-contain  object-center md:h-auto md:w-auto"
          />
          <Image
            src="/images/client-meet.svg"
            alt="client-logo"
            width={88}
            height={54}
            className="w-16 object-contain  object-center md:h-auto md:w-auto"
          />
        </div>
      </div>
      <div className="row-start-1 row-end-2 mb-16 md:col-start-2 md:col-end-3 md:mb-0">
        <Image
          src="/images/image-hero-desktop.png"
          alt="hero-img"
          width={450}
          height={450}
          className="hidden object-cover object-center md:flex"
        />
        <Image
          src="/images/image-hero-mobile.png"
          alt="hero-img"
          width={450}
          height={450}
          className="object-cover object-center md:hidden"
        />
      </div>
    </section>
  );
};

export default HeroSection;
