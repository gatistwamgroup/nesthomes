import React,{
 useState,
 useEffect
} from "react";

import API
from "../../api/publicApi";
import { Quote } from "lucide-react";
import { Link } from "react-router-dom";



const TestimonialsSection = () => {

  const [testimonials,setTestimonials] =
useState([]);

const [loading,setLoading] =
useState(true);

const fetchTestimonials =
async()=>{

 try{

  const response =
  await API.get(
   "/testimonials"
  );

  const published =
  response.data.testimonials
  .filter(
   item =>
   item.status ===
   "Published"
  );

  setTestimonials(
   published
  );

 }catch(error){

  console.log(error);

 }finally{

  setLoading(false);

 }
};
useEffect(()=>{

    fetchTestimonials();

  },[]);


  if(loading){

 return null;

}

  return (

    <section className="
py-20
sm:py-24
lg:py-28
px-4
sm:px-6
bg-[#F8F6F2]
overflow-hidden
">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="
text-center
mb-12
sm:mb-16
">

          <span className="uppercase tracking-[5px] text-primary text-sm">

            Success Stories

          </span>

          <h2 className="
font-heading
text-primary
text-3xl
sm:text-4xl
lg:text-5xl
mt-4
sm:mt-5
mb-5
sm:mb-6
leading-tight
">

            Real Stories.
            <br />
            Real Recovery.

          </h2>

          <p className="
max-w-3xl
mx-auto
text-gray-500
leading-7
sm:leading-8
text-sm
sm:text-base
px-2
">

            Every journey is unique, but hope, healing,
            and transformation connect them all.

          </p>

        </div>

        {/* Cards */}

        <div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-6
lg:gap-8
">

          {testimonials
            .slice(0,3)
            .map((item,index)=>(

            <div
              key={item._id}
              className="
bg-white
rounded-[25px]
sm:rounded-[35px]
p-6
sm:p-8
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition
duration-500
h-full
flex
flex-col
"
            >

              <div
                            className="
                            w-14 h-14
                            rounded-full
                            bg-primary/10
                            flex
                            items-center
                            justify-center
                            text-primary
                            mb-6
                            "
                            >
              
                              <Quote size={24}/>
              
                            </div>

              <p className="
text-gray-500
leading-7
sm:leading-8
mb-6
sm:mb-8
flex-1
text-sm
sm:text-base
">

                "{item.review}"

              </p>

             <div className="
border-t
pt-5
flex
items-center
gap-4 cust-flex
">

                <div>
                   {
              item.imageUrl && (

              <img
              src={item.imageUrl}
              alt={item.name}
              className="
                w-14
                h-14
                sm:w-20
                sm:h-20
                rounded-full
                object-cover
                border-2
                border-primary/10
                "
              />

              )
              }

                </div>
                <div>
                     <h3 className="
font-semibold
text-primary
text-sm
sm:text-base
">

                  {item.name}

                </h3>

                <p className="text-sm text-gray-400 mt-1">

                  Recovery Journey

                </p>
                </div>

               

              </div>

            </div>

          ))}

        </div>

        <div className="
flex
justify-center
mt-10
sm:mt-14
">

  <Link
    to="/testimonials"
    className="
bg-primary
text-white
px-6
sm:px-8
py-3
sm:py-4
rounded-full
hover:scale-105
transition
duration-300
text-sm
sm:text-base
"
  >

    View More Testimonials

  </Link>

</div>

      </div>

    </section>

  );

};

export default TestimonialsSection;