import React from "react";
import {Link} from "react-router-dom";

const ServiceCTA=()=>{

return(

<section className="py-28 px-6 bg-primary">

<div
className="max-w-5xl mx-auto text-center"
data-aos="zoom-in"
>

<h2 className="font-heading text-5xl text-white mb-8">

Ready To Take
The Next Step?

</h2>

<Link
to="/contact"
className="bg-white px-8 py-5 rounded-full inline-block"
>

Apply Today

</Link>

</div>

</section>

)

}

export default ServiceCTA