import NavBar from "@/components/ui/navbar/navbar";
import FirstSection from "@/app/(landing-page)/_components/first-section";
import Sliders from "@/app/(landing-page)/_components/slider/sliders";
import SecondSection from "@/app/(landing-page)/_components/second-section";
import ThirdSection from "@/app/(landing-page)/_components/third-section";
import FourthSection from "@/app/(landing-page)/_components/fourth-section";

const LandingPage = () => {
    return ( 
        <div>
            <NavBar />
            <FirstSection />
            <Sliders />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
            Landing Page
        </div>
     );
}
 
export default LandingPage;