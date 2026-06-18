import React from "react";
import {
CheckCircle,
ShieldCheck,
Users,
HeartHandshake,
Home,
Sparkles
} from "lucide-react";

const CommunityGuidelines = () => {

const rules=[

{
icon:<Users size={20}/>,
title:"Respect Everyone",
desc:"Maintain a respectful and supportive atmosphere for all residents."
},

{
icon:<ShieldCheck size={20}/>,
title:"Maintain Sobriety",
desc:"Commit to a recovery-focused lifestyle and positive habits."
},

{
icon:<Home size={20}/>,
title:"Follow House Structure",
desc:"Help create consistency through shared expectations and routines."
},

{
icon:<HeartHandshake size={20}/>,
title:"Positive Contribution",
desc:"Support and encourage a healthy community environment."
},

{
icon:<Sparkles size={20}/>,
title:"Shared Responsibility",
desc:"Work together to maintain a clean and welcoming space."
},

{
icon:<CheckCircle size={20}/>,
title:"Personal Growth",
desc:"Focus on accountability and long-term stability."
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
"
data-aos="fade-up"
>

<span className="
uppercase
tracking-[3px]
sm:tracking-[5px]
text-primary
text-xs
sm:text-sm
">

Community Guidelines

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
mb-5
sm:mb-6
leading-[1.15]
">

<span className="block">
Building A Positive
</span>

<span className="block">
Recovery Environment
</span>

</h2>

<p className="
max-w-3xl
mx-auto
text-gray-500
text-sm
sm:text-base
leading-7
sm:leading-8
px-2
">

Our community guidelines help create a safe,
supportive and structured environment where
everyone can focus on growth and stability.

</p>

</div>

{/* Cards */}

<div className="
grid
grid-cols-1
md:grid-cols-2
xl:grid-cols-3
gap-5
sm:gap-6
lg:gap-8
">

{rules.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*100}
className="
group
bg-[#F8F6F2]
rounded-[25px]
sm:rounded-[35px]
p-6
sm:p-8
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-500
"
>

{/* Top */}

<div className="
flex
items-center
justify-between
mb-6
sm:mb-8
">

<div className="
w-12
h-12
sm:w-14
sm:h-14
rounded-full
bg-primary/10
flex
items-center
justify-center
text-primary
group-hover:scale-110
transition
">

{item.icon}

</div>

<span className="
text-primary/20
font-bold
text-2xl
sm:text-3xl
">

0{index+1}

</span>

</div>

<h3 className="
text-primary
text-lg
sm:text-xl
font-semibold
mb-3
sm:mb-4
">

{item.title}

</h3>

<p className="
text-gray-500
text-sm
sm:text-base
leading-7
sm:leading-8
">

{item.desc}

</p>

</div>

))}

</div>

</div>

</section>

)

}

export default CommunityGuidelines