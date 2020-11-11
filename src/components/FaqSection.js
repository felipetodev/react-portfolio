import styled from 'styled-components'
import { About } from '../styles'

const FaqSection = () => {
    return (
        <Faq>
            <h2>Tiene dudas? <span>FAQ</span></h2>
            <div className="question">
                <h4>Comencemos</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor nose que.</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Itinerario de Desarrollo</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor nose que.</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Diferentes Metodos de Pago</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor nose que.</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Que Ofrecemos?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor nose que.</p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="faq-line"></div>
            </div>
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