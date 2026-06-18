import React from "react";
import {
Home,
ShieldCheck,
Users,
TrendingUp,
HeartHandshake
} from "lucide-react";

const RecoveryTimeline = () => {

const steps=[

{
icon:<Home size={24}/>,
title:"Move In",
desc:"Start in a safe and welcoming environment."
},

{
icon:<ShieldCheck size={24}/>,
title:"Build Stability",
desc:"Develop healthy routines and structure."
},

{
icon:<Users size={24}/>,
title:"Community Support",
desc:"Connect with a supportive atmosphere."
},

{
icon:<TrendingUp size={24}/>,
title:"Personal Growth",
desc:"Focus on confidence and progress."
},

{
icon:<HeartHandshake size={24}/>,
title:"Long-Term Recovery",
desc:"Continue moving toward a healthier future."
}

]

return(

<section className="
py-20
sm:py-24
lg:py-32
px-4
sm:px-6
bg-[#F8F6F2]
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

<span className="
uppercase
tracking-[3px]
sm:tracking-[5px]
text-primary
text-xs
sm:text-sm
">

Recovery Journey

</span>

<h2 className="
font-heading
text-3xl
sm:text-4xl
lg:text-6xl
text-primary
mt-4
sm:mt-5
mb-4
sm:mb-6
leading-[1.15]
">

Your Journey
<br/>

At The Nest

</h2>

<p className="
text-gray-500
max-w-2xl
mx-auto
leading-7
sm:leading-8
text-sm
sm:text-base
px-2
">

Every recovery journey starts with
a single step and grows with support.

</p>

</div>

{/* Journey Path */}

<div className="
space-y-8
sm:space-y-10
lg:space-y-12
">

{steps.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*100}
className={`
flex
items-center
gap-5
sm:gap-8

${
index%2===0
?
"lg:flex-row"
:
"lg:flex-row-reverse"
}

flex-col
text-center
lg:text-left
`}
>

{/* Icon */}

<div className="relative">

<div className="
w-20
h-20
sm:w-24
sm:h-24
rounded-full
bg-primary
text-white
flex
items-center
justify-center
shadow-2xl
">

{item.icon}

</div>

<div className="
absolute
-top-2
-right-2
sm:-top-3
sm:-right-3
w-7
h-7
sm:w-8
sm:h-8
rounded-full
bg-white
text-primary
shadow
flex
items-center
justify-center
font-semibold
text-xs
sm:text-sm
">

{index+1}

</div>

</div>

{/* Content */}

<div className="
bg-white
rounded-[25px]
sm:rounded-[35px]
p-5
sm:p-8
shadow-xl
max-w-xl
w-full
hover:-translate-y-2
transition
">

<h3 className="
text-primary
text-xl
sm:text-2xl
font-semibold
mb-3
sm:mb-4
">

{item.title}

</h3>

<p className="
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
">

{item.desc}

</p>

</div>

</div>

))}

</div>

</div>

</section>

)

}

export default RecoveryTimeline