import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ResidentExpectations = () => {

const expectations=[

"Work an honest recovery program",

"Attend meetings regularly",

"Have a sponsor and/or recovery coach",

"Maintain productivity and responsibility",

"Contribute positively to the home environment",

"Respect community guidelines"

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

<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-10
md:gap-14
lg:gap-20
items-center
">

{/* LEFT IMAGE */}

<div
className="relative"
data-aos="fade-right"
>

<img
src="/images/expectations/expect-banner.png"
alt=""
className="
w-full
h-[320px]
sm:h-[450px]
md:h-[550px]
lg:h-[650px]
rounded-[25px]
sm:rounded-[30px]
lg:rounded-[40px]
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
lg:bottom-8
lg:left-8
bg-white
rounded-[20px]
sm:rounded-[25px]
lg:rounded-[30px]
p-4
sm:p-5
lg:p-6
shadow-xl
max-w-[85%]
">

<h3 className="
text-primary
text-lg
sm:text-xl
lg:text-2xl
font-bold
">

Positive Living

</h3>

<p className="text-gray-500 mt-2">

Respect • Growth • Accountability

</p>

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
leading-tight
">

Recovery Starts
<br/>
With Commitment

</h2>

<p className="
text-gray-500
text-base
sm:text-lg
leading-7
sm:leading-9
mb-8
sm:mb-10
">

The Nest creates a supportive environment
while encouraging residents to actively
participate in maintaining a positive and
recovery-focused community.

</p>

<div className="space-y-5 mb-10">

{expectations.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*100}
className="
bg-white
rounded-[18px]
sm:rounded-[25px]
p-4
sm:p-5
flex
gap-3
sm:gap-4
shadow-md
hover:shadow-xl
transition
"
>

<div className="text-primary">

<CheckCircle size={22}/>

</div>

<p className="
text-gray-600
text-sm
sm:text-base
leading-6
">

{item}

</p>

</div>

))}

</div>

<Link
to="/contact"
className="
inline-flex
items-center
justify-center
gap-3
bg-primary
text-white
px-6
sm:px-8
py-4
sm:py-5
rounded-full
hover:scale-105
transition
w-full
sm:w-auto
"
>

Apply Today

<ArrowRight size={18}/>

</Link>

</div>

</div>

</div>

</section>

)

}

export default ResidentExpectations;