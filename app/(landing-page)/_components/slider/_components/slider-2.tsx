"use client";

import Slider from 'react-infinite-logo-slider'

import Image from 'next/image';

interface Logos {
    name: string;
    src: string;
}

const logos: Logos[] = [
    {
        name: 'cardinal',
        src: '/images/logos/cardinal.png'
    },
    {
        name: 'pilkington',
        src: '/images/logos/pilkington.png'
    },
    {
        name: 'sain gobain',
        src: '/images/logos/saint-gobain.png'
    }
]


const SliderTwo = () => {
    const renderLogo = (logo: Logos) => {
        const { name, src } = logo;

        return ( 
            <Slider.Slide>
                    <Image src={src} width={200} height={200} alt={name} className='md:w-50 h-20 text-gray-500 px-2'/>
            </Slider.Slide>
         );
    }
    return ( 
        <div className='mt-20'>
            <Slider width='400px' duration={60} blurBorders={true}>
                {
                    logos.map((logo, index) => (
                        renderLogo(logo)
                    ))
                }
            </Slider>
        </div>
     );
}
 
export default SliderTwo;