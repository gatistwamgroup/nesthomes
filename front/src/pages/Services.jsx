import ServiceHero from "../components/services/ServiceHero";
import SEO from "../components/common/SEO";
import ServiceIntro from "../components/services/ServiceIntro";
import HousingFeatures from "../components/services/HousingFeatures";
import StructuredLiving from "../components/services/StructuredLiving";
import CommunitySupport from "../components/services/CommunitySupport";
import MATSupport from "../components/services/MATSupport";
import RecoveryTimeline from "../components/services/RecoveryTimeline";
import WhyChooseNest from "../components/about/WhyChooseNest";
import AboutCTA from "../components/about/AboutCTA";
import CommonHero from "../components/CommonHero";


const Services = () => {
  return (
    <>
      <SEO 
        title="Support Services | The Nest Recovery Homes" 
        description="Explore our comprehensive support services, housing features, and MAT support for sustained recovery." 
        keywords="MAT support, structured living, recovery services" 
      />
      <CommonHero

image="/images/services/service-banner.png"

subtitle="Support Services"

title={
<>
Safe Housing.
<br/>
Structured Support.
</>
}

description="
The Nest Recovery Homes provides a stable
environment designed around support,
community and accountability.
"

/>
      <ServiceIntro />
      <HousingFeatures />
      <StructuredLiving />
      <CommunitySupport />
      <MATSupport />
      <RecoveryTimeline />
      <WhyChooseNest />
      <AboutCTA />
    </>
  );
};

export default Services;