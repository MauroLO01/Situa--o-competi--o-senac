import { useState } from 'react'

function Formulario() {
    return (
        <>
            <section>
                <div className='formulario'>
                    <label htmlFor='nome'>Nome:</label>
                    <input type="text" id='nome' placeholder='Digite seu nome...' />

                    <label htmlFor='email'>Email:</label>
                    <input type="email" id='email' placeholder='Digite seu email...' />

                    <label htmlFor='dataNascimento'>Data de Nascimento:</label>
                    <input type="date" id='dataNascimento' />
                </div>
            </section>
        </>
    )
}

export default Formulario;