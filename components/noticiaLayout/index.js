import Head from "next/head.js";
import * as S from "./styles.js";
import { useRouter } from "next/router";

import newsApi from "../../data/news.json"

export default function NoticiaLayout() {
    const router = useRouter();
    const newsId = router.query.noticiaId;
    return (
        <>
            <Head>
                <title>Câmara de Santos</title>
            </Head>
            <S.Main>

            </S.Main>
        </>
    )
}