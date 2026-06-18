import React, { useState } from "react";
import {
Plus,
ArrowRight,
ShieldCheck
} from "lucide-react";

import { Link } from "react-router-dom";

const FAQAccordion = () => {

const [open,setOpen]=useState(0);

const faqs=[

{
question:"What is a recovery home?",
answer:"A recovery home provides a safe and structured living environment focused on accountability, stability and personal growth."
},

{
question:"Is MAT supported?",
answer:"Yes. The Nest supports residents participating in MAT programs while maintaining a supportive environment."
},

{
question:"How long can residents stay?",
answer:"Length of stay depends on personal goals, progress and individual needs."
},

{
question:"Are meetings required?",
answer:"Residents are encouraged to actively participate in recovery activities and maintain healthy routines."
},

{
question:"How do I apply?",
answer:"You can contact us directly by phone or submit an application through our contact form."
}

]

return(

<section className="
pt-16
sm:pt-20
lg:pt-28
pb-10
sm:pt-20
lg:pt-28
px-4
sm:px-6
bg-[#F8F6F2]
overflow-hidden
">

<div className="max-w-7xl mx-auto">

<div
className="
grid
grid-cols-1
lg:grid-cols-[0.9fr_1.2fr]

gap-10
md:gap-14
lg:gap-16

items-start
"
>

{/* LEFT */}

<div
data-aos="fade-right"
className="
lg:sticky
lg:top-32
"
>

{/* Heading */}

<div
className="text-left mb-10"
data-aos="fade-up"
>

<span
className="
uppercase
tracking-[6px]
text-primary
text-sm
"
>

Frequently Asked Questions

</span>

<h2
className="
font-heading
text-primary
leading-[1.1]

mb-6
sm:mb-8

text-3xl
sm:text-5xl
lg:text-6xl
"
>

Questions?
<br/>

We've Got Answers

</h2>

<p
className="
max-w-xl

text-gray-500

leading-7
sm:leading-8

text-base
md:text-lg
"
>

Find answers about housing, community expectations,
support and life at The Nest Recovery Homes.

</p>

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
transition
"
>

Contact Us

<ArrowRight size={18}/>

</Link>

</div>

{/* RIGHT */}

<div
className="
space-y-4
sm:space-y-6
"
data-aos="fade-left"
>

{faqs.map((faq,index)=>(

<div
key={index}
className={`

rounded-[20px]
sm:rounded-[30px]

overflow-hidden

shadow-lg

transition-all
duration-500

${
open===index
?
"bg-primary text-white"
:
"bg-white"
}
`}
>

<button
onClick={()=>
setOpen(
open===index
?
null
:
index
)
}

className="w-full px-6 md:px-8 py-6 flex justify-between items-center text-left"
>

<h3 className="
font-semibold

text-base
sm:text-lg
md:text-xl

pr-3
sm:pr-4

leading-7
">

{faq.question}

</h3>

<div
className={`
min-w-[38px]
w-[38px]
h-[38px]

sm:min-w-[45px]
sm:w-[45px]
sm:h-[45px]
rounded-full
flex
items-center
justify-center
transition-all

${
open===index
?
"bg-white text-primary rotate-45"
:
"bg-[#F8F6F2] text-primary"
}
`}
>

<Plus size={20}/>

</div>

</button>

<div
className={`overflow-hidden transition-all duration-700

${
open===index
?
"max-h-[300px]"
:
"max-h-0"
}
`}
>

<p className="
px-5
sm:px-8

pb-6
sm:pb-8

leading-7
sm:leading-8

text-sm
sm:text-base

opacity-90
">

{faq.answer}

</p>

</div>

</div>

))}

</div>

</div>

</div>

</section>

)

}

export default FAQAccordion;