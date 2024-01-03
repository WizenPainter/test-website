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
    ScreenShare,
    ArrowRight
} from 'lucide-react';

interface MenuItem {
    title: string;
    menu: string;
    options: { label: string; emoji: React.ReactElement; href: string; }[];
}

const items: MenuItem[] = [
    {
        title: "Use Cases",
        menu: "use-cases",
        options: [
            {
                label: "Team Alignment",
                emoji: <UserPlus className='text-orange-500'/>,
                href: "/team-alignment"
            },
            {
                label: "Sales",
                emoji: <DollarSign className='text-green-500' />,
                href: "/sales"
            },
            {
                label: "Engineering",
                emoji: <Code className='text-blue-500'/>,
                href: "/engineering"
            },
            {
                label: "Design",
                emoji: <PaintBucket className='text-indigo-500'/>,
                href: "/design"
            },
            {
                label: "Marketing",
                emoji: <BarChart className='text-rose-500'/>,
                href: "/marketing"
            },
            {
                label: "Customer Support",
                emoji: <Headphones className='text-orange-500'/>,
                href: "/customer-support"
            },
            {
                label: "Product Management",
                emoji: <Settings className='text-gray-500'/>,
                href: "/product-management"
            },
            {
                label: "Education",
                emoji: <GraduationCap className='text-green-500'/>,
                href: "/education"
            },
        ]
    },
    {
        title: "For Business",
        menu: "for-business",
        options: [
            {
                label: "Veca AI",
                emoji: <Sparkles className='text-indigo-500'/>,
                href: "/veca-ai"
            },
            {
                label: "Enterprise",
                emoji: <Building2 className='text-green-500'/>,
                href: "/enterprise"
            },
            {
                label: "Veca HQ",
                emoji: <Home className='text-blue-500'/>,
                href: "/"
            },
            {
                label: "Customers",
                emoji: <Smile className='text-indigo-500'/>,
                href: "/"
            },
            {
                label: "Security",
                emoji: <Lock className='text-rose-500'/>,
                href: "/"
            },
            {
                label: "Video Hosting",
                emoji: <Camera className='text-orange-500'/>,
                href: "/"
            },
            {
                label: "Video Library",
                emoji: <LibrarySquare className='text-amber-500'/>,
                href: "/"
            },
        ]
    },
    {
        title: "Resources",
        menu: "resources",
        options: [
            {
                label: "Blog",
                emoji: <AlignJustify className='text-orange-500'/>,
                href: "/"
            },
            {
                label: "Help & Support",
                emoji: <LifeBuoy className='text-green-500'/>,
                href: "/"
            },
            {
                label: "Download",
                emoji: <Download className='text-blue-500'/>,
                href: "/"
            },
            {
                label: "VecaSDK",
                emoji: <Code2Icon className='text-rose-500'/>,
                href: "/"
            },
            {
                label: "Screen Recorder",
                emoji: <Headphones className='text-orange-500'/>,
                href: "/screen-recorder"
            },
            {
                label: "Community",
                emoji: <GraduationCap className='text-green-500'/>,
                href: "/"
            },
        ]
    },
    {
        title: "Company",
        menu: "company",
        options: [
            {
                label: "About Us",
                emoji: <Info className='text-red-500'/>,
                href: "/about-us"
            },
            {
                label: "Careers",
                emoji: <UserCircle2 className='text-green-500'/>,
                href: "/careers"
            },
            {
                label: "Newsroom",
                emoji: <Newspaper className='text-blue-500'/>,
                href: "/newsroom"
            },
        ]
    }
];

interface DropDownMenuProps {
    onClose: () => void;
}


const DropDownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
    
    const handleLinkClick = () => {
        onClose();
    }

    const renderMenu = (item: MenuItem) => {
        const { title, menu, options } = item;

        return ( 
            <AccordionItem className='my-6 border-b' value={menu}>
                <AccordionTrigger>
                    {title}
                </AccordionTrigger>
                <AccordionContent>
                    {
                        options.map((option, index) => (
                            <Link href={option.href} key={index} className='flex pt-10' onClick={handleLinkClick}>
                                <div>
                                    {option.emoji}
                                </div>
                                <div className='px-2'>
                                    {option.label}
                                </div>
                            </Link>
                        ))
                    }
                </AccordionContent>
            </AccordionItem>
         );

    }

    return ( 
        <div className='w-screen h-screen bg-white pt-20 px-4 items-center justify-center absolute top-20 right-0 xl:hidden'>
            <Accordion className='pl-2' type="single" collapsible>
                {
                    items.map((item, index) => (
                        renderMenu(item)
                    ))
                }
                <Link href="/pricing" className='flex flex-1 items-center justify-between text-xl px-6 py-4 border-b'>
                    Pricing
                    <div>
                        <ArrowRight className='h-6 w-6 shrink-0'/>
                    </div>
                </Link>
                <Link href="/contact" className='flex flex-1 items-center justify-between text-xl px-6 py-4'>
                    Contact Sales
                    <div>
                        <ArrowRight className='h-6 w-6 shrink-0'/>
                    </div>
                </Link>
            </Accordion>
            <div className='md:pt-32 mt-6'>
                <div className='flex items-center justify-center space-x-4'>
                    <Link href="/sign-in">
                        <Button className='text-[#4b42ad] text-sm font-light bg-[#eff0ff] p-6 rounded-[40px] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-300' >Sign In</Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button className='text-sm font-light rounded-[40px] border-4 border-indigo-400/90 py-6 bg-[#565add] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300' >Try AI For Free</Button>
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default DropDownMenu;