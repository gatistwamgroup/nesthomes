import React from "react";
import {
Clock,
ShieldCheck,
Users
} from "lucide-react";

const AdditionalQuestions = () => {

const items=[

{
icon:<Clock size={30}/>,
title:"Length Of Stay",
desc:"Flexible stay duration based on personal goals and recovery progress."
},

{
icon:<ShieldCheck size={30}/>,
title:"Recovery Guidelines",
desc:"Clear expectations that create accountability and positive routines."
},

{
icon:<Users size={30}/>,
title:"Community Support",
desc:"Supportive environment focused on growth and connection."
}

]

return(

<section className="py-16
sm:py-20
lg:py-28
px-4
sm:px-6 bg-[#F8F6F2] overflow-hidden">

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

More Information

</span>

<h2 className="
font-heading
text-3xl
sm:text-4xl
lg:text-5xl
xl:text-6xl
mt-4
sm:mt-5
mb-5
sm:mb-6
text-primary
leading-[1.15]
">

Everything You Need
<br/>

To Know

</h2>

<p className="
text-gray-500
max-w-2xl
mx-auto
leading-7
sm:leading-8
text-sm
sm:text-base
">

Helpful information for residents and families.

</p>

</div>


<div className="
grid
grid-cols-1
lg:grid-cols-3
gap-6
lg:gap-8
items-center
">

{/* Left Card */}

<div
data-aos="fade-right"
className="
bg-white
rounded-[25px]
sm:rounded-[35px]
lg:rounded-[40px]
p-6
sm:p-8
shadow-xl
hover:-translate-y-2
lg:hover:-translate-y-3
transition
duration-500
"
>

<div className="
w-14
h-14
sm:w-16
sm:h-16
rounded-full
bg-primary/10
flex
items-center
justify-center
text-primary
mb-5
sm:mb-6
">

{items[0].icon}

</div>

<h3 className="
text-primary
text-xl
sm:text-2xl
font-semibold
mb-4
sm:mb-5
">

{items[0].title}

</h3>

<p className="
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
">

{items[0].desc}

</p>

</div>


{/* Center Featured Card */}

<div
data-aos="zoom-in"
className="
relative
bg-primary
rounded-[30px]
sm:rounded-[40px]
lg:rounded-[45px]
p-8
sm:p-10
lg:p-14
text-white
shadow-2xl

scale-100
lg:scale-110

z-10
"
>

<div className="
w-16
h-16
sm:w-20
sm:h-20
rounded-full
bg-white/20
flex
items-center
justify-center
mb-6
sm:mb-8
">

{items[1].icon}

</div>

<span className="
uppercase
tracking-[3px]
sm:tracking-[4px]
text-xs
sm:text-sm
">

Featured Information

</span>

<h3 className="
font-heading
text-3xl
sm:text-4xl
mt-4
sm:mt-5
mb-5
sm:mb-6
">

{items[1].title}

</h3>

<p className="leading-8 text-white/80">

{items[1].desc}

</p>

</div>


{/* Right Card */}

<div
data-aos="fade-left"
className="bg-white rounded-[40px] p-8 shadow-xl hover:-translate-y-3 transition duration-500"
>

<div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">

{items[2].icon}

</div>

<h3 className="text-primary text-2xl font-semibold mb-5">

{items[2].title}

</h3>

<p className="text-gray-500 leading-8">

{items[2].desc}

</p>

</div>

</div>

</div>

</section>

)

}

export default AdditionalQuestions