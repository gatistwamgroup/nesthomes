import React,{
 useState,
 useEffect
} from "react";
import API from "../../api/publicApi";
import { Link } from "react-router-dom";
import {
ArrowRight,
Phone,
X
} from "lucide-react";



const GallerySection=()=>{

const [selectedImage,setSelectedImage]=useState(null);

const [images,setImages] =
useState([]);



const [loading,setLoading] =
useState(true);

/* Backend Ready */

const fetchGallery =
async()=>{

 try{

  const response =
  await API.get(
   "/gallery"
  );

  console.log(response.data);

  setImages(
   response.data.images
   .slice(0,6)
  );

  console.log(
  "Gallery Data",
  response.data.images
);

 }catch(error){

  console.log(error);

 }finally{

  setLoading(false);

 }

};

useEffect(()=>{

 fetchGallery();

},[]);

if(loading){

 return null;

}

return(

<section className="
py-20
sm:py-24
lg:py-32
px-4
sm:px-6
bg-white
overflow-hidden
">

<div className="max-w-7xl mx-auto">

{/* Heading */}

<div
className="text-center mb-16"
data-aos="fade-up"
>

<span className="uppercase tracking-[5px] text-primary text-sm">

Recovery Home Gallery

</span>

<h2 className="
font-heading
text-primary
text-4xl
sm:text-5xl
lg:text-6xl
mt-5
mb-6
leading-tight
">

Designed To Feel
<br/>

Like Home

</h2>

<p className="
max-w-3xl
mx-auto
text-gray-500
leading-7
sm:leading-9
text-sm
sm:text-base
px-2
">

Explore spaces designed to create
comfort, support and long-term stability.

</p>

</div>


{/* Gallery */}

<div className="
columns-1
sm:columns-2
lg:columns-3
gap-4
sm:gap-6
space-y-4
sm:space-y-6
">



{images.map((item,index)=>(

<div
key={item._id}
data-aos="zoom-in"
data-aos-delay={index*100}
className="
relative
overflow-hidden
rounded-[20px]
sm:rounded-[35px]
group
cursor-pointer
break-inside-avoid
"
onClick={()=>setSelectedImage(item)}
>

<img
src={item.imageUrl}
alt=""
className="w-full object-cover transition duration-700 group-hover:scale-110"
/>

{/* Overlay */}

<div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500">

<div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition duration-500">

<h4 className="
text-white
text-lg
sm:text-xl
font-semibold
">

{item.title}

</h4>

</div>

</div>

</div>

))}

</div>


{/* CTA */}

<div
className="
flex
flex-col
sm:flex-row
justify-center
items-center
gap-4
sm:gap-6
mt-12
sm:mt-16
"
data-aos="fade-up"
>

<Link
to="/gallery"
className="
bg-primary
text-white
px-6
sm:px-8
py-4
sm:py-5
rounded-full
flex
items-center
justify-center
gap-3
hover:scale-105
transition
w-full
sm:w-auto
"
>

View Gallery

<ArrowRight size={18}/>

</Link>

<a
href="tel:6093004158"
className="
border
border-primary
text-primary
px-6
sm:px-8
py-4
sm:py-5
rounded-full
flex
items-center
justify-center
gap-3
hover:bg-primary
hover:text-white
transition
w-full
sm:w-auto
"
>

<Phone size={18}/>

Contact Us

</a>

</div>

</div>


{/* Lightbox */}

{
selectedImage && (

<div
className="
fixed
inset-0
bg-black/90
z-[999]
flex
justify-center
items-center
p-4
sm:p-6
"
onClick={()=>setSelectedImage(null)}
>

<button
className="
absolute
top-4
right-4
sm:top-10
sm:right-10
text-white
"
>

<X size={35}/>

</button>

<img
src={selectedImage.imageUrl}
alt=""
loading="lazy"
className="
max-w-full
sm:max-w-[95%]
max-h-[85vh]
sm:max-h-[90vh]
rounded-[15px]
sm:rounded-[25px]
"
/>

</div>

)
}

</section>

)

}

export default GallerySection