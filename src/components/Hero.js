import React from 'react';
import styled from 'styled-components';
import '../styles/hero.module.css';

// import ocean3_gradient2 from '../images/ocean3_gradient_subwidth.jpg';

export default function Hero({title, position, size, image,darkened, color, children, position2}){
    // let heroImage = image? image : "../images/ocean.png"


    //
    // console.log(image)
    return(
        // <div className={"hero-container"}>
        <HeroContainer size={size}>
            <HeroImage image={image} size={size} color={color} position2={position2}/>
            <HeroContent  position={position}>
                <HeroH1>
                    {title}
                </HeroH1>
                <HeroBody position={position}>
                    {children}
                </HeroBody>
            </HeroContent>
        </HeroContainer>
        //     <h1>{title}</h1>
        //     {children}
        // </div>
    )

}

// export default function Hero({title, subtitle,image,alt, children}) {
//     return (
//         <HeroContainer >
//             <HeroContent>
//                 <HeroItems>
//                     <HeroH1>
//                         {title}
//                     </HeroH1>
//                     {subtitle &&
//                     <HeroH2>{subtitle}</HeroH2>
//                     }
//                     <HeroP>
//                         {children}
//                     </HeroP>
//                 </HeroItems>
//             </HeroContent>
//         </HeroContainer>
//     )
// }
//
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  height: ${({size})=>(size)};
  position: relative;

  max-width: 100vw;
  //padding: 0 1rem;
  //width: auto;

  @media screen and (max-width: 1100px) {
    min-height: 100vh;
  }
`
//
const HeroContent = styled.div`
  
  background: transparent;
  //width: 100%;
  justify-content: ${({position}) => (position)};
  align-content: center;
  margin-right: ${({position})=>(position==='right' ? '5vw' : 'auto')};
  display: flex;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;  
  flex-direction: column;
  color: white;
  //z-index: 500;
  
  @media screen and (max-width: 980px){
    margin-top: var(--phone-nav-bar-height);
    align-content: center;
    justify-content: center;
    margin: auto;
  }
`

const HeroImage = styled.div`
  //background: url(${({image})=>(image ? image : null)}) center center/cover no-repeat;
  background: ${({image,color,position2})=>(image ? `url(${image}) ${position2} center/cover no-repeat` : `${color}`)};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -50;
  height: ${({size}) => (size)};
  //background: ;
      // Adjust image positioning (if image covers area with defined height) and add font-family for polyfill


  @media screen and (max-width: 1100px) {
    min-height: 100vh;
    //height: auto;
    //background-size: fill;
  }
`

const HeroH1 = styled.h1`
  //background-color: #0a6699;
  display: flex;
  flex-direction: row;
  font-size:var(--size-48);
  margin: auto 2vw;
  text-align: center;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  
  @media screen and (max-width: 1100px ){
    //height: auto;
    //margin: auto;
    flex-direction: column;
    justify-content: center;
}
`
const HeroBody=styled.div`
  display: flex;
  justify-content: ${({position}) => (position)};
  align-content: center;
  margin-right: ${({position})=>(position==='right' ? '10vw' : 'auto')}
  margin-left: auto;
  
`