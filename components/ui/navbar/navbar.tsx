import Logo from "@/components/ui/navbar/_components/logo";
import { NavigationMenuBar } from "@/components/ui/navbar/_components/navigationMenuBar";
import ActionButtons from "@/components/ui/navbar/_components/action-buttons";

const NavBar = () => {
    return ( 
        <div className="flex items-center justify-between pr-10 lg:px-20 sticky top-0 z-50 bg-white h-24">
            <div className="px-4">
                <div className="w-40">
                    <Logo />
                </div>
            </div>
            <div className="flex items-center">
                <NavigationMenuBar />

                <ActionButtons />
            </div>
        </div>
     );
}
 
export default NavBar;