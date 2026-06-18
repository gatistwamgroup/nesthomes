import React from "react";
import { Link } from "react-router-dom";

import {
Heart,
Users,
ShieldCheck,
ArrowRight
} from "lucide-react";

const CoreValues = () => {

const values=[

{
icon:<Heart size={28}/>,
title:"Respect",
text:"We create an environment where every individual is treated with dignity, understanding and support.",
link:"/about"
},

{
icon:<Users size={28}/>,
title:"Community",
text:"Recovery becomes stronger through meaningful connections and a supportive atmosphere.",
link:"/gallery"
},

{
icon:<ShieldCheck size={28}/>,
title:"Accountability",
text:"We encourage responsibility, healthy routines and personal growth every day.",
link:"/expectations"
}

];

return(

<section
className="
relative
py-16
sm:py-20
lg:py-32
px-4
sm:px-6
bg-white
overflow-hidden
"
>

{/* Background Blur */}

<div
className="
absolute
top-10
left-0
w-[180px]
h-[180px]
sm:w-[250px]
sm:h-[250px]
lg:w-[300px]
lg:h-[300px]
bg-primary/5
rounded-full
blur-[80px]
lg:blur-[100px]
"
/>

<div
className="
absolute
bottom-0
right-0
w-[180px]
h-[180px]
sm:w-[250px]
sm:h-[250px]
lg:w-[300px]
lg:h-[300px]
bg-secondary/10
rounded-full
blur-[80px]
lg:blur-[100px]
"
/>

<div className="relative max-w-7xl mx-auto">

{/* Heading */}

<div
className="text-center mb-16 lg:mb-20"
data-aos="fade-up"
>

<span className="uppercase tracking-[5px] text-primary text-sm">

Core Values

</span>

<h2
className="
font-heading
text-primary
leading-[1.1]
mt-5
mb-6

text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
"
>

Values That Guide
<br/>

The Nest

</h2>

<p className="
max-w-3xl
mx-auto
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
md:text-lg
px-2
">

Our foundation is built on trust,
support and creating a positive
environment focused on long-term stability.

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

{values.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*150}
className="
relative
bg-[#F8F6F2]
rounded-[25px]
sm:rounded-[30px]
lg:rounded-[35px]
p-6
sm:p-8
lg:p-10
shadow-md
hover:shadow-2xl
hover:-translate-y-4
transition-all
duration-700
group
overflow-hidden
flex
flex-col
"
>

{/* Hover Gradient */}

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition duration-700"></div>

{/* Icon */}

<div className="w-14 h-14
sm:w-16
sm:h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center mb-8 group-hover:rotate-6 transition-all duration-500">

{item.icon}

</div>

{/* Content */}

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
flex-grow
">

{item.text}

</p>

{/* Button */}

<Link
to={item.link}
className="
mt-6
sm:mt-8
inline-flex
items-center
gap-2
text-primary
font-medium
text-sm
sm:text-base
group-hover:gap-4
transition-all
duration-300
"
>

Learn More

<ArrowRight size={18}/>

</Link>

</div>

))}

</div>

</div>

</section>

)

}

export default CoreValues;