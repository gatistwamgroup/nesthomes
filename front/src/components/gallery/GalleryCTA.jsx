import React from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryCTA=()=>{

return(

<section className="relative py-32 px-6">

<img
src="/images/gallery/gallery-cta.jpg"
className="absolute inset-0 w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/70"></div>

<div
className="relative z-10 max-w-5xl mx-auto text-center"
data-aos="zoom-in"
>

<span className="uppercase tracking-[5px] text-white">

See The Difference

</span>

<h2 className="font-heading text-white text-6xl mt-6 mb-8">

Ready To Start
<br/>
Your Journey?

</h2>

<div className="flex justify-center gap-6 flex-wrap">

<a
href="tel:+10000000000"
className="bg-primary px-8 py-5 rounded-full text-white flex items-center gap-3"
>

<Phone size={18}/>

Call Now

</a>



</div>

</div>

</section>

)

}

export default GalleryCTA