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
                    <h3 className="footer-tile">Fale Comigo</h3>
                    <h5>Resta alguma dúvida? Preencha os campos abaixo com os seguintes dados que em breve entraremos em contato.</h5>
                        <div className="contact">
                            <div>
                                <label htmlFor='name' >Nome:</label>
                                <input className="register" maxLength='70' required type='text' value={name} placeholder="Digite seu nome"
                                    onChange={e=> setName(e.target.value)} name='name' 
                                />
                            </div>
                            <div>
                                <label  htmlFor='email'>Email:</label>
                                <input className="register" maxLength='70' required type='email' value={email} placeholder="email@exemplo.com.br"
                                    onChange={e=> setEmail(e.target.value)} name='email' 
                                />
                            </div>
                            <label className="message" htmlFor='comments'>Mensagem:</label>
                            <textarea className="message" maxLength='400' required type='text' value={msg} placeholder="Escreva aqui sua mensagem"
                                onChange={e=> setMsg(e.target.value)} name='comments'></textarea>
                        </div>
                        <div>
                            <button className="button-submit" type='submit' >Enviar</button>
                        </div>
                </form>
                    <div className='networks'>
                    <div>
                        <ul className='my-contact'>
                            <li><a href='https://github.com/drielisonlopes' target='_blank'  rel="noopener noreferrer"><FaGithub className='icon-footer' color='black'/>github.com/drielisonlopes</a></li>
                            <li><a href='https://api.whatsapp.com/send?phone=5521981705176'  rel="noopener noreferrer" target='_blank'><FaWhatsapp className='icon-footer' color='#32CD32 '/>(71) 9 8170-5176</a></li>
                            <li><a href='https://www.linkedin.com/in/drielison-lopes/'  rel="noopener noreferrer" target='_blank'><FaLinkedin className='icon-footer' color=' #2867B2'/>linkedin.com/in/drielison-lopes/</a></li>
                        </ul>
                    </div>
                    <p className="copyright">Copyright © 2021 Drielison Lopes</p>
                </div>
            </div>
        </footer>
    )
}