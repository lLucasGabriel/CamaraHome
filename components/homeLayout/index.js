import * as S from './styles.js'
import Image from 'next/image.js'
import Link from 'next/link.js'

import info from "../../data/info.json"

export default function HomeLayout() {
    return (
        <S.Main>
            <S.Section>
                <Image
                    src="/images/home/slide1.png"
                    width={660}
                    height={300}
                    quality={100}
                    alt="Audiências Públicas"
                />
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
                        {info.map((info, index) => {
                            return (
                                <li>
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
            <S.Cards>
                <Link href={"/"}>
                    <Image
                        src="/images/home/card1.png"
                        width={280}
                        height={90}
                        quality={100}
                        alt="Escola do Legislativo"
                    />
                </Link>
                <Link href={"/procuradoria"}>
                    <Image
                        src="/images/home/card2.png"
                        width={280}
                        height={90}
                        quality={100}
                        alt="Procuradoria"
                    />
                </Link>
                <Link href={"/"}>
                    <Image
                        src="/images/home/card3.png"
                        width={280}
                        height={90}
                        quality={100}
                        alt="Licitações"
                    />
                </Link>
                <Link href={"/"}>
                    <Image
                        src="/images/home/card4.png"
                        width={280}
                        height={90}
                        quality={100}
                        alt="Concurso Público"
                    />
                </Link>
            </S.Cards>
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
                    <div className='box'>
                        <Image
                            src="/icons/info2.svg"
                            width={24}
                            height={24}
                            alt="Informação"
                        />
                    </div>
                    <h4>SERVIÇO DE INFORMAÇÕES AO CIDADÃO</h4>
                    <div className='box'>
                        <Image
                            src="/icons/info2.svg"
                            width={24}
                            height={24}
                            alt="Informação"
                        />
                    </div>
                    <h4>SERVIÇO DE INFORMAÇÕES AO CIDADÃO</h4>
                    <div className='box'>
                        <Image
                            src="/icons/info2.svg"
                            width={24}
                            height={24}
                            alt="Informação"
                        />
                    </div>
                    <h4>SERVIÇO DE INFORMAÇÕES AO CIDADÃO</h4>
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
            </S.Noticias>
        </S.Main>
    )
}