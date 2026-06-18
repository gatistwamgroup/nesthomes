import React from "react";
import { ArrowUpRight } from "lucide-react";

const RecoverySpaces = () => {

const images=[

{
img:"/images/gallery/gallery1.png",
title:"Comfortable Bedrooms"
},

{
img:"/images/gallery/gallery1.png",
title:"Living Spaces"
},

{
img:"/images/gallery/gallery1.png",
title:"Community Area"
},

{
img:"/images/gallery/gallery1.png",
title:"Outdoor Spaces"
},

{
img:"/images/gallery/gallery1.png",
title:"Relaxing Environment"
},

{
img:"/images/gallery/gallery1.png",
title:"Recovery Lifestyle"
}

]

return(

<section className="py-32 px-6 bg-white overflow-hidden">

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div
className="text-center mb-20"
data-aos="fade-up"
>

<span className="uppercase tracking-[5px] text-primary text-sm">

Recovery Spaces

</span>

<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mt-5 mb-6 text-primary leading-[1.1]">

Comfortable Spaces
<br/>

Designed For Recovery

</h2>

<p className="max-w-2xl mx-auto text-gray-500 leading-8">

Explore the spaces created to provide
comfort, stability and a positive environment.

</p>

</div>

{/* Gallery Grid */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

{/* Large Image */}

<div
className="lg:col-span-6 group"
data-aos="fade-right"
>

<div className="relative overflow-hidden rounded-[40px]">

<img
src={images[0].img}
alt=""
className="w-full h-[300px] md:h-[450px] lg:h-[620px] object-cover transition duration-700 group-hover:scale-110"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">

<div>

<h3 className="text-white text-xl font-semibold">

{images[0].title}

</h3>

</div>

<div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center">

<ArrowUpRight size={20}/>

</div>

</div>

</div>

</div>

{/* Right Side */}

<div className="lg:col-span-6 grid gap-6">

{images.slice(1,3).map((item,index)=>(

<div
key={index}
className="group"
data-aos="fade-left"
data-aos-delay={index*100}
>

<div className="relative overflow-hidden rounded-[35px]">

<img
src={item.img}
alt=""
className="w-full h-[220px] md:h-[260px] object-cover transition duration-700 group-hover:scale-110"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>

<div className="absolute bottom-5 left-5">

<h3 className="text-white font-semibold">

{item.title}

</h3>

</div>

</div>

</div>

))}

</div>

{/* Bottom Row */}

{images.slice(3).map((item,index)=>(

<div
key={index}
className="lg:col-span-4 group"
data-aos="zoom-in"
data-aos-delay={index*100}
>

<div className="relative overflow-hidden rounded-[35px]">

<img
src={item.img}
alt=""
className="w-full h-[250px] md:h-[300px] object-cover transition duration-700 group-hover:scale-110"
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>

<div className="absolute bottom-5 left-5">

<h3 className="text-white font-semibold">

{item.title}

</h3>

</div>

</div>

</div>

))}

</div>

</div>

</section>

)

}

export default RecoverySpaces