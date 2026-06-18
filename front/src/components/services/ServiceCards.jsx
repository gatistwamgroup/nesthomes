import React from "react";
import {
Home,
Users,
ShieldCheck,
MapPin
} from "lucide-react";

const ServiceCards=()=>{

const services=[

{
icon:<Home/>,
title:"Structured Housing",
desc:"Safe and comfortable recovery housing."
},

{
icon:<Users/>,
title:"Community Support",
desc:"Positive and family-like environment."
},

{
icon:<ShieldCheck/>,
title:"Accountability",
desc:"Focused on responsibility and stability."
},

{
icon:<MapPin/>,
title:"Nearby Opportunities",
desc:"Transportation and employment access."
}

]

return(

<section className="py-28 px-6 bg-[#F8F6F2]">

<div className="max-w-7xl mx-auto">

<div
className="text-center mb-16"
data-aos="fade-up"
>

<h2 className="font-heading text-5xl">

What We Offer

</h2>

</div>

<div className="grid lg:grid-cols-4 gap-8">

{services.map((item,index)=>(

<div
key={index}
data-aos="zoom-in"
data-aos-delay={index*150}
className="bg-white rounded-[35px] p-8 shadow-xl hover:-translate-y-3 transition"
>

<div className="mb-6">

{item.icon}

</div>

<h3 className="text-xl mb-4">

{item.title}

</h3>

<p className="text-gray-500">

{item.desc}

</p>

</div>

))}

</div>

</div>

</section>

)

}

export default ServiceCards