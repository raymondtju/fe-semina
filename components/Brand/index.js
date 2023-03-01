// /* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

import apple from "../../public/images/apple-111.svg";
import adobe from "../../public/images/Adobe.svg";
import slack from "../../public/images/slack-21.svg";
import spotify from "../../public/images/spotify-11.svg";
import google from "../../public/images/google-2015.svg";

export default function Brand({ className }) {
  return (
    <section className={`brand-partner text-center ${className}`}>
      <p>Events held by top & biggest global companies</p>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <Image src={apple} alt="semina" />
        <Image src={adobe} alt="semina" />
        <Image src={slack} alt="semina" />
        <Image src={spotify} alt="semina" />
        <Image src={google} alt="semina" />
      </div>
    </section>
  );
}
