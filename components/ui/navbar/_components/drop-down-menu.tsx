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
    UserPlus,
    ScreenShare
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
                        <Link href="/sales" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <DollarSign className='h-6 w-6 mr-4 text-green-400'/>
                            </div>
                            <div>
                                Sales
                            </div>
                        </Link>
                        <Link href="/engineering" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <Code className='h-6 w-6 mr-4 text-indigo-400'/>
                            </div>
                            <div>
                                Engineering
                            </div>
                        </Link>
                        <Link href="/design" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <PaintBucket className='h-6 w-6 mr-4 text-blue-400'/>
                            </div>
                            <div>
                                Design
                            </div>
                        </Link>
                        <Link href="/marketing" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <BarChart className='h-6 w-6 mr-4 text-rose-400'/>
                            </div>
                            <div>
                                Marketing
                            </div>
                        </Link>
                        <Link href="/product-management" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <Code className='h-6 w-6 mr-4 text-slate-400'/>
                            </div>
                            <div>
                                Product Management
                            </div>
                        </Link>
                        <Link href="/support" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <Code className='h-6 w-6 mr-4 text-amber-400'/>
                            </div>
                            <div>
                                Support
                            </div>
                        </Link>
                        <Link href="/insert-here" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <Code className='h-6 w-6 mr-4 text-amber-400'/>
                            </div>
                            <div>
                                Veca AI
                            </div>
                        </Link>
                        <Link href="/insert-here" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <Code className='h-6 w-6 mr-4 text-amber-400'/>
                            </div>
                            <div>
                                Enterprice
                            </div>
                        </Link>
                        <Link href="/insert-here" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <Code className='h-6 w-6 mr-4 text-amber-400'/>
                            </div>
                            <div>
                                Insert Here
                            </div>
                        </Link>
                        <Link href="/insert-here" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <Code className='h-6 w-6 mr-4 text-amber-400'/>
                            </div>
                            <div>
                                Insert Here
                            </div>
                        </Link>
                        <Link href="/insert-here" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <Code className='h-6 w-6 mr-4 text-amber-400'/>
                            </div>
                            <div>
                                Insert Here
                            </div>
                        </Link>
                        <Link href="/insert-here" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <Code className='h-6 w-6 mr-4 text-amber-400'/>
                            </div>
                            <div>
                                Insert Here
                            </div>
                        </Link>
                        <Link href="/insert-here" className='flex pt-10' onClick={handleLinkClick}>
                            <div>
                                <Code className='h-6 w-6 mr-4 text-amber-400'/>
                            </div>
                            <div>
                                Insert Here
                            </div>
                        </Link>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
     );
}
 
export default DropDownMenu;