import React from "react";

const LocationMap=()=>{

return(

<section className="py-28 px-6 bg-white">

<div
className="max-w-7xl mx-auto"
data-aos="zoom-in"
>

<h2 className="font-heading text-5xl text-center mb-14 text-primary">

Find Us

</h2>

<div className="rounded-[40px] overflow-hidden shadow-xl">

<iframe
title="map"
src="https://maps.google.com/maps?q=New Jersey&t=&z=10&ie=UTF8&iwloc=&output=embed"
className="w-full h-[550px]"
></iframe>

</div>

</div>

</section>

)

}

export default LocationMap