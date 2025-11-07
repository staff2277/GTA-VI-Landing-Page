const Hero = () => {
  return (
    <section>
      <div className="hero-section mask-wrapper">
        <div className="size-full ">
          <img
            src="/images/hero-bg.webp"
            alt="background
"
            className="scale-out "
          />
          <img
            src="/images/hero-text.webp"
            alt="hero logo
"
            className="title-logo fade-out border-2 border-black"
          />
          <img
            src="/images/watch-trailer.png"
            alt="trailer
"
            className="trailer-logo fade-out border-2 border-green-600"
          />
          <div className="play-img fade-out border-2 border-red-600">
            <img src="/images/play.png" alt="play" className="w-7 ml-1" />
          </div>
          <div>
            <img
              src="/images/big-hero-text.svg"
              alt="logo"
              className="size-full object-cover mask-logo"
            />
          </div>
          <div>
            <img
              src="/images/fake-logo.svg"
              alt="fake logo"
              className="overlay-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
