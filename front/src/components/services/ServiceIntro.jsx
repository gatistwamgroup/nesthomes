import React from "react";
import {
ArrowRight,
ShieldCheck,
Users,
Home
} from "lucide-react";

import { Link } from "react-router-dom";

const ServiceIntro = () => {

const features=[

{
icon:<Home size={18}/>,
text:"Safe Housing"
},

{
icon:<Users size={18}/>,
text:"Community Support"
},

{
icon:<ShieldCheck size={18}/>,
text:"Recovery Focused"
}

]

return(

<section className="
py-16
md:py-20
lg:py-32
px-4
sm:px-6
overflow-hidden
">

<div className="max-w-7xl mx-auto">

<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-12
md:gap-16
lg:gap-24
items-center
">

{/* LEFT CONTENT */}

<div
data-aos="fade-right"
className="order-2 lg:order-1"
>

<span className="uppercase tracking-[4px] lg:tracking-[6px] text-primary text-sm">

What We Offer

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

Recovery Support
<br/>

Built Around Stability

</h2>

<p className="
text-gray-500
text-base
sm:text-lg
leading-7
sm:leading-8
lg:leading-9
mb-8
lg:mb-10
">

The Nest Recovery Homes creates a safe,
supportive and structured environment
where residents can focus on accountability,
community support and long-term growth.

</p>

{/* Feature Pills */}

<div className="
flex
flex-wrap
gap-3
sm:gap-4
mb-8
lg:mb-10
">

{features.map((item,index)=>(

<div
key={index}
className="
bg-white
rounded-full
px-4
sm:px-5
py-2.5
sm:py-3
shadow-md
flex
items-center
gap-2
"
>

<div className="text-primary">

{item.icon}

</div>

<span className="text-gray-600 text-sm">

{item.text}

</span>

</div>

))}

</div>



</div>


{/* RIGHT IMAGE */}

<div
data-aos="fade-left"
className="relative order-1 lg:order-2"
>

{/* Main Image */}

<img
src="/images/services/service-hom.png"
alt=""
className="
rounded-[25px]
sm:rounded-[35px]
lg:rounded-[40px]
w-full
h-[320px]
sm:h-[420px]
md:h-[550px]
lg:h-[650px]
object-cover
shadow-2xl
"
/>

{/* Top Floating Card */}

<div className="
absolute
top-4
sm:top-5
md:top-8

left-3
sm:left-4
md:-left-8

bg-white
rounded-[20px]
sm:rounded-[25px]
px-4
sm:px-5
py-3
sm:py-4
shadow-2xl
">

<h4 className="
text-primary
text-lg
sm:text-xl
font-bold
">

100%

</h4>

<p className="text-gray-500 text-sm">

Recovery Focused

</p>

</div>

{/* Bottom Floating Card */}

<div className="
absolute
bottom-4
sm:bottom-5

right-3
sm:right-4
md:right-8

bg-white
rounded-[20px]
sm:rounded-[25px]
p-4
sm:p-5
shadow-2xl

max-w-[220px]
">

<h4 className="text-primary font-semibold text-lg">

Positive Living

</h4>

<p className="text-gray-500 text-sm">

Community • Growth • Stability

</p>

</div>

</div>

</div>

</div>

</section>

)

}

export default ServiceIntro