import home1 from '../img/home1.png'
import { About, Description, Image, Hide } from '../styles'
import { motion } from 'framer-motion'
import { titleAnimation, fade, photoAnimation } from '../animation'
import Wave from './Wave'
import styled from 'styled-components'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>Trabajamos para crear</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>tus <span>sueños</span></motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>realidad.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>contactanos para cualqueir idea que tengans para tu negocio, contamos con gente profesional, con ideas unicas y basta experiencia.</motion.p>
                <motion.button variants={fade}>Contactanos</motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={home1} alt="Imagen de Portada"/>
            </Image>
            <Wave />
        </About>
    )
}

//styled-components

export default AboutSection