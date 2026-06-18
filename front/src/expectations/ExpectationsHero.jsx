import React from "react";

const ExpectationsHero = () => {
  return (

<section className="relative h-[70vh] flex items-center">

<img
src="/images/expectations/expect-banner.png"
alt=""
className="absolute inset-0 w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

<span className="uppercase tracking-[5px] text-sm">

Resident Expectations

</span>

<h1 className="font-heading text-6xl mt-6 mb-8">

Recovery Starts
<br/>
With Commitment

</h1>

<p className="max-w-2xl leading-8 text-white/80">

The Nest Recovery Homes creates
a stable environment where residents
and community work together toward
long-term growth and accountability.

</p>

</div>

</section>

  );
};

export default ExpectationsHero;