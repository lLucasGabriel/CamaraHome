import Head from "next/head.js";
import * as S from "./styles.js";
import Link from "next/link.js";
import Image from "next/image.js";
import { useRouter } from "next/router";

import newsApi from "../../data/news.json"

export default function NoticiaLayout() {
    const router = useRouter();
    const newsId = router.query.noticiaId;
    const news = newsApi[newsId];
    return (
        <>
            <Head>
                <title>Câmara de Santos</title>
            </Head>
            <S.Navigator>
                <Link href={"/"}>HOME »</Link>
                <Link href={"/"}>COMUNICAÇÃO »</Link>
                <Link href={`/noticia/${newsId}`}>{news.headline}</Link>
            </S.Navigator>
            <S.Title>
                <Image 
                    src="/icons/menuboard.svg"
                    width={40}
                    height={40}
                    alt="Calendário"
                />
                <h2>ÚLTIMAS NOTÍCIAS</h2>
            </S.Title>
            <S.Main>
                <S.Content>
                    <Image 
                        src={`/images/destaques/${news.img}`}
                        width={600}
                        height={470}
                        alt={`${news.alt}`}
                    />
                    <small>{`Publicado em (${news.date})`}</small>
                    <h3>{`${news.headline}`}</h3>
                    <p>{`${news.content}`}</p>
                </S.Content>
                <S.Aside>
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
                            {newsApi.map((news, index) => {
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
                </S.Aside>
            </S.Main>
        </>
    )
}