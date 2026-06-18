import ExpectationsHero from "../expectations/ExpectationsHero";
import SEO from "../components/common/SEO";
import ResidentBenefits from "../expectations/ResidentBenefits";
import ResidentExpectations from "../expectations/ResidentExpectations";
import CommunityGuidelines from "../expectations/CommunityGuidelines";
import DailyStructure from "../expectations/DailyStructure";
import ExpectationsCTA from "../expectations/ExpectationsCTA";

import CommonHero from "../components/CommonHero";

const Expectations = () => {

return(

<>

<SEO 
  title="Resident Expectations | The Nest Recovery Homes" 
  description="Discover the guidelines and daily structure designed to foster accountability and growth." 
  keywords="sober living rules, community guidelines, recovery structure" 
/>

<CommonHero

image="/images/expectations/expect-banner.png"

subtitle="Resident Expectations"

title={
<>
Recovery Starts
<br/>
With Commitment
</>
}

description="
Creating a supportive environment where
residents and community work together
toward long-term growth and accountability.
"

/>

<ResidentBenefits/>

<ResidentExpectations/>

<CommunityGuidelines/>

<DailyStructure/>

<ExpectationsCTA/>

</>

)

}

export default Expectations