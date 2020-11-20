import styled from 'styled-components'
import { About } from '../styles'
import Toggle from './Toggle'
import { AnimateSharedLayout } from 'framer-motion'
import { useScroll } from './useScroll'
import {  fade } from '../animation'

const FaqSection = () => {

    const [element, controls] = useScroll()

    return (
        <Faq variants={fade} ref={element} animate={controls} initial="hidden">
            <h2>Tiene dudas? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="Comencemos">
                    <div className="answer">
                        <p>Lorem ipsum dolor nose que.</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Itinerario de Desarrollo">
                    <div className="answer">
                        <p>Lorem ipsum dolor nose que.</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Métodos de Pago">
                    <div className="answer">
                        <p>Lorem ipsum dolor nose que.</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </Toggle>
                <Toggle title="Nuestras Garantías">
                    <div className="answer">
                        <p>Lorem ipsum dolor nose que.</p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    
    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0rem;

        p {
            padding: 1rem 0rem;
        }
    }
`

export default FaqSection