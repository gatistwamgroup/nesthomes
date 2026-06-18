import React from "react";
import { Link } from "react-router-dom";
import {
ArrowRight,
ShieldCheck,
Home,
Users
} from "lucide-react";

const FeaturedGallery = () => {

const features=[

{
icon:<Home size={18}/>,
text:"Comfortable Spaces"
},

{
icon:<Users size={18}/>,
text:"Community Focused"
},

{
icon:<ShieldCheck size={18}/>,
text:"Recovery Environment"
}

]

return(

<section className="
py-16
sm:py-20
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
gap-10
md:gap-14
lg:gap-20
items-center
">

{/* LEFT IMAGE */}

<div
className="
relative
group
order-1
lg:order-1
"
data-aos="fade-right"
>

<div className="overflow-hidden rounded-[40px] shadow-2xl">

<img
src="/images/gallery/gallery1.png"
alt="Featured living space"
loading="lazy"
className="
w-full
h-[300px]
sm:h-[400px]
md:h-[500px]
lg:h-[650px]
object-cover
group-hover:scale-110
transition-all
duration-700
"
/>

</div>

{/* Floating Card */}

<div
className="
absolute
bottom-4
left-4
sm:bottom-6
sm:left-6
bg-white
rounded-[20px]
sm:rounded-[25px]
p-4
sm:p-5
shadow-2xl
max-w-[180px]
"
>

<h3 className="
text-primary
text-2xl
sm:text-3xl
font-bold
">

100%

</h3>

<p className="text-gray-500 text-sm">

Comfort & Support
Focused Living

</p>

</div>

</div>

{/* RIGHT CONTENT */}

<div
className="
order-2
lg:order-2
"
data-aos="fade-left"
>

<span
className="
uppercase
tracking-[3px]
sm:tracking-[4px]
md:tracking-[6px]
text-primary
text-xs
sm:text-sm
"
>

Featured Space

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

Designed To Feel
<br/>

Like Home

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

Every space at The Nest is thoughtfully
created to provide comfort, stability,
and a supportive environment where
residents can focus on growth.

</p>

{/* Feature badges */}

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
flex
items-center
gap-2
bg-white
px-4
sm:px-5
py-2.5
sm:py-3
rounded-full
shadow-md
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

w-full
sm:w-auto

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
"
>

Schedule A Visit

<ArrowRight size={18}/>

</Link>

</div>

</div>

</div>

</section>

)

}

export default FeaturedGallery