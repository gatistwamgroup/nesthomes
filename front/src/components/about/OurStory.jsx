import React from "react";
import { Link } from "react-router-dom";
import {
ArrowRight,
ShieldCheck,
Users,
HeartHandshake
} from "lucide-react";

const OurStory = () => {

const features=[

{
icon:<ShieldCheck size={16}/>,
text:"Recovery Focused"
},

{
icon:<Users size={16}/>,
text:"Community Support"
},

{
icon:<HeartHandshake size={16}/>,
text:"Positive Environment"
}

]

return(

<section className="
py-16
md:py-20
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
md:gap-16
lg:gap-24
items-center
">

{/* LEFT */}

<div
className="relative"
data-aos="fade-right"
>

<img
src="/images/about/story.png"
alt="Our Story"
className="
w-full
h-[320px]
sm:h-[450px]
md:h-[550px]
lg:h-[700px]
rounded-[25px]
sm:rounded-[35px]
object-cover
shadow-2xl
"
/>

{/* Floating Trust Card */}

<div
className="
absolute
bottom-4
left-4
sm:bottom-6
sm:left-6
lg:-left-10
bg-white
rounded-[20px]
sm:rounded-[30px]
px-4
sm:px-5
py-4
sm:py-5
shadow-2xl
max-w-[180px]
sm:max-w-[250px]
"
>

<h4 className="
text-primary
text-2xl
sm:text-3xl
font-bold
">

100%

</h4>

<p className="text-gray-500 text-sm leading-6">

Supportive Recovery Environment

</p>

</div>

</div>


{/* RIGHT */}

<div data-aos="fade-left">

<span className="
uppercase
tracking-[3px]
sm:tracking-[4px]
lg:tracking-[6px]
text-primary
text-xs
sm:text-sm
">

Our Story

</span>

<h2
className="
font-heading
text-primary
leading-[1.1]
mt-4
sm:mt-5
mb-6
sm:mb-8

text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
"
>

More Than Housing.
<br/>

A Place To Rebuild.

</h2>

<p className="
text-gray-500
text-base
leading-7
sm:leading-8
lg:leading-9
mb-6
sm:mb-8
">

The Nest Recovery Homes was created to
provide individuals with a safe and supportive
environment where recovery and personal
growth can thrive.

</p>

<p className="text-gray-500 leading-8 lg:leading-9 mb-10">

Our mission is to create a family-like
atmosphere where residents can build
confidence, accountability and long-term
stability.

</p>

{/* Feature Pills */}

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
className="
bg-[#F8F6F2]
px-4
sm:px-5
py-2.5
sm:py-3
rounded-full
flex
items-center
gap-2
shadow-sm
hover:shadow-md
transition
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

<Link
to="/contact"
className="
inline-flex
items-center
justify-center
gap-3
bg-primary
px-6
sm:px-8
py-4
sm:py-5
rounded-full
text-white
hover:scale-105
hover:shadow-xl
transition-all
duration-300
w-full
sm:w-auto
"
>

Contact Us

<ArrowRight size={18}/>

</Link>

</div>

</div>

</div>

</section>

)

}

export default OurStory