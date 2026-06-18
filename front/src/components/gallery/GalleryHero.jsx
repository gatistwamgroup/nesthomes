import React from "react";

const GalleryHero = () => {
  return (

<section className="relative h-[70vh] flex items-center">

<img
src="/images/gallery/gallery-banner.png"
alt=""
className="absolute inset-0 w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

<span className="uppercase tracking-[5px] text-sm">

Gallery

</span>

<h1 className="font-heading text-6xl mt-6 mb-8">

Explore
<br/>
The Nest

</h1>

<p className="max-w-2xl leading-8 text-white/80">

Take a look inside The Nest Recovery Homes
and explore the spaces designed for comfort,
support and recovery.

</p>

</div>

</section>

  );
};

export default GalleryHero;