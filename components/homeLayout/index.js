import * as S from './styles.js'
import Image from 'next/image.js'
import Link from 'next/link.js'

import agenda from "../../public/data/agenda.json"
import news from "../../public/data/news.json"

export default function HomeLayout() {
    return (
        <S.Main id='content'>
            <S.Section>
                <img className='slide' src="/images/home/slide1.png" alt="Audiências Públicas" />
                <aside>
                    <header>
                        <Image
                            src="/icons/calendar.svg"
                            width={24}
                            height={24}
                            alt="Calendário"
                        />
                        <h3>AGENDA DE EVENTOS</h3>
                    </header>
                    <ul>
                        {agenda.map((info, index) => {
                            return (
                                <li key={index}>
                                    <small>{info.date}</small>
                                    <h4>{info.event}</h4>
                                    <Image
                                        src="/icons/location.svg"
                                        width={24}
                                        height={24}
                                        alt="Localização"
                                    />
                                    <p>{info.local}</p>
                                </li>
                            )
                        })}
                    </ul>
                </aside>
                <footer>
                    <button>
                        <Image
                            src="/icons/cam.svg"
                            width={24}
                            height={24}
                            alt="Câmera"
                        />
                        <p>TV CÂMARA</p>
                    </button>
                    <button>
                        <Image
                            src="/icons/temple.svg"
                            width={24}
                            height={24}
                            alt="Templo"
                        />
                        <p>AUDIÊNCIAS PÚBLICAS</p>
                    </button>
                    <button>
                        <Image
                            src="/icons/temple.svg"
                            width={24}
                            height={24}
                            alt="Templo"
                        />
                        <p>REGULAMENTAÇÃO</p>
                    </button>
                    <button>
                        <Image
                            src="/icons/book.svg"
                            width={24}
                            height={24}
                            alt="Livro"
                        />
                        <p>DIRETRIZES</p>
                    </button>
                    <button>
                        <Image
                            src="/icons/book.svg"
                            width={24}
                            height={24}
                            alt="Livro"
                        />
                        <p>REGIMENTO INTERNO</p>
                    </button>
                </footer>
            </S.Section>
            <div className='content'>
                <S.Cards>
                    <Link href={"https://www.camarasantos.sp.gov.br/escola"} target="_blank">
                        <img src="/images/home/card1.png" alt="Escola do Legislativo" />
                    </Link>
                    <Link href={"/procuradoria"}>
                        <img src="/images/home/card2.png" alt="Procuradoria"/>
                    </Link>
                    <Link href={"/"}>
                        <img src="/images/home/card3.png" alt="Licitações" />
                    </Link>
                    <Link href={"/"}>
                        <img src="/images/home/card4.png" alt="Concurso Público"/>
                    </Link>
                </S.Cards>
                <div className='sections'>
                    <S.Info>
                        <header>
                            <Image
                                src="/icons/info.svg"
                                width={24}
                                height={24}
                                alt="Informação"
                            />
                            <h3>ACESSO À INFORMAÇÃO</h3>
                        </header>
                        <div className='container'>
                            <a href="" target="_blank">
                                <div className='box'>
                                    <Image
                                        src="/icons/info2.svg"
                                        width={70}
                                        height={70}
                                        alt="Informação"
                                        />
                                </div>
                                <h4>SERVIÇO DE INFORMAÇÕES AO CIDADÃO</h4>
                            </a>
                            <a href="http://s2.asp.srv.br/etransparencia.cm.santos.sp/servlet/portal" target="_blank" rel="noreferrer">
                                <div className='box'>
                                    <Image
                                        src="/icons/vector3.svg"
                                        width={70}
                                        height={70}
                                        alt="Informação"
                                    />
                                </div>
                                <h4>PORTAL DE TRANSPARÊNCIA</h4>
                            </a>
                            <a href="" target="_blank">
                                <div className='box'>
                                    <Image
                                        src="/icons/support.svg"
                                        width={70}
                                        height={70}
                                        alt="Informação"
                                    />
                                </div>
                                <h4>OUVIDORIA</h4>
                            </a>
                        </div>
                    </S.Info>
                    <S.Destaque>
                        <header>
                            <Image
                                src="/icons/menuboard.svg"
                                width={24}
                                height={24}
                                alt="Agenda"
                            />
                            <h3>EM DESTAQUE</h3>
                        </header>
                        <Image 
                            src="/images/home/destaques.png"
                            width={548}
                            height={270}
                            alt="Jovems Vereadores recebem certificação em Sessão Solene"
                        />
                    </S.Destaque>
                    <S.Consulta>
                        <header>
                            <Image
                                src="/icons/vector.svg"
                                width={24}
                                height={24}
                                alt="Lupa"
                            />
                            <h3>CONSULTA RÁPIDA / <span>PROPOSITURAS EM TRAMITAÇÃO</span></h3>
                        </header>
                    </S.Consulta>
                    <S.Noticias>
                        <header>
                            <Image
                                src="/icons/clock.svg"
                                width={24}
                                height={24}
                                alt="Relógio"
                            />
                            <h3>ÚLTIMAS NOTÍCIAS</h3>
                        </header>
                        <ul>
                        {news.map((news, index) => {
                            const CutHeadline = news.headline.slice(0, 48);
                            return (
                                <li key={news.id}>
                                    <Link href={`/noticia/${news.id}`}>
                                        <p className='date'>{news.date.slice(0, 5)}</p>
                                        <abbr title={news.headline}>
                                            <p className='headline'>
                                                {
                                                    news.headline.length <= 48 ?
                                                    CutHeadline :
                                                    `${CutHeadline}...`
                                                }
                                            </p>
                                        </abbr>
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>
                        <footer>
                            <Link href={"#"}>TODAS AS NOTÍCIAS</Link>
                        </footer>
                    </S.Noticias>
                </div>
            </div>
        </S.Main>
    )
}