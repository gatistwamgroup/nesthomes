import ContactHero from "../components/contact/ContactHero";
import SEO from "../components/common/SEO";
import ContactFormSection from "../components/contact/ContactFormSection";

import CommonHero from "../components/CommonHero";

const Contact=()=>{

return(

<>
<SEO 
  title="Contact Us | The Nest Recovery Homes" 
  description="Get in touch today to take the first step toward a safe and supportive recovery environment." 
  keywords="contact recovery home, sober living application" 
/>
<CommonHero

image="/images/contact/contact-banner.png"

subtitle="Contact Us"

title={
<>
Let's Start
<br/>
Your Journey
</>
}

description="
Get in touch with our team and take
the first step toward a safe and
supportive environment.
"

/>
<ContactFormSection/>

</>

)

}

export default Contact