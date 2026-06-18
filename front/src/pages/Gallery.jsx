import GalleryHero from "../components/gallery/GalleryHero";
import SEO from "../components/common/SEO";
import GalleryTabs from "../components/gallery/GalleryTabs";
import FeaturedGallery from "../components/gallery/FeaturedGallery";
import LivingEnvironment from "../components/gallery/LivingEnvironment";
import CommonHero from "../components/CommonHero";

const Gallery=()=>{

return(

<>

<SEO 
  title="Gallery | Inside The Nest Recovery Homes" 
  description="Take a visual tour of our comfortable, community-focused recovery spaces and living environments." 
  keywords="recovery home photos, sober living environment" 
/>

<CommonHero

image="/images/gallery/gallery-banner.png"

subtitle="Gallery"

title={
<>
Explore
<br/>
The Nest
</>
}

description="
Take a look inside our spaces designed
for comfort, stability and recovery.
"

/>

<GalleryTabs/>

<FeaturedGallery/>

<LivingEnvironment/>

</>

)

}

export default Gallery