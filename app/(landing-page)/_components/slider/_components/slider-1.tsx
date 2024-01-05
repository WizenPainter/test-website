"use client";

import Slider from 'react-infinite-logo-slider'

import Image from 'next/image';

interface Logos {
    name: string;
    src: string;
}

const logos: Logos[] = [
    {
        name: 'extrusiones',
        src: '/images/logos/extrusiones.png'
    },
    {
        name: 'herralum',
        src: '/images/logos/herralum.png'
    },
    {
        name: 'rehau',
        src: '/images/logos/rehau.png'
    },
    {
        name: 'roto',
        src: '/images/logos/roto-1.png'
    },
    {
        name: 'veka',
        src: '/images/logos/veka.png'
    },
    {
        name: 'ternium',
        src: '/images/logos/ternium.png'
    },
]

const SliderOne = () => {
    const renderLogo = (logo: Logos) => {
        const { name, src } = logo;

        return ( 
            <Slider.Slide>
                    <Image src={src} width={200} height={200} alt={name} className='md:w-50 h-20 text-gray-500 px-2'/>
            </Slider.Slide>
         );
    }
    return ( 
        <div>
            <Slider
                width='200px'
                duration={60}
            >
                {
                    logos.map((logo, index) => (
                        renderLogo(logo)
                    ))
                }
            </Slider>
        </div>
     );
}
 
export default SliderOne;