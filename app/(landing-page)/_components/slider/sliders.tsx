import SliderOne from "@/app/(landing-page)/_components/slider/_components/slider-1";
import SliderTwo from "@/app/(landing-page)/_components/slider/_components/slider-2";

const Sliders = () => {
    return ( 
        <div className="py-32">
            <div className="text-[#2b1c50] px-6 md:w-3/5 mx-auto text-center flex justify-center items-center text-3xl md:text-5xl font-medium">
                More than 21 Million People Across 120,000 Companies Choose Veca.
            </div>
            <div className="pt-20">
                <SliderOne />
                <SliderTwo />
            </div>
        </div>
     );
}
 
export default Sliders;