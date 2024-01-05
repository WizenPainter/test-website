import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MousePointerSquareDashed } from "lucide-react";


const FourthSection = () => {
    return ( 
        <div className="md:pt-10 pb-32 px-10">
            <div className="text-[#111019] md:text-center flex justify-center items-center md:text-6xl text-4xl font-medium pb-10 md:pb-20">
                So much more than a screen recorder.
            </div>
            <div className="md:flex items-center justify-center">
                <div className="md:w-2/5 bg-[#b2b3f1] rounded-[60px] md:p-20">
                    <Image src="/images/window-1.svg" alt="image-2" width={1920} height={1080} className="object-cover rounded-md w-full p-10"/>
                </div>
                <div className="pt-10 md:ml-20 ml-1/3">
                    <div className="flex gap-6">
                        <div className="hidden bg-[#d1d1f7] w-14 h-14 rounded-full md:flex items-center justify-center">
                            <MousePointerSquareDashed className="text-6xl text-[#2b1c50]"/>
                        </div>
                        <div className="w-full md:w-96">
                            <div className="text-[#111019] font-medium leading-normal md:text-4xl text-2xl">
                                Share or embed video anywhere you work
                            </div>
                            <div className="md:text-xl text-[#6c6884] leading-8 md:leading-10 font-light pt-6">
                                From Google Workspace to Slack, Veca videos seamlessly integrate with hundreds of tools you use every day.
                            </div>
                            <Button className="md:text-lg mt-6 rounded-[40px] text-[#4b42ad] font-medium md:py-6 bg-[#eff0ff] hover:scale-110 hover:shadow-indigo-500 transition-all duration-300 shadow-md">
                                Start sharing
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FourthSection;