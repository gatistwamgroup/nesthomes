import React, {
 useState
} from "react";
import API from "../../api/publicApi";
import toast from "react-hot-toast";

import {
Mail,
Phone,
MapPin,
Clock,
ArrowRight
} from "lucide-react";





const ContactFormSection = () => {

    const [formData,setFormData] =
useState({

 name:"",
 email:"",
 phone:"",
 message:""

});

const [loading,setLoading] =
useState(false);


const handleSubmit =
async(e)=>{

 e.preventDefault();

 try{

  setLoading(true);

  await API.post(
  "/leads",
  {
    fullName: formData.name,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
  }
);

  toast.success(
   "Inquiry Submitted Successfully"
  );

  setFormData({

   name:"",
   email:"",
   phone:"",
   message:""

  });

 }catch(error){

 console.log(error);

 toast.error(
  error.response?.data?.message ||
  "Failed To Submit"
 );

}finally{

  setLoading(false);

 }

};
const contactInfo=[

{
icon:<Phone size={24}/>,
title:"Call Us",
value:"(609) 300-4158",
link:"tel:6093004158"
},

{
icon:<Mail size={24}/>,
title:"Email Us",
value:"nestrecoveryhomes@gmail.com",
link:"mailto:nestrecoveryhomes@gmail.com"
},

{
icon:<MapPin size={24}/>,
title:"Location",
value:"Egg Harbor, New Jersey",
link:"https://maps.google.com/?q=Egg+Harbor+New+Jersey"
},

{
icon:<Clock size={24}/>,
title:"Availability",
value:"24/7 Support",
link:"#"
}

]

return(

<section className="
py-16
sm:py-20
lg:py-28
px-4
sm:px-6
bg-[#F8F6F2]
overflow-hidden
">

<div className="max-w-7xl mx-auto">

<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-10
md:gap-12
lg:gap-16
items-start
">

{/* LEFT */}

<div data-aos="fade-right">

<span className="uppercase tracking-[5px] text-primary text-sm">

Get In Touch

</span>

<h2 className="
font-heading
text-primary
text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl
mt-4
sm:mt-5
mb-6
sm:mb-8
leading-[1.1]
">

We're Here
<br/>

To Help You

</h2>

<p className="
text-gray-500
leading-7
sm:leading-8
lg:leading-9
mb-8
sm:mb-10
text-sm
sm:text-base
">

Reach out today and take the first
step toward a supportive and structured
environment focused on stability and growth.

</p>

<div className="
grid
grid-cols-1
sm:grid-cols-2
gap-4
sm:gap-6
">

{contactInfo.map((item,index)=>(

<a
key={index}
href={item.link}
target={item.link.includes("http") ? "_blank" : ""}
rel="noreferrer"
data-aos="fade-up"
data-aos-delay={index*100}
className="
bg-white
rounded-[20px]
sm:rounded-[30px]
p-5
sm:p-6
shadow-lg
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-500
"
>

<div className="
w-12
h-12
sm:w-14
sm:h-14
rounded-full
bg-primary/10
flex
items-center
justify-center
text-primary
mb-4
sm:mb-5
">

{item.icon}

</div>

<h4 className="font-semibold text-primary mb-2">

{item.title}

</h4>

<p className="text-gray-500 text-sm leading-7 break-words">

{item.value}

</p>

</a>

))}

</div>

</div>

{/* RIGHT */}

<div
data-aos="fade-left"
className="
bg-white
rounded-[25px]
sm:rounded-[35px]
lg:rounded-[40px]
p-5
sm:p-8
md:p-10
shadow-2xl
border
border-white
"
>

<div className="mb-8">

<span className="uppercase tracking-[4px] text-primary text-sm">

Quick Inquiry

</span>

<h3 className="
font-heading
text-primary
text-2xl
sm:text-3xl
md:text-4xl
mt-3
">

Send A Message

</h3>

</div>

<form
onSubmit={handleSubmit}
className="space-y-5"
>

<input value={formData.name}

onChange={(e)=>
setFormData({
 ...formData,
 name:e.target.value
})
}
type="text"
placeholder="Full Name"
aria-label="Full Name"
required
className="
w-full
bg-[#F8F6F2]
p-4
sm:p-5
rounded-xl
sm:rounded-2xl
outline-none
border
border-transparent
focus:border-primary
transition
text-sm
sm:text-base
"
/>

<input value={formData.email}

onChange={(e)=>
setFormData({
 ...formData,
 email:e.target.value
})
}
type="email"
placeholder="Email Address"
aria-label="Email Address"
required
className="w-full bg-[#F8F6F2] p-5 rounded-2xl outline-none border border-transparent focus:border-primary transition"
/>

<input value={formData.phone}

onChange={(e)=>
setFormData({
 ...formData,
 phone:e.target.value
})
}
type="tel"
placeholder="Phone Number"
aria-label="Phone Number"
required
className="w-full bg-[#F8F6F2] p-5 rounded-2xl outline-none border border-transparent focus:border-primary transition"
/>

<textarea value={formData.message}

onChange={(e)=>
setFormData({
 ...formData,
 message:e.target.value
})
}
rows="4"
placeholder="Message"
aria-label="Message"
required
className="w-full bg-[#F8F6F2] p-5 rounded-2xl outline-none resize-none border border-transparent focus:border-primary transition"
/>

<button type="submit"

className="
w-full
bg-primary
text-white
py-4
sm:py-5
rounded-xl
sm:rounded-2xl
flex
items-center
justify-center
gap-3
hover:scale-[1.02]
transition-all
text-sm
sm:text-base
"
>

{
loading
?
"Submitting..."
:
"Submit Request"
}

<ArrowRight size={18}/>

</button>

</form>

</div>

</div>

</div>

</section>

)

}

export default ContactFormSection