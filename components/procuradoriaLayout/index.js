import * as S from "./styles.js";
import Link from "next/link.js";

export default function ProcuradoriaLayout() {
    return (
        <>
            <S.Navigator>
                <Link href={"/"}>HOME »</Link>
                <Link href={"/"}>INSTITUCIONAL »</Link>
                <Link href={"/procuradoria"}>PROCURADORIA</Link>
            </S.Navigator>
            <S.Main>
                <S.Article>
                    <h2>PROCURADORIA</h2>
                    <p>
                    A Procuradoria da Câmara Municipal de Santos é o órgão de representação e consultoria jurídica do Legislativo Santista, composto por membros e servidores concursados. É regida pelas Resoluções nº 17 e 19, de 09 de agosto de 2019, que tratam das atribuições da Chefia, dos Procuradores e da Divisão de Expediente e Pesquisa.
                    </p>
                    <p>
                    A Procuradoria tem por objetivo o assessoramento e a consultoria jurídica à Presidência, à Mesa Diretora e aos órgãos de gestão institucional da Casa. Também representa a Câmara em juízo, defendendo as prerrogativas do Poder Legislativo Santista em ações diretas, como inconstitucionalidade, mandados de segurança, ações populares e outras.
                    </p>
                    <p>
                    Como parte do processo legislativo, a Procuradoria examina a legalidade e constitucionalidade de todos os projetos apresentados pelos parlamentares ou pelo Poder Executivo. Os pareceres emitidos nos processos legislativos estão disponíveis para consulta no site da Câmara de Santos, juntamente à tramitação do Processo Legislativo.
                    </p>
                    <p>
                    Na parte administrativa, a Procuradoria assessora os procedimentos licitatórios, execução contratual, exame prévio dos editais de licitação, além de consultoria jurídica às Comissões administrativas e à Controladoria. Os procuradores ainda acompanham requisições, solicitações e questionamentos apresentados ao Legislativo pelo Poder Judiciário, Ministério Público e Tribunais de Contas.
                    </p>
                    <p>
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
                                Procuradora efetiva da Câmara Municipal de Santos, desde 2017, nomeada após aprovação em Concurso Público de Provas e Títulos. Desde 2021 ocupa a função de Procuradora Chefe da Câmara Municipal de Santos. 
                            </p>
                            <p>
                                Graduada em Ciências Jurídicas e Sociais pela Universidade Católica de Santos (UNISANTOS). Pós-Graduada em Direito Processual Civil. Mestre em Direito Internacional pela Universidade Católica de Santos (UNISANTOS).
                            </p>
                        </div>
                    </div>
                </S.Section>
                <S.Cards>
                    <h2>PROCURADORES</h2>
                    <div className="container">
                        <S.Card>
                            <div className="box">
                                <img
                                    src="/images/procuradoria/eduber.png"
                                    alt="Dr."
                                />
                            </div>
                            <h4>EDUARDO CAVALCANTI ARAUJO DOS REIS</h4>
                            <p>
                                Procurador efetivo da Câmara Municipal de Santos, desde 2015, nomeado após aprovação em Concurso Público de Provas e Títulos. Graduado em Direito pela Pontifícia Universidade Católica de São Paulo (PUC-SP). Pós-graduado em Direito Processual Civil e Mestre em Direito das Relações Sociais, ambos também pela Pontifícia Universidade Católica de São Paulo (PUC-SP).
                            </p>
                        </S.Card>
                        <S.Card>
                            <div className="box">
                                <img
                                    src="/images/procuradoria/bianca.png"
                                    alt="Dr."
                                />
                            </div>
                            <h4>BIANCA SUZY VIANA DE OLIVEIRA KLUGE</h4>
                            <p>
                                Procuradora efetiva da Câmara Municipal de Santos, desde 2022, nomeada após aprovação em Concurso Público de Provas e Títulos. Graduada em Direito pela Universidade Federal de Roraima (UFRR). Pós-graduada em Direito Constitucional pela Faculdade Damásio.
                            </p>
                        </S.Card>
                        <S.Card>
                            <div className="box">
                                <img
                                    src="/images/procuradoria/mari.png"
                                    alt="Dr."
                                />
                            </div>
                            <h4>MARIANA BUY DOS SANTOS</h4>
                            <p>
                                Procuradora efetiva da Câmara Municipal de Santos, desde 2022, nomeada após aprovação em Concurso Público de Provas e Títulos. Graduada em Direito pela Universidade Federal Fluminense (UFF) e em Ciências Sociais, com ênfase em Ciência Política, pela Universidade Federal do Rio de Janeiro (UFRJ). Pós-graduanda em Direito Processual Civil na Universidade do Estado do Rio de Janeiro (UERJ).
                            </p>
                        </S.Card>
                        <S.Card>
                            <div className="box">
                                <img
                                    src="/images/procuradoria/thais.png"
                                    alt="Dr."
                                />
                            </div>
                            <h4>THAÍS PERES RUIZ</h4>
                            <p>
                                Procuradora efetiva da Câmara Municipal de Santos, desde 2022, nomeada após aprovação em Concurso Público de Provas e Títulos. Graduada em Direito pela Universidade Católica de Santos (UNISANTOS). Pós-graduanda em Direito Legislativo pelo Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa (IDP).
                            </p>
                        </S.Card>
                        <S.Card>
                            <div className="box">
                                <img
                                    src="/images/procuradoria/thayane.png"
                                    alt="Dr."
                                />
                            </div>
                            <h4>THAYANE MAIO BENEVIDES DOS SANTOS</h4>
                            <p>
                                Procuradora efetiva da Câmara Municipal de Santos, desde 2022, nomeada após aprovação em Concurso Público de Provas e Títulos. Graduada em Direito pela Universidade Metodista de São Paulo. Especialista em Direito Administrativo pela Fundação Getúlio Vargas (FGV).
                            </p>
                        </S.Card>
                    </div>
                </S.Cards>
                <S.Sectors>
                    <div className="container">
                        <div className="header">
                            <h2>DIVISÃO DE EXPEDIENTE PESQUISA E ARQUIVO</h2>
                            <h2>ANALISTAS DA PROCURADORIA</h2>
                        </div>
                        <div className="members">
                            <S.Card>
                                <div className="box">
                                    <img
                                        src="/images/procuradoria/ana.png"
                                        alt="Dr. Ana Paula Atanes de Souza Barreto"
                                    />
                                </div>
                                <h4>ANA PAULA ATANES DE SOUZA BARRETO</h4>
                                <p>
                                    Chefe da Divisão de Expediente, Pesquisa e Arquivo.
                                </p>
                            </S.Card>
                            <S.Card>
                                <div className="box">
                                    <img
                                        src="/images/procuradoria/iuri.png"
                                        alt="Dr. Iuri Gnautic Barbosa"
                                    />
                                </div>
                                <h4>IURI GNAUTIC BARBOSA</h4>
                                <p>
                                    Auxiliar Legislativo.
                                </p>
                            </S.Card>
                            <S.Card>
                                <div className="box">
                                    <img
                                        src="/images/procuradoria/toninho.png"
                                        alt="Dr. Antonio Carlos Duarte de Carvalho"
                                    />
                                </div>
                                <h4>ANTONIO CARLOS DUARTE DE CARVALHO</h4>
                                <p>
                                    Auxiliar Legislativo.
                                </p>
                            </S.Card>
                            <div className="bar"></div>
                            <S.Card>
                                <div className="box">
                                    <img
                                        src="/images/procuradoria/jaque.png"
                                        alt="Dr. Jaqueline Marco de Nascimento"
                                    />
                                </div>
                                <h4>JAQUELINE MARCO DE NASCIMENTO</h4>
                                <p>
                                    Analista Júridico. Chefe da Divisão de Analistas Judiciários de Procuradoria.
                                </p>
                            </S.Card>
                            <S.Card>
                                <div className="box">
                                    <img
                                        src="/images/procuradoria/gi.png"
                                        alt="Dr. Giovanna Souza Rollo Alves"
                                    />
                                </div>
                                <h4>GIOVANNA SOUZA ROLLO ALVES</h4>
                                <p>
                                    Estagiária, estudante de Direito da Universidade Metropolitana de Santos (UNIMES). 
                                </p>
                            </S.Card>
                            <S.Card>
                                <div className="box">
                                    <img
                                        src="/images/procuradoria/bia.png"
                                        alt="Dr. Ana Paula Atanes de Souza Barreto"
                                    />
                                </div>
                                <h4>BEATRIZ SANTOS MARQUES</h4>
                                <p>
                                    Estagiária, estudante de Direto da Universidade Santa Cecília (UNISANTA).
                                </p>
                            </S.Card>
                        </div>
                    </div>
                    <img 
                        src="/images/procuradoria/fluxo.png"
                        alt="Recebimento do processo D.E.P. e Saída do processo"
                    />
                </S.Sectors>
            </S.Main>
        </>
    )
};