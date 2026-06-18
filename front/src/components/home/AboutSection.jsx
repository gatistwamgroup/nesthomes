import React from "react";
import { ArrowRight, ShieldCheck, Users, Home } from "lucide-react";
import { Link } from "react-router-dom";

const AboutNest = () => {

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
py-20
sm:py-24
lg:py-32
px-5
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

<div
className="relative"
data-aos="fade-right"
>

{/* Main Image */}

<img
src="/images/home/about1.png"
alt="The Nest Recovery Home Exterior"
className="
w-full
h-[420px]
sm:h-[520px]
lg:h-[650px]
rounded-[25px]
sm:rounded-[40px]
object-cover
shadow-2xl
"
/>

{/* Small Floating Image */}

<img
src="/images/home/about2.png"
alt="Community support area"
className="
absolute
-bottom-8
-right-8
w-[220px]
h-[170px]
lg:w-[280px]
lg:h-[220px]
rounded-[25px]
object-cover
border-[6px]
lg:border-[8px]
border-[#F8F6F2]
shadow-2xl
hidden
lg:block
"
/>

{/* Trust Card */}

<div className="
absolute
top-4
left-4
sm:top-6
sm:left-6
lg:top-10
lg:-left-8
bg-white
rounded-[20px]
sm:rounded-[30px]
px-4
sm:px-6
py-3
sm:py-5
shadow-2xl
">

<h4 className="
text-primary
text-2xl
sm:text-3xl
lg:text-4xl
font-bold
">

100%

</h4>

<p className="text-gray-500 text-sm">

Recovery Focused
Environment

</p>

</div>

</div>

{/* RIGHT */}

<div data-aos="fade-left">

<span className="
uppercase
tracking-[3px]
sm:tracking-[5px]
text-primary
text-xs
sm:text-sm
">

About The Nest

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

More Than A House.
<br/>

A Place To Rebuild
Your Future.

</h2>

<p className="
text-gray-500
text-base
sm:text-lg
leading-7
sm:leading-9
mb-6
sm:mb-8
">

The Nest Recovery Homes provides a safe,
structured and supportive living environment
built around accountability, community and stability.

</p>

<p className="
text-gray-500
text-base
sm:text-lg
leading-7
sm:leading-9
mb-8
sm:mb-10
">

Our goal is to create a family-like atmosphere
where residents can focus on personal growth,
build confidence and move toward long-term recovery.

</p>

{/* Features */}

<div className="
flex
flex-wrap
gap-3
sm:gap-4
mb-8
sm:mb-10
">

{features.map((item,index)=>(

<div
key={index}
className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md"
>

<div className="text-primary">

{item.icon}

</div>

<span className="text-gray-600">

{item.text}

</span>

</div>

))}

</div>

<Link
to="/about"
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
hover:shadow-xl
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

</div>

</section>

)

}

export default AboutNest