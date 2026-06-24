import React from "react";
import {
CheckCircle,
ArrowRight,
ShieldCheck
} from "lucide-react";

import { Link } from "react-router-dom";

const StructuredLiving = () => {

const points=[

"Safe and stable living environment",

"Healthy routines and accountability",

"Positive community atmosphere",

"Recovery-focused structure"

]

return(

<section className="
py-16
sm:py-20
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
gap-10
md:gap-14
lg:gap-24
items-center
">

{/* LEFT IMAGE */}

<div
className="relative order-2 lg:order-1"
data-aos="fade-right"
>

<img
src="/images/services/structured.png"
alt=""
className="
w-full
h-[280px]
sm:h-[400px]
md:h-[500px]
lg:h-[650px]
rounded-[25px]
sm:rounded-[30px]
lg:rounded-[40px]
object-cover
shadow-2xl
"
/>

{/* Floating Card */}

<div
className="
absolute
bottom-5
left-5
lg:bottom-8
lg:left-8
bg-white
rounded-[25px]
p-5
shadow-2xl
"
>

<div className="flex items-center gap-3">

<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">

<ShieldCheck size={20}/>

</div>

<div>

<h4 className="font-bold text-primary">

Structured Support

</h4>

<p className="text-gray-500 text-sm">

Accountability • Stability

</p>

</div>

</div>

</div>

</div>


{/* RIGHT CONTENT */}

<div
className="order-1 lg:order-2"
data-aos="fade-left"
>

<span className="uppercase tracking-[4px] lg:tracking-[6px] text-primary text-sm">

Structured Living

</span>

<h2
className="
font-heading
text-primary
leading-[1.1]
mt-5
mb-8

text-4xl
md:text-5xl
lg:text-6xl
"
>

Creating Stability
<br/>

Through Structure

</h2>

<p className="text-gray-500 leading-8 mb-10">

The Nest creates a supportive and structured
living environment where residents can build
healthy routines, focus on personal growth,
and move toward long-term recovery goals.

</p>

{/* Feature Cards */}

<div className="space-y-5 mb-10">

{points.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*100}
className="
bg-white
rounded-[25px]
p-5
shadow-md
hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300
flex
items-center
gap-4
"
>

<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">

<CheckCircle size={18}/>

</div>

<p className="text-gray-600">

{item}

</p>

</div>

))}

</div>




</div>

</div>

</div>

</section>

)

}

export default StructuredLiving;