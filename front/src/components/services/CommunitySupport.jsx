import React from "react";
import {
Users,
HeartHandshake,
Shield,
ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";

const CommunitySupport = () => {

const cards=[

{
icon:<Users size={28}/>,
title:"Family Atmosphere",
desc:"A welcoming environment where residents feel supported and connected."
},

{
icon:<HeartHandshake size={28}/>,
title:"Support Network",
desc:"Encouragement and positive relationships that strengthen recovery."
},

{
icon:<Shield size={28}/>,
title:"Accountability",
desc:"Creating healthy routines through structure and responsibility."
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

<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-12
lg:gap-24
items-center
">

{/* LEFT */}

<div
className="
grid
gap-4
sm:gap-6
order-2
lg:order-1
"
data-aos="fade-left"
>

{cards.map((item,index)=>(

<div
key={index}
data-aos="zoom-in"
data-aos-delay={index*150}
className="
bg-[#F8F6F2]
rounded-[25px]
sm:rounded-[35px]
p-5
sm:p-8
shadow-md
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-500
"
>

<div className="
flex
flex-col
sm:flex-row
gap-4
sm:gap-5
items-start
">

<div className="
w-14
h-14
sm:w-16
sm:h-16
rounded-full
bg-white
flex
items-center
justify-center
text-primary
shadow-md
flex-shrink-0
">

{item.icon}

</div>

<div>

<h3 className="
text-primary
text-xl
sm:text-2xl
font-semibold
mb-2
sm:mb-3
">

{item.title}

</h3>

<p className="text-gray-500 leading-8">

{item.desc}

</p>

</div>

</div>

</div>

))}

</div>


{/* RIGHT */}

<div
data-aos="fade-right"
className="
order-1
lg:order-2
text-center
lg:text-left
"
>

<span className="uppercase tracking-[5px] text-primary text-sm">

Community Support

</span>

<h2
className="
font-heading
text-primary
leading-[1.1]
mt-5
mb-8

text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
"
>

Recovery Works
<br/>

Better Together

</h2>

<p className="
text-gray-500
leading-7
sm:leading-9
mb-8
sm:mb-10
max-w-xl
mx-auto
lg:mx-0
">

Recovery becomes stronger in a positive
environment built around support,
encouragement and accountability.

</p>

{/* Trust Stats */}

<div className="
grid
grid-cols-1
sm:grid-cols-2
gap-4
sm:gap-5
mb-8
sm:mb-10
">

<div className="
bg-[#F8F6F2]
rounded-[20px]
sm:rounded-[30px]
p-5
sm:p-6
text-center
">

<h3 className="
text-primary
text-3xl
sm:text-4xl
font-bold
">

24/7

</h3>

<p className="text-gray-500">

Supportive Environment

</p>

</div>

<div className="bg-[#F8F6F2] rounded-[30px] p-6">

<h3 className="text-primary text-4xl font-bold">

100%

</h3>

<p className="text-gray-500">

Recovery Focused

</p>

</div>

</div>



</div>

</div>

</div>

</section>

)

}

export default CommunitySupport