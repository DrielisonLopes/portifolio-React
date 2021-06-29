import React, { useState } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

import './footer.scss';

export default function () {

    const [name, setName] = useState('') 
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('') 
    
    return (
        <footer>
            <div className='formContainer'>
                <form className='formFeedback' id='contacts'>
                    <h3>Fale Comigo</h3>
                    <h5>Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</h5>
                        <label htmlFor='name' >Nome:</label>
                        <input maxLength='70' required type='text' value={name} onChange={e=> setName(e.target.value)} name='name' />
                        <label  htmlFor='email'>Email:</label>
                        <input maxLength='70' required type='email' value={email} onChange={e=> setEmail(e.target.value)} name='email' />
                        <label htmlFor='comments'>Mensagem:</label>
                        <textarea maxLength='400' required type='text' value={msg} onChange={e=> setMsg(e.target.value)} name='comments'></textarea>
                    <button type='submit' >Enviar</button>
                </form>
                    <div className='networks'>
                    <h3>Redes Sociais</h3>
                        <ul className='contacts'>
                            <li><a href='https://github.com/drielisonlopes' target='_blank'  rel="noopener noreferrer"><FaGithub className='contact-img github' color='black'/>github.com/drielisonlopes</a></li>
                            <li><a href='https://api.whatsapp.com/send?phone=5521981705176'  rel="noopener noreferrer" target='_blank'><FaWhatsapp className='contact-img' color='#32CD32 '/>(71) 9 8170-5176</a></li>
                            <li><a href='https://www.linkedin.com/in/drielison-lopes/'  rel="noopener noreferrer" target='_blank'><FaLinkedin className='contact-img' color=' #2867B2'/>linkedin.com/in/drielison-lopes/</a></li>
                        </ul>
                </div>
            </div>
        </footer>
    )
}