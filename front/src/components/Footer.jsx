import React from "react";
import { Link } from "react-router-dom";
import {
Phone,
Mail,
MapPin
} from "lucide-react";

import {
FaInstagram,
FaFacebookF,
FaLinkedinIn
} from "react-icons/fa";

const MapFooter = ()=>{
const links=[

{
name:"Home",
path:"/"
},

{
name:"About",
path:"/about"
},

{
name:"Services",
path:"/services"
},

{
name:"Expectations",
path:"/expectations"
},

{
name:"Gallery",
path:"/gallery"
},

{
name:"FAQ",
path:"/faq"
},

{
name:"Contact",
path:"/contact"
}

]
return(

<footer className="relative ">

{/* Map */}

<div className="relative">

<iframe
title="map"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49268.1095385362!2d-74.62571527100994!3d39.48611453354661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0e777be1f041d%3A0x8b313fd9447cdeee!2sPomona%2C%20NJ%2008240%2C%20USA!5e0!3m2!1sen!2sin!4v1779771548198!5m2!1sen!2sin"
className="
w-full
h-[300px]
sm:h-[400px]
lg:h-[500px]
border-0
"
></iframe>

{/* Curved Divider */}

<div className="absolute bottom-[-1px] left-0 w-full">

<svg
viewBox="0 0 1440 120"
preserveAspectRatio="none"
className="
w-full
h-[70px]
sm:h-[90px]
lg:h-[120px]
"
>

<path
fill="#355B5E"
d="M0,64L80,69.3C160,75,320,85,480,90.7C640,96,800,96,960,80C1120,64,1280,32,1360,16L1440,0L1440,120L0,120Z"
/>

</svg>

</div>

</div>

{/* Footer */}

<div className="
bg-primary
text-white
px-5
sm:px-6
lg:px-8
pt-14
sm:pt-16
lg:pt-20
pb-8
">

<div
className="
max-w-7xl
mx-auto
px-1
sm:px-0
"
>

<div
className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-10
lg:gap-14
"
>

{/* Logo */}

<div>

<div className="bg-white rounded-[30px] inline-block mb-8">

<img
src="/logo.png"
className="
w-[140px]
sm:w-[160px]
lg:w-[180px]
"
alt=""
/>

</div>

<p className="
text-white/70
leading-7
sm:leading-8
text-sm
sm:text-base
">

A structured sober living
environment focused on
accountability and support.

</p>

<div className="
flex
flex-wrap
gap-3
sm:gap-4
mt-6
sm:mt-8
">

<a
href="#"
className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition"
>
<FaInstagram/>
</a>

<a
href="#"
className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition"
>
<FaFacebookF/>
</a>

<a
href="#"
className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary transition"
>
<FaLinkedinIn/>
</a>

</div>

</div>

{/* Links */}

<div>

<h3 className="
font-semibold
text-xl
sm:text-2xl
mb-6
sm:mb-8
">

Quick Links

</h3>

<div className="space-y-4">

{links.map((item,index)=>(

<Link
key={index}
to={item.path}
className="block text-white/70 hover:text-white transition"
>

{item.name}

</Link>

))}

</div>

</div>

{/* Contact */}

<div>

<h3 className="
font-semibold
text-xl
sm:text-2xl
mb-6
sm:mb-8
">

Contact Info

</h3>

<div className="space-y-5">

<a
href="tel:6093004158"
className="
flex
items-start
gap-3
hover:text-secondary
break-words
text-sm
sm:text-base
"
>

<Phone
size={22}
className="min-w-[22px]"
/>

(609)300-4158

</a>

<a
href="mailto:nestrecoveryhomes@gmail.com"
className="flex items-center gap-3 hover:text-secondary"
>

<Mail
size={22}
className="min-w-[22px]"
/>

nestrecoveryhomes@gmail.com

</a>

<a
href="https://maps.google.com/?q=Egg+Harbor+New+Jersey"
target="_blank"
rel="noreferrer"
className="flex items-center gap-3 hover:text-secondary"
>

<MapPin
size={22}
className="min-w-[22px]"
/>

Egg Harbor, New Jersey

</a>

</div>

</div>

{/* CTA */}

<div>

<h3 className="
font-semibold
text-xl
sm:text-2xl
mb-6
sm:mb-8
">

Start Today

</h3>

<p className="text-white/70 mb-6">

Take your first step toward
a supportive recovery environment.

</p>

<Link
to="/contact"
className="
inline-flex
justify-center
items-center
w-full
sm:w-auto
bg-white
text-primary
px-8
py-4
rounded-full
font-semibold
hover:scale-105
transition
"
>

Apply Today

</Link>

</div>

</div>

{/* Bottom */}

<div
className="
border-t
border-white/10
mt-12
sm:mt-16
pt-6
sm:pt-8
flex
flex-col
lg:flex-row
justify-between
items-center
gap-1
text-center
lg:text-left
"
>

<p className="
text-white/50
text-sm
sm:text-base
">

© 2026 The Nest Recovery Homes

</p>

<p className="
text-white/50
text-sm
sm:text-base
">

Designed by

<a
href="https://adverttechlab.com"
target="_blank"
rel="noreferrer"
className="ml-2 text-white font-semibold hover:text-secondary"
>

Advert Techlab

</a>

</p>

</div>

</div>

</div>

</footer>

)

}

export default MapFooter