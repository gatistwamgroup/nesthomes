import React from "react";
import {
ShieldCheck,
CheckCircle,
ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";

const MATSupport = () => {

const points=[

"Supportive and stable environment",

"Recovery-focused accountability",

"Respect and community support",

"Long-term growth mindset"

]

return(

<section
className="
py-16
sm:py-20
lg:py-32

px-5
sm:px-6

bg-[#F8F6F2]
overflow-hidden
"
>

<div className="max-w-7xl mx-auto">

<div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-10
md:gap-14
lg:gap-20
items-center
"
>

{/* LEFT IMAGE */}

<div
className="relative"
data-aos="fade-right"
>

<img
src="/images/services/mat-support.png"
alt=""
className="
w-full
h-[300px]
sm:h-[400px]
md:h-[500px]
lg:h-[650px]
rounded-[25px]
sm:rounded-[35px]
lg:rounded-[40px]
object-cover
shadow-2xl
"
/>

{/* Floating Card */}

<div className="absolute bottom-6 right-6 bg-white rounded-[25px] px-6 py-5 shadow-2xl">

<div className="flex items-center gap-4">

<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">

<ShieldCheck size={22}/>

</div>

<div>

<h4 className="text-primary font-bold">

Support & Stability

</h4>

<p className="text-gray-500 text-sm">

Recovery • Community

</p>

</div>

</div>

</div>

</div>

{/* RIGHT CONTENT */}

<div data-aos="fade-left">

<span className="
uppercase
tracking-[3px]
sm:tracking-[5px]
text-primary
text-xs
sm:text-sm
">

MAT Supported Environment

</span>

<h2
className="
font-heading
text-primary
mt-4
sm:mt-5
mb-6
sm:mb-8
leading-[1.1]

text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
"
>

Supportive Care
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
sm:mb-10
">

The Nest provides a supportive and stable
living environment for residents participating
in Medication Assisted Treatment while maintaining
a positive recovery-focused atmosphere.

</p>

{/* Feature List */}

<div className="space-y-5 mb-10">

{points.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*100}
className="
bg-white
rounded-[16px]
sm:rounded-[20px]
p-4
sm:p-5
flex
items-start
sm:items-center
gap-3
sm:gap-4
shadow-md
hover:shadow-xl
transition
"
>

<div className="text-primary">

<CheckCircle size={20}/>

</div>

<p
className="
text-gray-600
text-sm
sm:text-base
leading-6
"
>

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

export default MATSupport;