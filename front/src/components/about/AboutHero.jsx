import React from "react";

const AboutHero = () => {
  return (

<section
className="
relative
min-h-[65vh]
sm:min-h-[70vh]
lg:h-[75vh]
flex
items-center
overflow-hidden
"
>

{/* Background Image */}

<img
src=""
alt="About Banner"
className="absolute inset-0 w-full h-full object-cover"
/>

{/* Overlay */}

<div className="absolute inset-0 bg-black/60"></div>

{/* Content */}

<div className="relative z-10 w-full">

<div
className="
max-w-7xl
mx-auto
px-5
sm:px-6
lg:px-10
flex
justify-center
text-center
"
>

<div
className="
max-w-3xl
mx-auto
"
>

<span className="
uppercase
tracking-[3px]
sm:tracking-[5px]
text-xs
sm:text-sm
md:text-base
text-white/90
">

About Us

</span>

<h1
className="
font-heading
text-white
leading-[1.1]

mt-4
sm:mt-5

mb-5
sm:mb-6

text-3xl
sm:text-5xl
md:text-6xl
lg:text-7xl

max-w-4xl
mx-auto
"
>

More Than A House.
<br/>

A Place To Rebuild.

</h1>

<p
className="
text-white/80

leading-7
sm:leading-8

max-w-2xl
mx-auto

text-sm
sm:text-base
md:text-lg

px-2
sm:px-0
"
>

The Nest Recovery Homes provides a safe,
structured and supportive environment
designed to help individuals focus on
recovery and long-term stability.

</p>

</div>

</div>

</div>

</section>

  );
};

export default AboutHero;