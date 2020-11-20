import { motion } from 'framer-motion'
import { pageAnimation, titleAnimation, lineAnimation } from '../animation'
import styled from 'styled-components'

const ContactUs = () => {
    return (
        <StyledContact exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{ background: "#fff" }}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>
                        Estemos en contacto.
                        <motion.div variants={lineAnimation} className="line"></motion.div>
                    </motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>(+569) 777 7777</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Envianos un email.</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnimation}>
                        <Circle />
                        <h2>Redes Sociales.</h2>
                    </Social>
                </Hide>
            </div>
        </StyledContact>
    )
}

const StyledContact = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;

    @media (max-width: 1000px) {
        padding: 2rem;
    }
`

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
`

const Hide = styled(motion.div)`
    overflow: hidden;

    .line {
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }

    h2 {
        font-size: 3rem;
    }
`

const Circle = styled.div`
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background: #353535;
`

const Social = styled(motion.div)`
    display: flex;
    align-items: center;

    h2 {
        margin: 2rem;
    }
`

export default ContactUs