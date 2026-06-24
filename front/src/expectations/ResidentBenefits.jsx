import React from "react";
import {
ShieldCheck,
Users,
Home,
Heart,
ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";

const ResidentBenefits = () => {

const benefits=[

{
icon:<Home size={24}/>,
title:"Safe Housing",
desc:"Comfortable and structured living spaces designed around stability."
},

{
icon:<Users size={24}/>,
title:"Community Support",
desc:"A family-like atmosphere built on encouragement and accountability."
},

{
icon:<ShieldCheck size={24}/>,
title:"Accountability",
desc:"Healthy routines and structure that support personal growth."
},

{
icon:<Heart size={24}/>,
title:"Recovery Focused",
desc:"A positive environment created for long-term stability."
}

]

return(

<section className="
py-16
sm:py-20
lg:py-32
px-4
sm:px-6
bg-white
overflow-hidden
">

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div
className="
text-center
mb-12
sm:mb-16
lg:mb-20
"
data-aos="fade-up"
>

<span className="uppercase tracking-[4px] lg:tracking-[6px] text-primary text-sm">

What Residents Can Expect

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

Support Built Around
<br/>

Your Journey

</h2>

<p className="
max-w-3xl
mx-auto
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
px-2
">

Experience a supportive environment designed
to encourage growth, accountability and
long-term recovery.

</p>

</div>


{/* Cards */}

<div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-5
sm:gap-6
lg:gap-8
">

{benefits.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*100}
className="
group
bg-[#F8F6F2]/70
backdrop-blur-md
border
border-gray-100

rounded-[25px]
sm:rounded-[35px]

p-6
sm:p-8

shadow-lg
hover:shadow-2xl
hover:-translate-y-3

transition-all
duration-500

flex
flex-col
"
>

{/* Icon */}

<div className="
w-14
h-14
sm:w-16
sm:h-16

rounded-2xl

bg-gradient-to-br
from-primary
to-[#6f9c9a]

flex
items-center
justify-center

text-white
mb-6
sm:mb-8

group-hover:scale-110
transition
">

{item.icon}

</div>

{/* Title */}

<h3 className="
text-xl
sm:text-2xl
font-semibold
text-primary
mb-3
sm:mb-4
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

{/* Bottom Link */}



</div>

))}

</div>



</div>

</section>

)

}

export default ResidentBenefits;