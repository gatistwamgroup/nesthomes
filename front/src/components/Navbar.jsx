import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Phone, Menu, X, ArrowRight } from "lucide-react";

const Navbar = () => {

const [open,setOpen]=useState(false);
const [scrolled,setScrolled]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setScrolled(window.scrollY>80)

}

window.addEventListener(
"scroll",
handleScroll
)

return()=>window.removeEventListener(
"scroll",
handleScroll
)

},[])

const navItems=[

{
name:"Home",
path:"/"
},

{
name:"About",
path:"/about"
},

{
name:"Services",
path:"/services"
},

{
name:"Expectations",
path:"/expectations"
},

{
name:"Gallery",
path:"/gallery"
},

{
name:"FAQ",
path:"/faq"
},

{
name:"Contact",
path:"/contact"
}

]

return(

<header
className={`fixed top-0 left-0 w-full z-50 transition-all duration-500

${
scrolled
?
"bg-white/80 backdrop-blur-xl shadow-lg py-3 sm:py-4"
:
"bg-transparent py-4 sm:py-6"
}

`}
>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex items-center justify-between">


{/* LOGO */}

<Link to="/" className="relative">

<div
className={`
transition-all duration-700 ease-in-out

${
!scrolled
?
"bg-white/90 backdrop-blur-md px-3 py-2 rounded-r-[50px] rounded-l-[20px] shadow-xl scale-100 opacity-100"
:
"bg-white/30 backdrop-blur-sm px-3 py-2 rounded-r-[30px] rounded-l-[15px] shadow-md scale-95 opacity-95"
}

`}
>

<img
src="/logo-old.png"
alt="logo"
className={`
transition-all duration-700 ease-in-out

${
!scrolled
?
"w-[140px]"
:
"w-[140px]"
}

`}
/>

</div>

</Link>

{/* Desktop */}

<div className="
hidden min-[1250px]:flex
items-center
gap-8
2xl:gap-10
">

<nav className="flex gap-8">

{navItems.map((item,index)=>(

<NavLink

key={index}

to={item.path}

className={({isActive})=>

`font-medium transition

${
isActive
?
"text-primary"
:
scrolled
?
"text-gray-700"
:
"text-white"
}

hover:text-primary
`
}

>

{item.name}

</NavLink>

))}

</nav>

{/* CTA */}

{/* CTA */}

<div className="flex items-center gap-4">

<a
href="tel:6093004158"
className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300

${
scrolled
?
"border-primary text-primary hover:bg-primary hover:text-white"
:
"border-white text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-primary"
}

`}
>

<Phone size={18}/>

<span className="font-medium">

(609)300-4158

</span>

</a>

<Link
to="/contact"
className="bg-primary text-white px-8 py-3 rounded-full flex items-center gap-3 hover:scale-105 hover:shadow-xl transition-all duration-300"

>

Apply Today

<ArrowRight size={18}/>

</Link>

</div>

</div>

{/* Mobile Button */}

<button
onClick={()=>setOpen(!open)}
className={`
min-[1250px]:hidden

${
scrolled
?
"text-primary"
:
"text-white"
}
`}
>

{
open
?
<X size={28}/>
:
<Menu size={28}/>
}

</button>

</div>

</div>

{/* Mobile Menu */}

<div
className={`
fixed top-0 right-0 h-screen w-[320px]
bg-white shadow-2xl
transition-all duration-500 z-50

${open
?
"translate-x-0"
:
"translate-x-full"
}
`}
>

<div className="p-8">

<div className="flex justify-between items-center mb-10">

<img
src="/logo.png"
className="w-32"
/>

<button
onClick={()=>setOpen(false)}
>

<X/>

</button>

</div>

<div className="flex flex-col gap-6">

{navItems.map((item,index)=>(

<NavLink

key={index}

to={item.path}

onClick={()=>setOpen(false)}

className={({isActive})=>

`text-lg

${
isActive
?
"text-primary font-semibold"
:
"text-gray-600"
}
`
}

>

{item.name}

</NavLink>

))}

<a
href="tel:6093004158"
className="mt-6 bg-[#F8F6F2] p-4 rounded-full flex items-center justify-center gap-2 text-primary"
>

<Phone size={18}/>

Call Now

</a>

<Link
to="/contact"
className="bg-primary text-white py-4 rounded-full text-center"
>

Apply Today

</Link>

</div>

</div>

</div>

</header>

)

}

export default Navbar