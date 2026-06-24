import React from "react";
import {
ShieldCheck,
Users,
MapPin,
Bus,
ArrowRight
} from "lucide-react";

import { Link } from "react-router-dom";

const ExpectSection = () => {

const data=[

{
icon:<ShieldCheck size={22}/>,
title:"Accountability",
text:"Structured sober living focused on responsibility and positive routines."
},

{
icon:<Users size={22}/>,
title:"Community Support",
text:"Family-like support with dignity, encouragement and respect."
},

{
icon:<MapPin size={22}/>,
title:"Nearby Opportunities",
text:"Convenient access to employment and transportation."
},

{
icon:<Bus size={22}/>,
title:"MAT Supported",
text:"Supportive environment for residents participating in MAT."
}

]

return(

<section className="
py-20
sm:py-24
lg:py-32
px-5
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
lg:gap-20
items-center
">

{/* LEFT */}

<div data-aos="fade-right">

<span className="uppercase tracking-[5px] text-primary text-sm">

What You Can Expect

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

Recovery Support
<br/>

Built Around
Stability

</h2>

<p className="
text-gray-500
leading-7
sm:leading-9
mb-8
sm:mb-10
max-w-xl
text-base
sm:text-lg
">

The Nest provides a structured and supportive
environment designed to help residents focus on
growth, accountability and long-term progress.

</p>

{/* Small Trust Strip */}

<div className="
flex
flex-wrap
gap-3
sm:gap-4
mb-8
sm:mb-10
">

<div className="
bg-[#F8F6F2]
px-4
sm:px-5
py-2
sm:py-3
rounded-full
text-sm
sm:text-base
">

✓ Structured Living

</div>

<div className="
bg-[#F8F6F2]
px-4
sm:px-5
py-2
sm:py-3
rounded-full
text-sm
sm:text-base
">

✓ Community Support

</div>

<div className="
bg-[#F8F6F2]
px-4
sm:px-5
py-2
sm:py-3
rounded-full
text-sm
sm:text-base
">

✓ Recovery Focused

</div>

</div>

<div className="
flex
flex-col
sm:flex-row
gap-4
sm:gap-5
">



<Link
to="/contact"
className="
border
border-primary
px-6
sm:px-8
py-4
sm:py-5
rounded-full
text-primary
hover:bg-primary
hover:text-white
transition
text-center
w-full
sm:w-auto
"
>

Contact Us

</Link>

</div>

</div>


{/* RIGHT CARDS */}

<div className="
grid
grid-cols-1
sm:grid-cols-2
gap-5
sm:gap-8
">

{data.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*100}
className={`bg-[#F8F6F2]
rounded-[25px]
sm:rounded-[35px]
p-6
sm:p-8
shadow-lg
hover:-translate-y-3
hover:shadow-2xl
transition-all
duration-500

${
index===1 || index===3
?
"lg:mt-10"
:
""
}
`}
>

<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-md mb-6">

{item.icon}

</div>

<h3 className="
text-primary
text-xl
sm:text-2xl
font-semibold
mb-3
sm:mb-4
">

{item.title}

</h3>

<p className="
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
">

{item.text}

</p>

</div>

))}

</div>

</div>

</div>

</section>

)

}

export default ExpectSection