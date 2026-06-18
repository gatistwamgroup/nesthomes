import React, { useEffect, useState } from "react";
import { ArrowRight, Phone, ShieldCheck } from "lucide-react";


const slides = [

{
image:"/images/home/hero1.png",

title:"Recovery Begins In A Place That Feels Like Home",

description:
"Safe and structured sober living designed around accountability, community support and long-term stability.",

tag:"Structured Sober Living"

},

{
image:"/images/home/hero2.png",

title:"A Supportive Environment For Your Next Chapter",

description:
"Move forward in a positive environment where encouragement, stability and recovery-focused living come together.",

tag:"Community & Accountability"

},

{
image:"/images/home/hero3.png",

title:"Recovery Takes Flight At The Nest",

description:
"Find a safe space to rebuild confidence, create healthy routines and focus on personal growth.",

tag:"Safe Recovery Housing"

}

];
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="
relative
min-h-[100svh]
overflow-hidden
">

      {/* Background Images */}

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms]
          ${
            currentSlide === index
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/65"></div>
        </div>
      ))}

      {/* Content */}

      <div className="relative z-10 min-h-screen flex items-center pt-32 pb-16">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

           <div
key={currentSlide}
className="animate-fade transition-opacity duration-700"
>

<div className="
inline-flex
items-center
gap-2
px-4
sm:px-5
py-2.5
sm:py-3
rounded-full
bg-primary/30
backdrop-blur-md
text-white
border
border-white/20
mb-6
sm:mb-8
text-xs
sm:text-sm
">

<ShieldCheck size={18}/>

{slides[currentSlide].tag}

</div>

<div className="relative">

<h1
className="
font-heading
text-white
text-4xl
sm:text-5xl
lg:text-6xl
xl:text-7xl
leading-[1.1]
mb-6
sm:mb-8
max-w-[700px]

min-h-[120px]
sm:min-h-[150px]
lg:min-h-[220px]

flex
items-center
"
>

{slides[currentSlide].title}

</h1>

<p className="
text-white/80
text-base
sm:text-lg
leading-7
sm:leading-9
max-w-xl
mb-8
sm:mb-10
">

{slides[currentSlide].description}

</p>

</div>

<div className="
flex
flex-wrap
gap-4
sm:gap-8
mb-8
sm:mb-10
text-white
text-sm
sm:text-base
">

<div>✓ Accountability</div>

<div>✓ Community Support</div>

<div>✓ MAT Supported</div>

</div>

<div className="
flex
flex-col
sm:flex-row
gap-4
sm:gap-5
w-full
sm:w-auto
">

<a
href="tel:6093004158"
className="
bg-primary
px-6
sm:px-8
py-4
sm:py-5
rounded-full
text-white
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

<Phone size={18}/>

Call Now

</a>

<button className="
border
border-white
bg-white/10
backdrop-blur-md
px-6
sm:px-8
py-4
sm:py-5
rounded-full
text-white
flex
items-center
justify-center
gap-3
hover:bg-white
hover:text-primary
transition
w-full
sm:w-auto
">

Apply Today

<ArrowRight size={18}/>

</button>

</div>

</div>

            {/* RIGHT FORM */}

            <div className="
flex
justify-center
lg:justify-end
mt-10
lg:mt-0
">

             <div className="
bg-white/95
backdrop-blur-md
rounded-[25px]
sm:rounded-[35px]
p-6
sm:p-8
shadow-2xl
max-w-md
w-full
border
border-white/20
">

<div className="mb-6">

<span className="text-primary uppercase tracking-[4px] text-sm">

Start Today

</span>

<h2 className="
font-heading
text-3xl
sm:text-4xl
text-primary
mt-3
">

Apply For Housing

</h2>

</div>

<p className="text-gray-500 mb-8 leading-7">

Take your first step toward a supportive
recovery environment.

</p>

<form className="space-y-5">

<input
type="text"
placeholder="Full Name"
className="w-full bg-[#F8F6F2] rounded-xl p-4 outline-none"
/>

<input
type="email"
placeholder="Email Address"
className="w-full bg-[#F8F6F2] rounded-xl p-4 outline-none"
/>

<input
type="tel"
placeholder="Phone Number"
className="w-full bg-[#F8F6F2] rounded-xl p-4 outline-none"
/>

<button className="w-full bg-primary text-white py-4 rounded-xl hover:opacity-90 transition">

Submit Request

</button>

</form>

</div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;