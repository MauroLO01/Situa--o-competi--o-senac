import { useState } from 'react'
import webImg from '../assets/AplicacoeWebMobile.png'
import cabeloImg from '../assets/Cabelereiro.png'
import cuidadosImg from '../assets/CuidadosSaudeApoioSocial.png'
import devImg from '../assets/DesenvolvimentoSistemas.png'
import esteticaImg from '../assets/Esteticabem-estar.png'

function Ocupacoes() {

    const [ocupacao, setOcupacao] = useState('')

    const dados = {
        web: {
            titulo: "Aplicações Web e Mobile",
            descricao: "Avalia o desenvolvimento de interfaces responsivas e acessíveis, observando o seu desempenho e as boas práticas de front-end e back-end. As provas exigem conhecimentos e habilidades técnicas na criação de soluções web que contemplem estética, boa usabilidade e experiência do usuário.",
            imagem: webImg
        },

        cabelo: {
            titulo: "Cabeleireiro",
            descricao: "Avalia o tratamento e o cuidado com os cabelos dos clientes, destacando as suas aparências e personalidades. As provas exigem conhecimentos e habilidades técnicas em serviços de corte, coloração e penteados, seguindo padrões de qualidade, segurança e criatividade.",
            imagem: cabeloImg
        },

        cuidados: {
            titulo: "Cuidados de Saúde e Apoio Social",
            descricao: "Avalia a realização de ações de prevenção, promoção e recuperação da saúde individual e coletiva. As provas simulam atendimentos hospitalares, domiciliares e exigem conhecimento e habilidades técnicas em práticas de higiene, conforto, alimentação, mobilização e acompanhamento de pacientes.",
            imagem: cuidadosImg
        },

        dev: {
            titulo: "Desenvolvimento de Sistemas",
            descricao: "Avalia a capacidade técnica do competidor na criação de soluções tecnológicas eficientes e inovadoras, de acordo com problemáticas reais do mercado. As provas exigem conhecimentos e habilidades no desenvolvimento de aplicações para web, desktop e mobile, além de práticas de programação, UX, banco de dados e segurança da informação.",
            imagem: devImg
        },

        estetica: {
            titulo: "Estética e Bem-estar",
            descricao: "Avalia as práticas de embelezamento, promoção, proteção, manutenção e recuperação da face e do corpo por meio de procedimentos estéticos. As provas exigem conhecimento anatômico, postura ética no atendimento ao cliente e habilidades técnicas em serviços como limpeza de pele, massagens e aplicação de cosméticos.",
            imagem: esteticaImg
        }
    }

    return (
        <>
            <section className='ocupacoes'>
                <h2>Ocupações:</h2>
                <select onChange={(e) => setOcupacao(e.target.value)}>
                    <option value="">Selecione uma ocupação</option>
                    <option value="web">Aplicações Web e Mobile</option>
                    <option value="cabelo">Cabeleireiro</option>
                    <option value="cuidados">Cuidados de Saúde e Apoio Social</option>
                    <option value="dev">Desenvolvimento de Sistemas</option>
                    <option value="estetica">Estética e Bem-estar</option>
                </select>

                {ocupacao && (
                    <div className='card'>
                        <h3>{dados[ocupacao].titulo}</h3>
                        <p>{dados[ocupacao].descricao}</p>
                        <img src={dados[ocupacao].imagem} alt="imagem da ocupação" />
                    </div>
                )}
            </section>
        </>
    )
}

export default Ocupacoes