import * as S from "./styles";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <S.Header>
        <section>
          <h2>
            TRABALHANDO COM <span>RESPONSABILIDADE</span>, SEMPRE!
          </h2>
        </section>
        <section>
            <div className="title">
                <Image 
                    src="/images/home/arms.png" 
                    width={70}
                    height={70}
                    alt="Brasão de Santos"
                />
                <h1>CÂMARA DE <br/><span>SANTOS</span></h1>
            </div>
            <div className="container">
              <div className="navigation">
                  <a href="#">Ir para o Conteúdo[1]</a>
                  <a href="#">Ir para o Menu Principal[2]</a>
                  <a href="#">Ir para a busca[3]</a>
              </div>
              <div className="buttons">
                  <button>VEREADORES</button>
                  <button>CÂMARA</button>
                  <button>PARTICIPE</button>
              </div>
              <fieldset>
                <label htmlFor="search">
                  <Image 
                    src="/icons/vector2.svg"
                    width={16}
                    height={16}
                    alt="Lupa"
                  />
                </label>
                <input type="text" name="search" id="search" placeholder="Pesquise no site"/>
              </fieldset>
            </div>
        </section>
      </S.Header>
      <S.Navbar>
        <ul>
            <li>
                <a href="#">
                    <Image 
                        src="/icons/home.svg" 
                        width={15}
                        height={15}
                        alt="Início"
                    />
                </a>
            </li>
            <li><a href="#">INSTITUCIONAL</a></li>
            <li><a href="#">VEREADORES</a></li>
            <li><a href="#">ATIVIDADES LEGISLATIVAS</a></li>
            <li><a href="#">ESCOLA DO LEGISLATIVO</a></li>
            <li><a href="#">COMUNICAÇÃO</a></li>
            <li><a href="#">CONCURSOS</a></li>
            <li><a href="#">FALE CONOSCO</a></li>
            <li className="icon">
              <a href="https://www.youtube.com/camaramunicipaldesantos" target="_blank">
                      <Image 
                          src="/icons/youtube.svg" 
                          width={24}
                          height={24}
                          alt="Início"
                      />
                  </a>
              </li>
            <li>
              <a href="https://www.instagram.com/camaradesantos/" target="_blank">
                    <Image 
                        src="/icons/instagram.svg" 
                        width={24}
                        height={24}
                        alt="Início"
                    />
                </a>
            </li>
            <li>
              <a href="https://www.facebook.com/camaramunicipaldesantos/" target="_blank">
                    <Image 
                        src="/icons/facebook.svg" 
                        width={24}
                        height={24}
                        alt="Início"
                    />
                </a>
            </li>
        </ul>
      </S.Navbar>
      {children}
      <S.Footer>
        <p className="direitos">© 2022 CÂMARA DE SANTOS</p>
        <section>
            <p>ENDEREÇO: PRAÇA TENENTE MAURO BATISTA DE MIRANDA, 1 - VILA NOVA - SANTOS/SP - CEP 11013-360 - TELEFONE: 13 32114100</p>
            <a href="#">
                <Image 
                    src="/icons/location2.svg" 
                    width={24}
                    height={24}
                    alt="Localização" 
                />
                COMO CHEGAR
            </a>
        </section>
      </S.Footer>
    </>
  );
}