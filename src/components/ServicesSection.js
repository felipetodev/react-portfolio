import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import styled from 'styled-components'
import { About, Description, Image } from '../styles'

const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>Resultados <span>100%</span> de Alta Calidad</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Eficientes</h3>
                        </div>
                        <p>Lorem ipsum dolor sir amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Agile</h3>
                        </div>
                        <p>Lorem ipsum dolor sir amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Asequible</h3>
                        </div>
                        <p>Lorem ipsum dolor sir amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sir amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt=""/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }

    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Card = styled.div`
    flex-basis: 17rem; /* Ajustar */

    .icon {
        display: flex;
        align-items: center;
    }

    h3 {
        margin-left: 1rem;
        background: #fff;
        color: black;
        padding: 1rem;
    }
`

export default ServicesSection