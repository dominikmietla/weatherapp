import Image from 'next/image'
import PlusSVG from '../assets/svg/cloud.svg'
import { styled } from '@stitches/react';

const Cloud = styled(Image, {
  position: 'absolute',

  '&:nth-child(1)': {
    left: '0px',
  },
  '&:nth-child(2)': {
    left: '40px',
  },
  '&:nth-child(3)': {
    left: '80px',
  },
})

  const Clouds = ({weather}) => {
    const clouds = weather.clouds.all;


    if(clouds > 80){
      return(
        <>
        <Cloud 
        src={PlusSVG?.src}
        alt="cloud"
        width={70}
        height={80}
        />
        <Cloud 
        src={PlusSVG?.src}
        alt="cloud"
        width={70}
        height={80}
        />
        <Cloud 
        src={PlusSVG?.src}
        alt="cloud"
        width={70}
        height={80}
        />
     
      </>
      )
    }else if(clouds > 60){
      return(
        <>
        <Cloud 
        src={PlusSVG?.src}
        alt="cloud"
        width={70}
        height={80}
        />
        <Cloud 
        src={PlusSVG?.src}
        alt="cloud"
        width={70}
        height={80}
        />
      </>
      )
    }
    else if(clouds > 40){
      return(
        <>
        <Cloud 
        src={PlusSVG?.src}
        alt="cloud"
        width={100}
        height={50}
        />
      </>
      )
    }
  }

  export default Clouds;