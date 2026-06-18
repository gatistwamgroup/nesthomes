import React,{
  useState,
  useEffect
} from "react";
import SEO from "../components/common/SEO";

import API from "../api/publicApi";
import Loader from "../components/common/Loader";

import CommonHero from "../components/CommonHero";

import { Quote } from "lucide-react";

import "../index.css";

const Testimonials = () => {

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
      response.data.testimonials.filter(
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

    return(

      <>
        <CommonHero

image="/images/gallery/gallery-banner.png"

subtitle="Gallery"

title={
<>
Explore
<br/>
The Nest
</>
}

description="
Take a look inside our spaces designed
for comfort, stability and recovery.
"

/>

        <Loader text="Loading Testimonials..." />

      </>

    );

  }

  return(

    <>
      <SEO 
        title="Success Stories | The Nest Recovery Homes" 
        description="Read inspiring stories of healing and growth from our community residents." 
        keywords="recovery success stories, sober living testimonials" 
      />

      <CommonHero

image="/src/assets/images/gallery/gallery-banner.png"

subtitle="Gallery"

title={
<>
Explore
<br/>
The Nest
</>
}

description="
Take a look inside our spaces designed
for comfort, stability and recovery.
"

/>

      {/* Testimonials */}

      <section className="py-28 px-6 bg-[#F8F6F2]">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[5px] text-primary text-sm">

              Success Stories

            </span>

            <h2 className="font-heading text-primary text-5xl mt-5 mb-6">

              Every Journey
              <br/>

              Matters

            </h2>

            <p className="max-w-3xl mx-auto text-gray-500 leading-8">

              Recovery looks different for everyone,
              but healing, growth and hope connect
              every story.

            </p>

          </div>

          {
          testimonials.length === 0 ? (

          <div className="text-center py-20">

            No Testimonials Found

          </div>

          ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {
            testimonials.map((item)=>(

            <div
            key={item._id}
            className="
            bg-white
            rounded-[35px]
            p-8
            shadow-lg
            hover:shadow-2xl
            hover:-translate-y-2
            transition
            duration-500
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

              <p className="text-gray-500 leading-8 mb-8">

                "{item.review}"

              </p>

              <div className="border-t pt-5 cust-flex">

                <div>
                   {
              item.imageUrl && (

              <img
              src={item.imageUrl}
              alt={item.name}
              loading="lazy"
              className="
              w-20 h-20
              rounded-full
              object-cover
             "
              />

              )
              }

                </div>
                <div>
                     <h3 className="font-semibold text-primary">

                  {item.name}

                </h3>

                <p className="text-sm text-gray-400 mt-1">

                  Recovery Journey

                </p>
                </div>

               

              </div>

            </div>

            ))
            }

          </div>

          )
          }

        </div>

      </section>

    </>

  );

};

export default Testimonials;