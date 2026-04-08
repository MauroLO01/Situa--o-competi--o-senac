import { useState } from 'react'

function Formulario() {
    return (
        <section className="formulario-section">
            <div className="formulario">
                <div className="formulario-header">
                    <h2>Cadastro do Aluno</h2>
                    <p>Preencha os dados para continuar</p>
                </div>

                <div className="campo">
                    <label htmlFor="nome">Nome completo</label>
                    <input type="text" id="nome" placeholder="Digite seu nome..." />
                </div>

                <div className="campo">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" placeholder="Digite seu e-mail..." />
                </div>

                <div className="campo">
                    <label htmlFor="dataNascimento">Data de nascimento</label>
                    <input type="date" id="dataNascimento" />
                </div>

                <button className="btn-submit">Continuar</button>
            </div>
        </section>
    );
}

export default Formulario;