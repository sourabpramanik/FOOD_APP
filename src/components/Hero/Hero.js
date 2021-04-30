import React from 'react'
import { 
    HeroBg, 
    HeroContainer, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroItems,
    HeroP } from './Hero.elements'
import { Button } from '../Button';
import Video from '../../videos/video.mp4'

export default function Hero() {
    return (
        <HeroContainer>
           <HeroBg>
               <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/>
           </HeroBg>
           <HeroContent>
               <HeroItems>
                   <HeroH1>
                       UNREAL TASTE
                   </HeroH1>
                   <HeroP>
                       Out Of The Imagination
                   </HeroP>
                   <Button primary round big to='/foods'>
                       Explore
                   </Button>
               </HeroItems>
           </HeroContent>
        </HeroContainer>
    )
}
