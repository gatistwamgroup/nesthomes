import React from "react";

const ContactHero = () => {
  return (

<section className="relative h-[70vh] flex items-center">

<img
src="/images/contact/contact-banner.png"
alt=""
className="absolute inset-0 w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/60"></div>

<div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

<span className="uppercase tracking-[5px] text-sm">

Contact Us

</span>

<h1 className="font-heading text-6xl mt-6 mb-8">

Let's Start
<br/>
Your Journey

</h1>

<p className="max-w-2xl leading-8 text-white/80">

Get in touch with our team and take
the first step toward a safe and
supportive environment.

</p>

</div>

</section>

  );
};

export default ContactHero;