import React from "react";
import { Link } from "react-router-dom";
import { Home, Users, ShieldCheck } from "lucide-react";

const RecoveryEnvironment = () => {

  const environmentData = [

    {
      icon:<Home size={22}/>,
      title:"Comfortable Living",
      text:"A safe and welcoming space designed to feel like home."
    },

    {
      icon:<Users size={22}/>,
      title:"Community Support",
      text:"Encouragement and accountability within a positive environment."
    },

    {
      icon:<ShieldCheck size={22}/>,
      title:"Structured Stability",
      text:"Daily structure focused on responsibility and personal growth."
    }

  ];

return(

<section className="
relative
py-16
sm:py-20
lg:py-36
px-4
sm:px-6
overflow-hidden
">

<div className="max-w-7xl mx-auto">

<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-12
lg:gap-20
items-center
">

{/* LEFT SIDE */}

<div
className="relative"
data-aos="fade-right"
>

<img
src="/images/about/environment.png"
alt=""
className="
w-full
h-[350px]
sm:h-[500px]
lg:h-[650px]
rounded-[25px]
sm:rounded-[40px]
object-cover
shadow-2xl
"
/>

{/* Floating Card */}

<div className="
absolute
bottom-4
left-4
sm:bottom-8
sm:left-8
bg-white
rounded-[20px]
sm:rounded-[30px]
p-4
sm:p-6
shadow-2xl
max-w-[260px]
">

<h3 className="
text-primary
text-lg
sm:text-2xl
font-bold
">

Safe & Supportive

</h3>

<p className="text-gray-500 mt-2">

Recovery • Stability • Community

</p>

</div>

</div>

{/* RIGHT SIDE */}

<div>

<div data-aos="fade-left">

<span className="
uppercase
tracking-[3px]
sm:tracking-[5px]
text-primary
text-xs
sm:text-sm
">

Recovery Environment

</span>

<h2 className="
font-heading
text-primary
text-3xl
sm:text-4xl
lg:text-5xl
mt-4
sm:mt-5
mb-6
sm:mb-8
leading-tight
">

Creating A Space
<br/>
For Healing & Growth

</h2>

<p className="
text-gray-500
leading-7
sm:leading-9
mb-8
sm:mb-12
text-sm
sm:text-base
">

The Nest Recovery Homes creates an environment
where residents can focus on rebuilding confidence,
maintaining accountability and moving toward
a healthier future.

</p>

</div>

<div className="space-y-6">

{environmentData.map((item,index)=>(

<div
key={index}
data-aos="fade-up"
data-aos-delay={index*150}
className="
bg-[#F8F6F2]
p-4
sm:p-6
rounded-[20px]
sm:rounded-[30px]
hover:shadow-xl
transition-all
duration-500
"
>

<div className="
flex
items-start
gap-4
sm:gap-5
">

<div className="
w-12
h-12
sm:w-14
sm:h-14
rounded-full
bg-sage/20
flex
items-center
justify-center
text-primary
flex-shrink-0
">

{item.icon}

</div>

<div>

<h3 className="
text-primary
font-semibold
text-base
sm:text-lg
mb-2
">

{item.title}

</h3>

<p className="
text-gray-500
leading-6
sm:leading-7
text-sm
sm:text-base
">

{item.text}

</p>

</div>

</div>

</div>

))}

</div>



</div>

</div>

</div>

</section>

)

}

export default RecoveryEnvironment;