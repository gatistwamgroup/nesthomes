import React from "react";
import {
Home,
Users,
ShieldCheck,
MapPin,
ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";

const HousingFeatures = ()=>{

const features=[

{
icon:<Home size={26}/>,
title:"Safe Housing",
desc:"Comfortable and welcoming living spaces designed to support stability and recovery."
},

{
icon:<Users size={26}/>,
title:"Community Support",
desc:"A family-like atmosphere built around encouragement and accountability."
},

{
icon:<ShieldCheck size={26}/>,
title:"Structured Living",
desc:"Positive routines focused on responsibility and long-term growth."
},

{
icon:<MapPin size={26}/>,
title:"Nearby Opportunities",
desc:"Convenient access to transportation and daily opportunities."
}

]

return(

<section className="
relative
py-16
sm:py-20
lg:py-32
px-4
sm:px-6
bg-[#F8F6F2]
overflow-hidden
">

{/* Background Blur */}

<div className="absolute top-0 left-0 w-[200px]
h-[200px]
sm:w-[300px]
sm:h-[300px]
lg:w-[350px]
lg:h-[350px] bg-primary/5 rounded-full blur-[100px]"></div>

<div className="absolute bottom-0 right-0 w-[200px]
h-[200px]
sm:w-[300px]
sm:h-[300px]
lg:w-[350px]
lg:h-[350px] bg-primary/5 rounded-full blur-[100px]"></div>

<div className="relative max-w-7xl mx-auto">

{/* Heading */}

<div
className="text-center mb-16"
data-aos="fade-up"
>

<span className="uppercase tracking-[5px] text-primary text-sm">

Housing Features

</span>

<h2
className="
font-heading
text-primary
mt-4
sm:mt-5
leading-[1.1]

text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
"
>

Designed For Comfort
<br/>

And Recovery

</h2>

<p className="
max-w-2xl
mx-auto
mt-5
sm:mt-6
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
px-2
">

Creating a safe and structured environment
focused on support, accountability and stability.

</p>

</div>

{/* Cards */}

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-5
sm:gap-6
lg:gap-8
">

{features.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*100}
className="
group
bg-white
rounded-[25px]
sm:rounded-[35px]
p-6
sm:p-8
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
lg:hover:-translate-y-4
transition-all
duration-500
flex
flex-col
h-full
"
>

{/* Icon */}

<div className="w-14 h-14
sm:w-16
sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition duration-500">

{item.icon}

</div>

{/* Title */}

<h3 className="
text-primary
text-xl
sm:text-2xl
font-semibold
mb-3
sm:mb-4

min-h-auto
sm:min-h-[70px]
">

{item.title}

</h3>

{/* Description */}

<p className="
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
flex-grow
">

{item.desc}

</p>

{/* Bottom */}

<div className="mt-auto pt-6">

<div className="w-full h-[2px] bg-gray-100 mb-6"></div>

<Link
to="/contact"
className="flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
>

Learn More

<ArrowRight size={18}/>

</Link>

</div>

</div>

))}

</div>

{/* Bottom CTA */}

<div
className="
flex
justify-center
mt-10
sm:mt-16
"
data-aos="zoom-in"
>

<Link
to="/contact"
className="
bg-primary
text-white

px-8
sm:px-10

py-4
sm:py-5

rounded-full

w-full
sm:w-auto

text-center

hover:scale-105
hover:shadow-xl

transition-all
duration-500
"
>

Apply Today

</Link>

</div>

</div>

</section>

)

}

export default HousingFeatures