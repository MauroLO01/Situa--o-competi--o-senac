import { useState } from 'react'
import logo from '../assets/SenacLogo.png'

function Header() {
    return (
        <>
            <section className='header'>
                <div>
                    <img src={logo} alt="Logo do SENAC" className='logo'/>
                </div>
                <h1>Olá, seja bem-vindo as competições do SENAC!</h1>
            </section>
        </>
    )
}

export default Header;
