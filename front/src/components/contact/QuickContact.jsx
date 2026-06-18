import React from "react";
import {
Phone,
Mail,
MapPin
} from "lucide-react";

const QuickContact=()=>{

const items=[

{
icon:<Phone/>,
title:"Call Us",
value:"+1 (000) 000-0000"
},

{
icon:<Mail/>,
title:"Email Us",
value:"info@thenest.com"
},

{
icon:<MapPin/>,
title:"Visit Us",
value:"New Jersey, USA"
}

]

return(

<section className="
py-16
sm:py-20
lg:py-28
px-4
sm:px-6
bg-[#F8F6F2]
">

<div className="
max-w-7xl
mx-auto
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-5
sm:gap-6
lg:gap-8
">

{items.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*100}
className="
bg-white
rounded-[25px]
sm:rounded-[35px]
p-6
sm:p-8
lg:p-10
text-center
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-500
"
>

<div className="
w-14
h-14
sm:w-16
sm:h-16
rounded-full
bg-primary/10
flex
items-center
justify-center
text-primary
mx-auto
mb-5
">

{item.icon}

</div>

<h3 className="
text-primary
text-lg
sm:text-xl
font-semibold
mb-2
sm:mb-3
">

{item.title}

</h3>

<p className="
text-gray-500
text-sm
sm:text-base
leading-7
break-words
">

{item.value}

</p>

</div>

))}

</div>

</section>

)

}

export default QuickContact