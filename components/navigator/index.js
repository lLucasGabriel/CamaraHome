import * as S from "./styles.js"
import Link from "next/link"

export default function Navigator({path, subpath, link1, link2}) {
    <S.Bar>
        <Link href="/">HOME »</Link>
        <Link href={link1}>{path}</Link>
        <Link href={link2}>{subpath}</Link>
    </S.Bar>
}