import './about.scss';
import React from 'react';
import img from  '../../assets/img/drivoila.png';

export default () => {
    return (
        <>
            <div className='section-container'>
                <div className='about-container'>
                <img src={img} alt='currículo'/>
                </div>
            <h2>Hello World🌎,</h2>
            <p>
                Técnico em química, assessor de vendas, gerente digital, vivência 
                em área industrial, supervisor de faturamento e experiência no exterior. Foram todas as áreas que ganhei
                experiência para em fim me encontrar como desenvolvedor de software.
                Hoje realizado em aprender a cada dia sobre a arte de programar.
            </p>
            </div>
            
            
        </>
    )
}
