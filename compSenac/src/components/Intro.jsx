import { useState } from 'react'
import logoComp from '../assets/LogoCompetições.png'

function Intro() {
    return (
        <>
            <section className='inicio'>
                <div className='chamando'>
                    <img src={logoComp} alt="Logo Competições" className='logoComp' />
                    <h2>Aqui seu talento vale ouro!</h2>
                    <p>Quem participa das Competições SENAC tem a chance de viver essa e mais inúmeras experiências fantásticas. É a oportunidade perfeita para quem ama desafios e quer testar suas habilidades na sua área de formação. Esse site apresenta as ocupações que hoje Uberlândia está participando das Competições Senac. </p>
                </div>
            </section>
        </>
    )
}

export default Intro;