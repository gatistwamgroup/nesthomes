import React from "react";

const ServiceHero = () => {
  return (
    <section className="
relative
min-h-[70vh]
sm:min-h-[75vh]
lg:h-[70vh]
flex
items-center
">

      <img
        src="/images/services/service-banner.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="
relative
z-10
max-w-7xl
mx-auto
px-6
lg:px-8
text-white
w-full
">

        <span className="
uppercase
tracking-[3px]
sm:tracking-[5px]
text-xs
sm:text-sm
">

          Support Services

        </span>

        <h1
className="
font-heading
text-4xl
sm:text-5xl
lg:text-6xl
xl:text-7xl
mt-4
sm:mt-6
mb-6
sm:mb-8
leading-[1.1]
max-w-4xl
"
>

          Safe Housing.
          <br />
          Structured Support.

        </h1>

        <p
className="
max-w-2xl
text-sm
sm:text-base
lg:text-lg
leading-7
sm:leading-8
text-white/80
"
>

          The Nest Recovery Homes provides a safe,
          structured and supportive environment
          designed to help individuals rebuild stability,
          confidence and long-term recovery habits.

        </p>

      </div>

    </section>
  );
};

export default ServiceHero;