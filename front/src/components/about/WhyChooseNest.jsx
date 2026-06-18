import React from "react";
import { Link } from "react-router-dom";
import {
Home,
Users,
ShieldCheck,
HeartHandshake,
ArrowRight
} from "lucide-react";

const WhyChooseNest = () => {

const features=[

{
icon:<Home size={28}/>,
title:"Safe Housing",
desc:"Comfortable and structured living spaces designed around stability and recovery.",
link:"/services"
},

{
icon:<Users size={28}/>,
title:"Supportive Community",
desc:"A family-like environment built around encouragement and accountability.",
link:"/services"
},

{
icon:<ShieldCheck size={28}/>,
title:"Recovery Focused",
desc:"A positive atmosphere where growth and long-term recovery come first.",
link:"/services"
},

{
icon:<HeartHandshake size={28}/>,
title:"Respect & Care",
desc:"Every resident deserves support, compassion and dignity.",
link:"/services"
}

]

const stats=[

"Structured Living",
"MAT Supported",
"Community Support"

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

{/* Background Shapes */}

<div className="absolute top-0 left-0 w-[250px]
h-[250px]
sm:w-[400px]
sm:h-[400px] rounded-full bg-primary/5 blur-[100px]"></div>

<div className="absolute bottom-0 right-0 w-[180px]
h-[180px]
sm:w-[300px]
sm:h-[300px] rounded-full bg-secondary/10 blur-[80px]"></div>

<div className="max-w-7xl mx-auto relative z-10">

{/* Top Pills */}

<div
data-aos="fade-down"
className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-16"
>

{stats.map((item,index)=>(

<div
key={index}
className="
bg-white/90
backdrop-blur-md
px-4
sm:px-6
py-3
sm:py-4
rounded-full
shadow-lg
text-gray-700
font-medium
text-sm
sm:text-base
hover:-translate-y-1
transition
"
>

✓ {item}

</div>

))}

</div>


{/* Heading */}

<div
className="
text-center
mb-14
sm:mb-16
lg:mb-20
"
data-aos="fade-up"
>

<span className="uppercase tracking-[5px] text-primary text-sm">

Why Choose The Nest

</span>

<h2
className="
font-heading
text-primary
leading-[1.1]
mt-4
sm:mt-5
mb-6
sm:mb-8

text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
"
>

Building Stability
<br/>

Through Support

</h2>

<p className="
max-w-3xl
mx-auto
text-gray-500

text-base
sm:text-lg

leading-7
sm:leading-9

px-2
">

The Nest Recovery Homes creates a safe,
supportive and structured environment where
residents can focus on accountability,
growth and long-term recovery.

</p>

</div>


{/* Cards */}

<div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-4
gap-6
lg:gap-8
">

{features.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*150}
className="
group
bg-white/80
backdrop-blur-xl

shadow-xl

border border-white/50

rounded-[25px]
sm:rounded-[35px]

p-6
sm:p-8

min-h-[280px]
sm:min-h-[340px]

flex flex-col

hover:-translate-y-4
hover:shadow-2xl

transition-all
duration-500
"
>

<div
className="
w-14
h-14
sm:w-16
sm:h-16

rounded-[20px]

bg-primary/10

flex
items-center
justify-center

text-primary

mb-8

group-hover:bg-primary
group-hover:text-white
group-hover:rotate-6

transition-all
duration-500
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
text-sm
sm:text-base
leading-7
sm:leading-8
flex-grow
">

{item.desc}

</p>

<Link
to={item.link}
className="
inline-flex
items-center
gap-2

mt-8

text-primary
font-semibold

group-hover:gap-4

transition-all
"
>

Learn More

<ArrowRight size={16}/>

</Link>

</div>

))}

</div>


{/* CTA */}

<div
className="text-center mt-12
sm:mt-16"
data-aos="zoom-in"
>

<Link
to="/contact"
className="
inline-flex
items-center
justify-center
gap-3

w-full
sm:w-auto

bg-primary
text-white

px-6
sm:px-8

py-4
sm:py-5

rounded-full

hover:scale-105
transition-all
duration-300
"
>

Apply Today

<ArrowRight size={18}/>

</Link>

</div>

</div>

</section>

)

}

export default WhyChooseNest