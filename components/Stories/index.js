import React from "react";
import Image from "next/image";

export default function Stories() {
  return (
    <section className="stories">
      <div className="d-flex flex-row justify-content-center align-items-center container">
        <Image
          src="/images/story.png"
          alt="semina"
          className="d-none d-lg-block"
          width="515"
          height="600"
        />
        <div className="d-flex flex-column">
          <div>
            <div className="sub-title">
              <span className="text-gradient-pink">Story</span>
            </div>
            <div className="title">
              One Great Event. <br className="d-none d-lg-block" />
              For The Better World.
            </div>
          </div>
          <p className="paragraph">
            Baca kisah bagaimana Shayna berhasil membangun{" "}
            <br className="d-none d-lg-block" />
            sebuah Startup yang membantu warga untuk{" "}
            <br className="d-none d-lg-block" />
            mendapatkan bantuan selama pandemic.
          </p>
          <a href="#" className="btn-navy">
            Read
          </a>
        </div>
      </div>
    </section>
  );
}
