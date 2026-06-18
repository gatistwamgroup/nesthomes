import React from "react";

const CommonHero = ({
image,
subtitle,
title,
description
}) => {

return(

<section className="relative min-h-[60vh] lg:h-[70vh] flex items-center overflow-hidden">

{/* Background */}

<img
src={image}
alt={title}
className="absolute inset-0 w-full h-full object-cover"
/>

{/* Overlay */}

<div className="absolute inset-0 bg-black/60"></div>

{/* Content */}

<div className="relative z-10 w-full">

<div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-center">

<div className="max-w-3xl">

<span
className="
uppercase
tracking-[4px]
md:tracking-[6px]
text-sm
md:text-base
text-white/90
"
>

{subtitle}

</span>

<h1
className="
font-heading
text-white
leading-[1.1]
mt-5
mb-6

text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl
"
>

{title}

</h1>

<p
className="
text-white/80
leading-8
max-w-2xl

text-base
md:text-lg
"
>

{description}

</p>

</div>

</div>

</div>

</section>

)

}

export default CommonHero;