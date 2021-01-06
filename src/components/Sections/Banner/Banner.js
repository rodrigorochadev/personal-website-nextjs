import React from 'react'
import Image from 'next/image'
import useMousePosition from '../../../hooks/useMousePosition'
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Parallax } from 'react-scroll-parallax'
import { Container, DescriptionHighlight, Grid } from '../../../styles/shared/sharedStyles';

const Banner = () => {

    const {x, y} = useMousePosition();

    return(
        <>
        {/* <h2>Image</h2>
        <div style={{paddingTop: '200vh'}}></div>
        <div style={{position: 'relative', height: '100vh', width: '100vw', background: 'lightcoral'}}>
            
            <Image
                src="/assets/images/winegrid.png"
                alt="Winegrid"
                width={658}
                height={500}
                layout="intrinsic"
            />
        </div>
            <Image
                src="/assets/images/schoolmanager.png"
                alt="Winegrid"
                width={658}
                height={500}
                layout="intrinsic"
            /> */}
            {/* <Parallax x={[-0, 20]}>
                <span style={{whiteSpace: 'nowrap'}}>
                    <span><b>SOFTWARE DEVELOPER</b><span style={{opacity:0.3}}> - UI/UX DESIGNER - </span></span>
                </span>
            </Parallax> */}
            <Container small>
                <BannerContainer>
                    <h1>Web Developer helping companies and individuals reaching their full potencial with a better digital presence.</h1>
                </BannerContainer>
                <Grid>
                    <div style={{gridColumnStart: 2, gridColumnEnd: 5}}>
                        <DescriptionHighlight>Confused? I help you reach your goals with a better online presence. Or something like that. Whatever this is just to fill space. Just a little extra, you know?</DescriptionHighlight>
                    </div>
                </Grid>
            </Container>
            <div style={{paddingTop: '200vh'}}></div>
        </>
    )

}

export default Banner;

export const BannerContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
    font-size: 3.2vw;
    margin-top: 29vh;
`