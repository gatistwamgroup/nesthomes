import AboutHero from "../components/about/AboutHero";
import SEO from "../components/common/SEO";
import OurStory from "../components/about/OurStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import WhyChooseNest from "../components/about/WhyChooseNest";
import RecoveryEnvironment from "../components/about/RecoveryEnvironment";
import AboutCTA from "../components/about/AboutCTA";
import CommonHero from "../components/CommonHero";
const About = () => {
  return (
    <>
    <SEO 
      title="About Us | The Nest Recovery Homes" 
      description="Learn about our mission, core values, and the supportive community driving long-term recovery at The Nest." 
      keywords="our story, recovery community, sober living values" 
    />
<CommonHero

image="/images/about/about-banner.png"

subtitle="About Us"

title={
<>
More Than A House.
<br/>
A Place To Rebuild.
</>
}

description="
The Nest Recovery Homes provides a safe,
structured and supportive environment
designed to help individuals focus on
recovery and long-term stability.
"

/>
      <OurStory />
       <MissionVision />
      <CoreValues />
      <WhyChooseNest />
      <AboutCTA /> 
     <RecoveryEnvironment /> 
     
    </>
  );
};

export default About;