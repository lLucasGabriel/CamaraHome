import * as S from "./styles.js";
import Link from "next/link.js";

export default function ProcuradoriaLayout() {
    return (
        <>
            <S.Navigator>
                <Link href={"/"}>HOME »</Link>
                <Link href={"/"}>INSTITUCIONAL »</Link>
                <Link href={"/procuradoria"}>PROCURADORIA »</Link>
            </S.Navigator>
            <S.Main>
                <S.Article>
                    <h2>PROCURADORIA</h2>
                    <p>
                    A Procuradoria da Câmara Municipal de Santos é o órgão de representação e consultoria jurídica do Legislativo Santista, composto por membros e servidores concursados. É regida pelas Resoluções nº 17 e 19, de 09 de agosto de 2019, que tratam das atribuições da Chefia, dos Procuradores e da Divisão de Expediente e Pesquisa.
                    <br></br>
                    A Procuradoria tem por objetivo o assessoramento e a consultoria jurídica à Presidência, à Mesa Diretora e aos órgãos de gestão institucional da Casa. Também representa a Câmara em juízo, defendendo as prerrogativas do Poder Legislativo Santista em ações diretas, como inconstitucionalidade, mandados de segurança, ações populares e outras.
                    <br></br>
                    Como parte do processo legislativo, a Procuradoria examina a legalidade e constitucionalidade de todos os projetos apresentados pelos parlamentares ou pelo Poder Executivo. Os pareceres emitidos nos processos legislativos estão disponíveis para consulta no site da Câmara de Santos, juntamente à tramitação do Processo Legislativo.
                    <br></br>
                    Na parte administrativa, a Procuradoria assessora os procedimentos licitatórios, execução contratual, exame prévio dos editais de licitação, além de consultoria jurídica às Comissões administrativas e à Controladoria. Os procuradores ainda acompanham requisições, solicitações e questionamentos apresentados ao Legislativo pelo Poder Judiciário, Ministério Público e Tribunais de Contas.
                    <br></br>
                    Como órgão essencial da Administração da Justiça, no âmbito do Poder Legislativo, a Procuradoria tem por missão exercer a defesa dos direitos e interesses institucionais da Câmara. A missão do setor é servir, através de consultoria e assessoramento jurídico, à conformação à Constituição e às leis, das práticas administrativas e das políticas públicas.
                    </p>
                </S.Article>
                <S.Section>
                    <h2>MEMBROS DA PROCURADORIA DA CÂMARA DE SANTOS</h2>
                    <div className="container">
                        <img 
                            src="/images/procuradoria/rita.png"
                        />
                        <div>
                            <h3>PROCURADORA CHEFE</h3>
                            <h4>RITA DE KASSIA DE FRANÇA TEODORO</h4>
                            <p>
                                Procuradora efetiva da Câmara Municipal de Santos, desde 2017, nomeada após aprovação em Concurso Público de Provas e Títulos. Desde 2021 ocupa a função de Procuradora Chefe da Câmara Municipal de Santos. Graduada em Ciências Jurídicas e Sociais pela Universidade Católica de Santos (UNISANTOS). Pós-Graduada em Direito Processual Civil. Mestre em Direito Internacional pela Universidade Católica de Santos (UNISANTOS). 
                            </p>
                        </div>
                    </div>
                </S.Section>
                <S.Cards>
                    <S.Card>
                        <div>
                            <img
                                src="/images/procuradoria/eduber.png"
                                alt="Dr."
                            />
                        </div>
                        <h4></h4>
                        <p>
                        
                        </p>
                    </S.Card>
                </S.Cards>
                <S.Card>
                        <div>
                            <img
                                src="/images/procuradoria/bianca.png"
                                alt="Dr."
                            />
                        </div>
                        <h4></h4>
                        <p>
                        
                        </p>
                    </S.Card>
                    <S.Card>
                        <div>
                            <img
                                src="/images/procuradoria/mari.png"
                                alt="Dr."
                            />
                        </div>
                        <h4></h4>
                        <p>
                        
                        </p>
                    </S.Card>
                    <S.Card>
                        <div>
                            <img
                                src="/images/procuradoria/thais.png"
                                alt="Dr."
                            />
                        </div>
                        <h4></h4>
                        <p>
                        
                        </p>
                    </S.Card>
                    <S.Card>
                        <div>
                            <img
                                src="/images/procuradoria/thayane.png"
                                alt="Dr."
                            />
                        </div>
                        <h4></h4>
                        <p>
                        
                        </p>
                    </S.Card>
                    <S.Card>
                        <div>
                            <img
                                src="/images/procuradoria/.png"
                                alt="Dr."
                            />
                        </div>
                        <h4></h4>
                        <p>
                        
                        </p>
                    </S.Card>
                <S.Sectors>
                    <section>

                    </section>
                    <img 
                        src="/images/procuradoria/fluxo.png"
                        alt="Recebimento do processo D.E.P. e Saída do processo"
                    />
                </S.Sectors>
            </S.Main>
        </>
    )
};