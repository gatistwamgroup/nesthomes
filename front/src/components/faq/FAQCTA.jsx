import React from "react";
import { Phone, ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQCTA = () => {

return(

<section className="
relative
py-16
sm:py-20
lg:py-32
px-4
sm:px-6
overflow-hidden
">

{/* Background */}

<img
src="/images/faq/faq-banner.png"
alt=""
className="absolute inset-0 h-full w-full object-cover"
/>

{/* Overlay */}

<div className="absolute inset-0 bg-black/75"></div>

{/* Content */}

<div
className="relative z-10 max-w-6xl mx-auto"
data-aos="zoom-in"
>

<div className="
bg-white/10
backdrop-blur-md
border
border-white/10

rounded-[25px]
sm:rounded-[35px]
lg:rounded-[50px]

px-5
sm:px-8
lg:px-14

py-10
sm:py-14
lg:py-20

text-center
">

{/* Badge */}

<div className="
inline-flex
items-center
gap-2

px-4
sm:px-5

py-2
sm:py-3

rounded-full
bg-white/10
border
border-white/20

text-white

text-xs
sm:text-sm

mb-6
sm:mb-8
">

<MessageCircle size={18}/>

Questions & Support

</div>

{/* Heading */}

<h2
className="
font-heading
text-white
leading-[1.1]
mb-6

text-3xl
sm:text-5xl
lg:text-6xl
xl:text-7xl
"
>

Still Have
<br/>

Questions?

</h2>

<p
className="
text-white/80
max-w-2xl
mx-auto

leading-7
sm:leading-8

mb-8
sm:mb-10

text-sm
sm:text-base
lg:text-lg

px-2
"
>

Our team is here to help you learn more about
The Nest Recovery Homes and guide you toward
the next step.

</p>

{/* Buttons */}

<div className="
flex
flex-col
sm:flex-row
justify-center
gap-4
sm:gap-5
items-center
">

<a
href="tel:6093004158"
className="
w-full
sm:w-auto

inline-flex
items-center
justify-center
gap-3

bg-primary
text-white

px-6
sm:px-8

py-4
sm:py-5

rounded-full

hover:scale-105
hover:shadow-2xl

transition-all
duration-300
"
>

<Phone size={18}/>

Call Now

</a>

<Link
to="/contact"
className="
w-full
sm:w-auto

inline-flex
items-center
justify-center
gap-3

border
border-white

bg-white/10
backdrop-blur-md

text-white

px-6
sm:px-8

py-4
sm:py-5

rounded-full

hover:bg-white
hover:text-primary

transition-all
duration-300
"
>

Contact Us

<ArrowRight size={18}/>

</Link>

</div>

</div>

</div>

</section>

)

}

export default FAQCTA;