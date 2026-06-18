import React from "react";
import {
Sunrise,
Briefcase,
Users,
TrendingUp,
Moon
} from "lucide-react";

const DailyStructure = () => {

const steps=[

{
icon:<Sunrise size={22}/>,
title:"Morning Routine",
desc:"Begin the day with structure and healthy habits."
},

{
icon:<Briefcase size={22}/>,
title:"Work / Meetings",
desc:"Stay productive and actively engaged."
},

{
icon:<Users size={22}/>,
title:"Community Support",
desc:"Encouragement and accountability together."
},

{
icon:<TrendingUp size={22}/>,
title:"Personal Growth",
desc:"Build confidence and positive routines."
},

{
icon:<Moon size={22}/>,
title:"Evening Accountability",
desc:"Reflect and prepare for tomorrow."
}

]

return(

<section className="
relative
py-16
sm:py-20
lg:py-36
px-4
sm:px-6
bg-[#F8F6F2]
overflow-hidden
">

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div
className="text-center mb-20"
data-aos="fade-up"
>

<span className="uppercase tracking-[5px] text-primary text-sm">

Daily Living

</span>

<h2 className="
font-heading
text-primary
text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
mt-4
sm:mt-5
mb-4
sm:mb-6
leading-tight
">

Life At The Nest

</h2>

<p className="
max-w-2xl
mx-auto
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
px-2
">

A structured environment designed around
healthy routines and long-term growth.

</p>

</div>


<div className="
grid
grid-cols-1
lg:grid-cols-3
gap-8
lg:gap-10
items-center
">

{/* Left Cards */}

<div className="
space-y-4
sm:space-y-6
order-2
lg:order-1
">

{steps.slice(0,2).map((item,index)=>(

<div
key={index}
data-aos="fade-right"
data-aos-delay={index*100}
className="bg-white rounded-[30px] p-6 shadow-lg hover:-translate-y-2 transition"
>

<div className="flex gap-4">

<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">

{item.icon}

</div>

<div>

<h3 className="font-semibold text-primary mb-2">

{item.title}

</h3>

<p className="text-gray-500 text-sm leading-7">

{item.desc}

</p>

</div>

</div>

</div>

))}

</div>


{/* Center Image */}

<div
className="
relative
order-1
lg:order-2
"
data-aos="zoom-in"
>

<img
src="/images/expectations/daily.png"
alt=""
className="
w-full
h-[280px]
sm:h-[400px]
lg:h-[500px]
rounded-[25px]
sm:rounded-[40px]
object-cover
shadow-2xl
"
/>

<div className="
absolute
bottom-4
left-4
sm:bottom-6
sm:left-6
bg-white
rounded-[20px]
sm:rounded-[25px]
px-4
sm:px-5
py-3
sm:py-4
shadow-xl
max-w-[220px]
">

<h3 className="text-primary font-bold">

Healthy Routine

</h3>

<p className="text-gray-500 text-sm">

Growth • Support • Stability

</p>

</div>

</div>


{/* Right Cards */}

<div className="
space-y-4
sm:space-y-6
order-3
">

{steps.slice(2).map((item,index)=>(

<div
key={index}
data-aos="fade-left"
data-aos-delay={index*100}
className="
bg-white
rounded-[20px]
sm:rounded-[30px]
p-4
sm:p-6
shadow-lg
hover:-translate-y-2
transition
"
>

<div className="
flex
items-start
gap-3
sm:gap-4
">

<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">

{item.icon}

</div>

<div>

<h3 className="
font-semibold
text-primary
text-base
sm:text-lg
mb-1
sm:mb-2
">

{item.title}

</h3>

<p className="
text-gray-500
text-sm
leading-6
sm:leading-7
">

{item.desc}

</p>

</div>

</div>

</div>

))}

</div>

</div>

</div>

</section>

)

}

export default DailyStructure