"use client";

import React, { useState } from "react";

import { Button } from '@/components/ui/button';
import { X, AlignJustify } from 'lucide-react';
import Link from "next/link";
import DropDownMenu from "@/components/ui/navbar/_components/drop-down-menu";

const ActionButtons = () => {
    const [DropDownVisible, setDropDownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropDownVisible(!DropDownVisible);
    }

    const closeDropdown = () => {
        setDropDownVisible(false);
    }



    return ( 
        <div className="flex items-center md:justify-end md:space-x-6 sm:px-10">
            <div className="flex xl:space-x-6">
                <Link href="pricing" className="xl:flex items-center hidden">
                    <div className="font-light flex">
                        Pricing
                    </div>
                </Link>
                <Link href="/sign-in" className="xl:flex items-center hidden">
                    <div className="font-light flex xl:w-12">
                        Sign In
                    </div>
                </Link>
            </div>
            <div className="flex lg:space-x-4 items-center">
                <Link href="/free">
                    <Button className="hidden md:flex text-md font-light rounded-[40px] border-4 border-indigo-400/90 py-6 bg-[#565add] hover:scale-110 transition-all duration-300 shadow-md hover:shadow-indigo-300">
                        Get Started
                    </Button>
                </Link>
                <Link href="/contact">
                    <Button className="hidden text-[#565add] text-md font-light bg-[#eff0ff] rounded-[40px] hover:scale-110 transition-all duration-300 shadow-md md:flex lg-flex hover:shadow-indigo-300 p-6">
                        Contat Sales
                    </Button>
                </Link>
            </div>

            {DropDownVisible ? (
                <div>
                    <div onClick={toggleDropdown} className="bg-[#565add] p-3 rounded-full xl:hidden">
                        <X className="h-6 w-6 text-[#eff0ff] items-center justify-center rounded-full"/>
                    </div>
                    <DropDownMenu onClose={closeDropdown}/>
                </div>
            ) :  (
                <div onClick={toggleDropdown} className="bg-[#eff0ff] p-3 rounded-full xl:hidden">
                    <AlignJustify className="h-6 w-6 text-[#565add] items-center justify-center rounded-full"/>

                </div>
            )}
        </div>
     );
}
 
export default ActionButtons;