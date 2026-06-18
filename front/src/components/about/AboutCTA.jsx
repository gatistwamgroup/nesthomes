import React from "react";
import { Link } from "react-router-dom";
import {
Phone,
ArrowRight,
ShieldCheck,
Users
} from "lucide-react";

const AboutCTA = () => {

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

{/* Background */}

<img
src="/images/about/about-cta.png"
alt=""
className="absolute inset-0 w-full h-full object-cover scale-105"
/>

{/* Overlay */}

<div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/75"></div>

<div className="relative z-10 max-w-6xl mx-auto">

<div
className="
bg-white/[0.08]
backdrop-blur-md
border
border-white/10
rounded-[25px]
sm:rounded-[30px]
lg:rounded-[40px]
p-6
sm:p-8
lg:p-16
text-center
"
data-aos="zoom-in"
>

{/* Top Badge */}

<div className="
inline-flex
items-center
gap-2
px-4
sm:px-5
py-2
sm:py-3
rounded-full
bg-white/10
text-white
border
border-white/10
mb-6
sm:mb-8
text-xs
sm:text-sm
">

<ShieldCheck size={18}/>

Begin Your Journey Today

</div>

{/* Heading */}

<h2
className="
font-heading
text-white
leading-[1.1]
mb-6
sm:mb-8

text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
xl:text-7xl
"
>

Recovery Starts
<br/>

With The Right Environment

</h2>

{/* Description */}

<p
className="
text-white/80
leading-7
sm:leading-8
max-w-3xl
mx-auto
mb-8
sm:mb-10

text-sm
sm:text-base
md:text-lg
px-2
"
>

Take the first step toward a safe,
supportive and structured environment
focused on accountability, growth and
long-term stability.

</p>

{/* Trust points */}

<div
className="
flex
flex-wrap
justify-center
gap-3
sm:gap-4
mb-8
sm:mb-12
"
>

<div className="
bg-white/10
px-4
sm:px-5
py-2
sm:py-3
rounded-full
text-white
text-sm
sm:text-base
">

✓ Safe Housing

</div>

<div className="
bg-white/10
px-4
sm:px-5
py-2
sm:py-3
rounded-full
text-white
text-sm
sm:text-base
">

✓ Community Support

</div>

<div className="
bg-white/10
px-4
sm:px-5
py-2
sm:py-3
rounded-full
text-white
text-sm
sm:text-base
">

✓ Recovery Focused

</div>

</div>

{/* Buttons */}

<div
className="
flex
flex-col
sm:flex-row
justify-center
gap-4
sm:gap-5
w-full
"
>

<a
href="tel:6093004158"
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
hover:shadow-2xl
transition-all
duration-300
w-full
sm:w-auto
"
>

<Phone size={18}/>

Call Now

</a>

<Link
to="/contact"
className="
border
border-white
bg-white/10
backdrop-blur-md
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
hover:bg-white
hover:text-primary
transition-all
duration-300
w-full
sm:w-auto
"
>

Apply Today

<ArrowRight size={18}/>

</Link>

</div>

</div>

</div>

</section>

)

}

export default AboutCTA