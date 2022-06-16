import "./projetos.scss";
import React from "react";
//cards
import reactCard1 from "../../assets/cards/reactCard1.png";
import reactCard2 from "../../assets/cards/reactCard2.jpeg";
import reactCard3 from "../../assets/cards/reactCard3.png";
import card00 from "../../assets/cards/card00.jpg";
import card0 from "../../assets/cards/card0.png";
import card1 from "../../assets/cards/card1.png";
import card2 from "../../assets/cards/card2.png";
import card3 from "../../assets/cards/card3.png";
import card31 from "../../assets/cards/card31.png";
import card4 from "../../assets/cards/card4.png";
import card5 from "../../assets/cards/card5.png";
import card6 from "../../assets/cards/card6.png";
//icones
import icon1 from "../../assets/icones/html.png";
import icon2 from "../../assets/icones/css.png";
import icon3 from "../../assets/icones/javascript.png";
import icon4 from "../../assets/icones/react.png";
import icon5 from "../../assets/icones/typescript.png";
import icon6 from "../../assets/icones/node-js.png";
import icon7 from "../../assets/icones/bootstrap.png";

export default () => {
  return (
    <>
      <section id="projects" className="projects">
        <h2>Projetos em React</h2>

        <div className="container">
          <div className="cards">
            <div className="card">
              <img src={reactCard1} alt={"reactCard1"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">Hokage React</p>
                </div>
                <p>
                  Prove o quanto você sabe sobre React e veja qual é o seu
                  verdadeiro nível de programador até se tornar um Hokage.
                </p>
                <div className="btn-more">
                  <a
                    href="http://reactquiz.drielisonlopes.vercel.app/"
                    target="_blank"
                  >
                    Confira
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={reactCard2} alt={"reactCard2"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">MoveLax</p>
                </div>
                <p>
                  Dê um descanso a sua mente e corpo. O MoveLax vai te ajudar a
                  lembrar sobre as pausas para ter um rendimento melhor!
                </p>
                <div className="btn-more">
                  <a href="http://movelax.vercel.app/" target="_blank">
                    Confira
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={reactCard3} alt={"reactCard3"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">PodCastr</p>
                </div>
                <p>
                  Fique por dentro das novidades no universo da programação
                  através desse podcast bem intuitivo.
                </p>
                <div className="btn-more">
                  <a
                    href="https://github.com/DrielisonLopes/podcastr"
                    target="_blank"
                  >
                    Repositório
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2>Projetos Gerais</h2>

        <div className="container">
          <div className="cards">
            <div className="card">
              <img src={card0} alt={"card0"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">Vamos Viajar</p>
                </div>
                <p>
                  Esse projeto o Prof Drielison fez com muito carinho para sua
                  primeira turma de formação de Desenvolvedores Web.
                </p>
                <div className="btn-more">
                  <a href="https://vamosviajar.netlify.app/" target="_blank">
                    Confira
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={card00} alt={"card00"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">Mulher Presente</p>
                </div>
                <p>
                  Surge para conectar mulheres em situação de vunerabilidade com
                  especilaistas com a finalidade de garantir sua dignidade.
                </p>
                <div className="btn-more">
                  <a href="mulherpresente.somee.com/" target="_blank">
                    Confira
                  </a>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={card1} alt={"card1"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">DevFinances</p>
                </div>
                <p>
                  Nessa aplicação você pode fazer seus orçamentos de gastos para
                  te ajudar a não ficar no vermelho
                </p>
                <div className="btn-more">
                  <a
                    href="http://zealous-clarke-7e9d31.netlify.app/"
                    target="_blank"
                  >
                    Confira
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={card2} alt={"card2"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">Calculadora Mecânica</p>
                </div>
                <p>
                  Cálculos científicos, conversores e uma calculadora que vai te
                  ajudar a calcular seu serviço Freelancer.
                </p>
                <div className="btn-more">
                  <a
                    href="https://fcamasquad3.github.io/calculadora-mecanica/"
                    target="_blank"
                  >
                    Confira
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={card3} alt={"card3"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">Certificard</p>
                </div>
                <p>
                  Vamos direto para meu codepen? Aqui terá a sua disposição mini
                  jogos e aplicações para seu entreterimento.
                </p>
                <div className="btn-more">
                  <a href="https://codepen.io/drielisonlopes" target="_blank">
                    Confira
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={card31} alt={"card31"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">Little Juice</p>
                </div>
                <p>
                  Projeto criado no Hackathon da FCamara com objetivo de
                  fazer os funcionários trabalharem de forma híbrida.
                </p>
                <div className="btn-more">
                  <a href="https://github.com/DrielisonLopes/littleJuice" target="_blank">
                    Repositório
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={card4} alt={"card4"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">Github Class</p>
                </div>
                <p>
                  Você acha que sabe sobre github mas na hora h bate aquela
                  dúvida? Fica aqui com esse help pesca de dicas!
                </p>
                <div className="btn-more">
                  <a
                    href="https://drielisonlopes.github.io/Git_GitHubCLASS/"
                    target="_blank"
                  >
                    Confira
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={card5} alt={"card5"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">O que fazer na quarentena?</p>
                </div>
                <p>
                  Saia do tédio com as dicas desta página que vai te ajudar do
                  entreterimento ao conhecimento.
                </p>
                <div className="btn-more">
                  <a
                    href="http://oquefazerna-quarentena.surge.sh/index.html"
                    target="_blank"
                  >
                    Confira
                  </a>
                </div>
              </div>
            </div>

            <div className="card">
              <img src={card6} alt={"card6"} />
              <div className="content">
                <div className="title">
                  <p className="card-title">Livraria Beulla</p>
                </div>
                <p>
                  Pequeno site de loja feita para primeira cliente Freelancer
                  que foi iniciado, aguardando contato para finalizações.
                </p>
                <div className="btn-more">
                  <a
                    href="https://determined-wiles-21aef7.netlify.app/"
                    target="_blank"
                  >
                    Confira
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="extra-links">
            <div className="link">
              <a href="https://cabidenudebrecho.com.br/" target="_blank">
                👨‍💻 e-commerce onde participei como Freelancer
              </a>
            </div>
            <div className="link">
              <a
                href="https://www.linkedin.com/posts/drielison-lopes_setup-investidores-sonhos-activity-6791744870865285120-3u7D"
                target="_blank"
              >
                📝 Artigo: O quanto você tem investido nos seus sonhos?
              </a>
            </div>
            <div className="link">
              <a
                href="https://www.notion.so/Resumo-React-310d3604856f4c97ac4ca66154ff29ef"
                target="_blank"
              >
                ⚛ Resumo que fiz sobre React
              </a>
            </div>
          </div>
        </div>
        <br />
        <p className="card-title">MINHAS SKILLS</p>

        <div className="icons">
          <img src={icon1} alt={"icon1"} />
          <img src={icon2} alt={"icon2"} />
          <img src={icon3} alt={"icon3"} />
          <img src={icon4} alt={"icon4"} />
          <img src={icon5} alt={"icon5"} />
          <img src={icon6} alt={"icon6"} />
          <img src={icon7} alt={"icon7"} />
        </div>
      </section>
    </>
  );
};
