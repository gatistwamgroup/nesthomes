import FAQHero from "../components/faq/FAQHero";
import SEO from "../components/common/SEO";
import FAQAccordion from "../components/faq/FAQAccordion";
import AdditionalQuestions from "../components/faq/AdditionalQuestions";
import FAQCTA from "../components/faq/FAQCTA";

import CommonHero from "../components/CommonHero";

const FAQ=()=>{

return(

<>

<SEO 
  title="Frequently Asked Questions | The Nest" 
  description="Find answers to common questions about housing, rules, and the recovery journey at The Nest." 
  keywords="sober living FAQ, recovery home questions" 
/>

<CommonHero

image="/images/faq/faq-banner.png"

subtitle="Frequently Asked Questions"

title={
<>
Questions?
<br/>
We've Got Answers
</>
}

description="
Find answers about housing,
recovery environment and life
at The Nest.
"

/>

<FAQAccordion/>

<AdditionalQuestions/>

<FAQCTA/>

</>

)

}

export default FAQ