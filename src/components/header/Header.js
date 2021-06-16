import React, {useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import logo from '../../assets/img/logo.svg';
import './Header.scss';

export default () => {
    useEffect(()=>{
        const list = document.querySelector('.list')
        const div = document.querySelector('.listBg')

        window.addEventListener('click',(e)=>{
            const el = e.target
            if(!list.classList.contains('active')) {
                return
            }
            if(el === div ){
                list.classList.remove('active')
            }

        })
    },[])
    function handleClick (){
        const element = document.querySelector('.list')
        element.classList.toggle('active')
    }
    return (
        <>
            <nav>
                <ul>
                    <h1><img src={logo} className="App-logo" alt="logo" /> <a href='/'>Drielison Lopes</a> </h1>
                    <div className='list'>
                        {/* <li> <a href='#sobre'>Sobre</a></li> */}
                        <li> <a href='#projetos'>Projetos</a></li>
                        <li> <a href='#contato'>Contato</a></li>

                        <div className='listNetworks'>
                            <li><a href='https://github.com/drielisonlopes' target='_blank'  rel="noopener noreferrer"><FaGithub className='contact-img'/></a></li>
                            <li><a href='https://api.whatsapp.com/send?phone=5571981705176'  rel="noopener noreferrer" target='_blank'><FaWhatsapp className='contact-img'/></a></li>
                            <li><a href='https://www.linkedin.com/in/drielison-lopes/'  rel="noopener noreferrer" target='_blank'><FaLinkedin className='contact-img'/></a></li>
                        </div>
                        <div className='listBg'></div>
                    
                    </div>
                    <FaBars onClick={handleClick} className='hamburger'/>
                </ul>
            </nav>

            <header>
                <div className='bg-header'>
                </div>
            </header> 
        </>
    )
}