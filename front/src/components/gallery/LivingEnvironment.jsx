import React from "react";
import {
Home,
Users,
HeartHandshake,
ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";

const LivingEnvironment = ()=>{

const cards=[

{
icon:<Home size={28}/>,
title:"Comfortable Living",
description:
"Designed to provide a peaceful and stable environment that feels like home."
},

{
icon:<Users size={28}/>,
title:"Community Support",
description:
"A family-like atmosphere built around encouragement and accountability."
},

{
icon:<HeartHandshake size={28}/>,
title:"Positive Environment",
description:
"Focused on growth, respect and creating long-term healthy routines."
}

]

return(

<section className="
py-16
sm:py-20
lg:py-28
px-4
sm:px-6
bg-[#F8F6F2]
overflow-hidden
">

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div
className="text-center mb-16"
data-aos="fade-up"
>

<span className="uppercase tracking-[4px] md:tracking-[6px] text-primary text-sm">

Living Environment

</span>

<h2
className="
font-heading
text-primary
leading-[1.1]
mt-4
sm:mt-5
mb-5
sm:mb-6

text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
"
>

A Place Designed
<br/>

For Stability & Growth

</h2>

<p
className="
max-w-2xl
mx-auto
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
px-2
"
>

Creating a comfortable and supportive environment
where individuals can focus on recovery,
growth and long-term stability.

</p>

</div>


{/* Cards */}

<div
className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-6
lg:gap-8
"
>

{cards.map((item,index)=>(

<div
key={index}
data-aos="zoom-in"
data-aos-delay={index*100}

className="
group
bg-white
rounded-[25px]
sm:rounded-[35px]
p-6
sm:p-8
lg:p-10
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all
duration-500
"

>

<div
className="
w-16
h-16
sm:w-20
sm:h-20
rounded-full
bg-primary/10
flex
items-center
justify-center
text-primary
mb-8
group-hover:scale-110
transition
"
>

{item.icon}

</div>

<h3 className="
text-primary
text-xl
sm:text-2xl
font-semibold
mb-4
sm:mb-5
">

{item.title}

</h3>

<p className="
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
mb-6
sm:mb-8
">

{item.description}

</p>

<Link
to="/contact"
className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
>

Learn More

<ArrowRight size={18}/>

</Link>

</div>

))}

</div>


{/* Bottom CTA */}

<div
className="mt-16 text-center"
data-aos="fade-up"
>

<Link
to="/contact"
className="
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

w-full
sm:w-auto

hover:scale-105
hover:shadow-xl
transition
"
>

Start Your Journey

<ArrowRight size={18}/>

</Link>

</div>

</div>

</section>

)

}

export default LivingEnvironment