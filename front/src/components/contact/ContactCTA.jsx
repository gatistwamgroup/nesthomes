import React from "react";
import {Phone} from "lucide-react";

const ContactCTA=()=>{

return(

<section className="relative py-32 px-6">

<img
src="/images/contact/contact-cta.png"
className="absolute inset-0 h-full w-full object-cover"
/>

<div className="absolute inset-0 bg-black/70"></div>

<div
className="relative z-10 text-center max-w-5xl mx-auto"
data-aos="zoom-in"
>

<h2 className="font-heading text-6xl text-white mb-8">

Ready To Begin
Your Journey?

</h2>

<a
href="tel:+1000000000"
className="inline-flex bg-primary px-8 py-5 rounded-full text-white items-center gap-3"
>

<Phone size={18}/>

Call Now

</a>

</div>

</section>

)

}

export default ContactCTA