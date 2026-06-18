import React,{
 useState,
 useEffect
} from "react";

import API
from "../../api/publicApi";
import { ArrowRight } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Loader from "../common/Loader";



const GalleryTabs = () => {

const [active,setActive]=useState("All");

const [gallery,setGallery] =
useState([]);

const [loading,setLoading] =
useState(true);

const fetchGallery =
async()=>{

 try{

  const response =
  await API.get(
   "/gallery"
  );

  console.log(response.data);
console.log(gallery);

  setGallery(
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



const tabs=[
"All",
"Bedrooms",
"Living Areas",
"Community Spaces",
"Outdoor Areas"
];

const filteredData =
active === "All"
? gallery
: gallery.filter(
 item =>
 item.category === active
);


if(loading){

 return(

 <section className="py-10">

 <Loader text="Loading Gallery..." />

 </section>

 );

}

return(


<section className="
py-16
sm:py-20
lg:py-24
px-4
sm:px-6
bg-white
">

<div className="max-w-7xl mx-auto">

{/* Tabs */}

<div className="
flex
justify-center
flex-wrap
gap-2
sm:gap-3
lg:gap-4
mb-10
sm:mb-14
">

{tabs.map((tab,index)=>(

<button
key={index}
onClick={()=>setActive(tab)}
className={`
px-4
sm:px-6
lg:px-7

py-2.5
sm:py-3
lg:py-4

text-sm
sm:text-base

rounded-full
transition-all
duration-300

${
active===tab
?
"bg-primary text-white shadow-lg"
:
"bg-[#F8F6F2] hover:bg-primary hover:text-white"
}
`}
>

{tab}

</button>

))}

</div>

<PhotoProvider>

<div className="
grid
grid-cols-1
sm:grid-cols-2
xl:grid-cols-3
gap-5
sm:gap-6
lg:gap-8
">
{
filteredData.length === 0 && (

<div className="col-span-full text-center py-20">

<h3 className="text-2xl font-semibold text-primary">

No Images Found

</h3>

<p className="text-gray-500 mt-3">

No gallery images available in this category.

</p>

</div>

)
}
{filteredData.map((item,index)=>(

<div
key={item._id}
data-aos="zoom-in"
data-aos-delay={index*100}
className="
group
rounded-[22px]
sm:rounded-[28px]
lg:rounded-[35px]
overflow-hidden
shadow-xl
hover:shadow-2xl
transition-all
duration-500
"
>

<PhotoView src={item.imageUrl}>

<div className="relative cursor-pointer">

<img
src={item.imageUrl}
alt={item.title || "Gallery image"}
loading="lazy"
className="
w-full

h-[260px]
sm:h-[300px]
lg:h-[340px]

object-cover

group-hover:scale-110

transition
duration-700
"
/>

{/* overlay */}

<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/>

<div
className="
pointer-events-none
absolute
bottom-0
left-0

p-4
sm:p-5
lg:p-6

text-white
"
>

<p className="
text-xs
sm:text-sm
text-white/70
">

{item.category}

</p>

<h3
className="
font-heading

text-lg
sm:text-xl
lg:text-2xl

mt-2
"
>

{item.title}

</h3>

<div
className="
flex
items-center
gap-2

mt-3
sm:mt-4

text-sm
sm:text-base
"
>

View Image

<ArrowRight size={16}/>

</div>

</div>

</div>

</PhotoView>

</div>

))}

</div>

</PhotoProvider>

</div>

</section>

)

}

export default GalleryTabs