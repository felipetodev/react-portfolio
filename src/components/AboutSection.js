import home1 from '../img/home1.png'
import styled from 'styled-components'
import { About, Description, Image, Hide } from '../styles'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>Trabajamos para crear</h2>
                    </Hide>
                    <Hide>
                        <h2>tus <span>sueños</span></h2>
                    </Hide>
                    <Hide>
                        <h2>realidad.</h2>
                    </Hide>
                </div>
                <p>contactanos para cualqueir idea que tengans para tu negocio, contamos con gente profesional, con ideas unicas y basta experiencia.</p>
                <button>Contactanos</button>
            </Description>
            <Image>
                <img src={home1} alt="Imagen de Portada"/>
            </Image>
        </About>
    )
}

//styled-components


export default AboutSection