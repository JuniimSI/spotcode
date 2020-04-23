import React, { Fragment } from 'react';
import NavbarFooter from '../../components/common/navbar_footer';
import SectionWrapper from '../../components/common/section_wrapper';
import { Heading } from 'react-bulma-components';
import Sliderz from '../../components/sliderz';

const SliderScreen = () => {
 return(
   <Fragment>
     <SectionWrapper>
       <Heading className='has-text-centered has-text-white'>Slider</Heading>
       <Sliderz/>
     </SectionWrapper>
     <NavbarFooter/>
   </Fragment>
);}
export default SliderScreen;