import React from "react";
import {
CheckCircle,
ArrowRight,
ShieldCheck
} from "lucide-react";

import { Link } from "react-router-dom";

const ResidentExpectations = () => {

const expectations=[

"Actively participate in recovery",

"Attend meetings consistently",

"Build healthy daily routines",

"Stay productive and goal focused",

"Create a respectful environment",

"Support a positive community"

]

return(

<section className="
py-20
md:py-24
lg:py-32
px-4
sm:px-6
bg-[#F8F6F2]
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

<div data-aos="fade-right">

<span className="uppercase tracking-[5px] text-primary text-sm">

Resident Expectations

</span>

<h2 className="
font-heading
text-primary
text-4xl
sm:text-5xl
lg:text-6xl
mt-4
sm:mt-5
mb-6
sm:mb-8
leading-[1.1]
">

Recovery Starts
<br/>

With Commitment
And Action

</h2>

<p className="
text-gray-500
leading-7
sm:leading-9
mb-8
sm:mb-10
">

The Nest creates an environment where
residents can focus on growth, accountability
and creating healthy routines that support
long-term stability.

</p>

{/* Checklist Cards */}

<div className="grid gap-5">

{expectations.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*100}
className="
bg-white
p-4
sm:p-5
rounded-[20px]
sm:rounded-[25px]
flex
items-center
gap-3
sm:gap-4
shadow-md
hover:shadow-xl
hover:-translate-y-1
transition
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

<div className="
flex
flex-col
sm:flex-row
gap-4
sm:gap-5
mt-8
sm:mt-10
">

<Link
to="/contact"
className="
bg-primary
text-white
px-8
py-4
rounded-full
hover:scale-105
transition
w-full
sm:w-auto
text-center
"
>

Apply Today

</Link>

<Link
to="/expectations"
className="
border
border-primary
text-primary
px-8
py-4
rounded-full
flex
items-center
justify-center
gap-3
hover:bg-primary
hover:text-white
transition
w-full
sm:w-auto
"
>

Learn More

<ArrowRight size={18}/>

</Link>

</div>

</div>

{/* RIGHT */}

<div
className="relative"
data-aos="fade-left"
>

<img
src="/images/home/expectation-main.png"
alt=""
className="
w-full
h-[400px]
sm:h-[500px]
lg:h-[650px]
rounded-[25px]
sm:rounded-[40px]
object-cover
shadow-2xl
"
/>

{/* Floating Trust Card */}

<div className="
absolute
top-4
left-4
sm:top-8
sm:-left-6
lg:-left-10
bg-white
rounded-[20px]
sm:rounded-[30px]
px-4
sm:px-6
py-4
sm:py-5
shadow-2xl
max-w-[220px]
">

<div className="flex items-center gap-3">

<div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">

<ShieldCheck/>

</div>

<div>

<h4 className="
text-primary
font-bold
text-sm
sm:text-base
">

Positive Living

</h4>

<p className="text-gray-500 text-sm">

Respect • Accountability

</p>

</div>

</div>

</div>

{/* Bottom Card */}

<div className="
absolute
bottom-4
right-4
sm:bottom-8
sm:right-8
bg-white
rounded-[20px]
sm:rounded-[30px]
p-4
sm:p-5
shadow-2xl
">

<h3 className="
text-primary
text-lg
sm:text-xl
lg:text-2xl
font-bold
">

Focused Growth

</h3>

<p className="text-gray-500">

Community • Stability

</p>

</div>

</div>

</div>

</div>

</section>

)

}

export default ResidentExpectations