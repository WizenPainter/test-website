import { Button } from '@/components/ui/button';
import { 
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import Link from "next/link";

import {
    AlignJustify,
    BarChart,
    Building2,
    Camera,
    ChevronDown,
    Code,
    Code2Icon,
    DollarSign,
    Download,
    GraduationCap,
    Headphones,
    Home,
    Info,
    LibrarySquare,
    LifeBuoy,
    Lock,
    Newspaper,
    PaintBucket,
    Settings,
    Smile,
    Sparkles,
    UserCircle2,
    UserPlus
} from 'lucide-react';

interface DropDownMenuProps {
    onClose: () => void;
}


const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
    
    const handleLinkClick = () => {
        onClose();
    }

    return ( 
        <div className='w-screen h-screen bg-white pt-20 px-4 items-center justify-center absolute top-20 right-0 xl:hidden'>
            <Accordion className='pl-2' type="single" collapsible>
                <AccordionItem className='my-6 border-b' value='item-1'>
                    <AccordionTrigger className=''>
                        Use Cases
                    </AccordionTrigger>
                    <AccordionContent>
                        <Link href="/team-alignment" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <UserPlus className='h-6 w-6 mr-4 text-orange-400'/>
                            </div>
                            <div>
                                Team Alignment
                            </div>
                        </Link>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
     );
}
 
export default DropDownMenu;