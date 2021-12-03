import React from "react";
import {
    Background,
    Container,
    Content,
    ContentCenter,
    ContentLeft,
    ContentRight,
    Image,
    Paragraph,
    Title,
} from "./element";
import oldImage from "../Images/photo08.jpg";
import boardImage from "../Images/photo05.jpg";
import sakeImage from "../Images/photo10.jpg";
import childImage from "../Images/photo09.jpg";
import treeImage from "../Images/photo15.jpg";
import { ChildContent } from "../Hero/element";

const AboutUs = () => {
    return (
        <Background id="aboutus">
            <Container>
                <Title>
                    <h2>絆支・至誠塾について</h2>
                </Title>
                <ContentCenter>
                    <Content>
                        <Paragraph>
                            絆支は一人ひとりの絆を互いに支えあっていこう、至誠は誠の思いは必ず人を動かすもの、信念をもって人生を生き抜こう、である。
                        </Paragraph>
                        <Paragraph>
                            　塾が「父親」「母親」「兄弟」「故郷」となり、出会いのあったすべての方々が回帰すべき原点回帰、根源的な「場」になれるよう多くの出会いの機会を創造する。多くの方々との出会い、交流の場として様々な事業を提供していくことが目的である。次のステップでは、出会った方々と協働でのプログラムも用意していきたいと考える。
                        </Paragraph>
                        <Paragraph>
                            　色々な方の想いの連鎖が、一人の苦しみや悲しみはここで出会い、絆を深めた皆が自分のこととして分かち合い、その想いを10分の1、100分の1、1,000分の1にして、逆に楽しいこと、嬉しいことは皆で10倍、100倍にする、自分には大勢の仲間がいて、強い絆を持った多くの仲間がいること、将来に向けては、自分らしく、生き生きと、気概の心をもって行動していく一助にしたい。
                        </Paragraph>
                    </Content>
                </ContentCenter>
                <ChildContent>
                    <Title>◉また会おうの約束（Promise to meet again ）</Title>
                    <ContentLeft>
                        <Content>
                            <Paragraph>
                                絆支塾胎動のきっかけは、2000年に実施された、全国でも珍しい小中学生を対象とした１か月の長期Camp【山中友子隊体験村】が日立市もとやま自然の村キャンプ場をメイン会場で実施された。体験村修了式では、終了証ではなく【絆】証を子ども達に授与し、スタッフからの最後の一言は【また会おう】であった。{" "}
                            </Paragraph>
                            <Paragraph>
                                しかし、既にもとやま自然の村キャンプ場は閉村され、【また会おう】の場所、機会が閉ざされてしまったことから、子ども達との約束を守るべく2006年(H18)から再会のための交流空間を探す。
                            </Paragraph>
                            <Paragraph>
                                ※2006年(H18)、常陸太田市(旧里美村)で土地借用し7年間活動後、2013年(H25)に撤退。
                            </Paragraph>
                            <Paragraph>
                                その後、右往左往しながら、約1年の期間を要し、ここ入四間町ザル入、入四間町牧野農業協同組合の所有地を、当時、代表理事であった根本勝利氏のご理解とご支援もあり、2014年(H26)6月14日の牧野農業協同組合理事会において、全理事さんの了承が得られ、【また会おうの約束】の拠点・開拓が始まった。
                            </Paragraph>
                        </Content>
                    </ContentLeft>
                    <ContentRight>
                        <Image src={oldImage} alt="board" />
                    </ContentRight>
                    <Title>◉【山中友子】と【山中友子隊体験村】</Title>
                    <ContentLeft>
                        <Content>
                            <Paragraph>
                                絆支塾・交流拠点開拓の原点は、「山中友子」「山中友子体験村・29泊30日」である。
                            </Paragraph>
                            <Paragraph>
                                友子制度とは鉱山よ炭鉱にあった日本独特の職人組織。江戸時代に起源を持ち、坑内員たちは従弟関係で結ばのれるとともに、組織としては技能養成機能、相互扶助機能、自治的な集団機能を併せもっていた。
                            </Paragraph>
                            <Paragraph>
                                日立鉱山においても、赤沢銅山時代からこの「友子」が存在し、1968年(昭和43年)に「友子の取立式」を挙行するなど、閉山となるまで「友子」が残った。採鉱法や鉱石の見分け方などの技能と集団の掟などを親方のもとで学び、取立式で親分・子分の盃を交わし、3年3月10日のお礼暴行を経て、親分から照りたて免状を受け取り、一人前の友子として認められた。
                            </Paragraph>
                            <Paragraph>
                                ※大雄院の庫裏の裏手、囲いの中に「友子の墓」60基ほどの石塔がある。また、日鉱記念館においても「友子」が紹介されている。友子の組織は、一山に限定されていたが、制度としては全国的な共通性をもち、鉱夫にとって友子のメンバーになることが、日本の鉱山で働くための一般的資格であった」。
                            </Paragraph>
                        </Content>
                    </ContentLeft>
                    <ContentRight>
                        <Image src={sakeImage} alt="sake" />
                    </ContentRight>
                    <ContentLeft>
                        <Content>
                            <Paragraph>
                                「友子」は全国の鉱山にあった徒弟制度であり、江戸期からの鉱山用語で親分、子分の関係を持った坑夫組合(の一員)を指し、「山中友子」「同盟友子」とも呼ばれた友子制度は、独特な掟で結ばれた、互いに助け合う互助制度の精神をもと
                                　　　　　　　　　　　　　に、その絆は、実の親や兄弟よりも強いものであったといわれる。全国各地から働きに来た知らない者同士が安心して仲良く暮らせるように始まった強い絆を持つ山中友子制度。時代の流れと共に姿を消した【山中友子】を現代版として復活させ、不易と流行の想いの連鎖の実現を目的に、その長期キャンプ名を【山中友子隊体験村】と名付け、2000年(H12)から実施された。初年度は7市町村32名の子ども達が参加。
                            </Paragraph>
                        </Content>
                    </ContentLeft>
                    <ContentRight>
                        <Image src={childImage} alt="child" />
                    </ContentRight>
                    <Title>
                        　◉【夢の続き】(The continuation of the dream)
                    </Title>
                    <ContentCenter>
                        <Content>
                            <Paragraph>
                                一会一生、一度会ったら皆友達という考えの造語。縁があれば未来永劫、子ども、孫・・・まで。沢山の人との出会い、そこから得られるものすべては自身の力の源となる。人は夢失くした時、はじめて老える、という言葉がある。生涯とも多くの方々と出会い語り合うという夢を持ち続けていきたい。「内に求める心なくば、眼の前にその人ありといえども縁は生じず」である。
                            </Paragraph>
                        </Content>
                    </ContentCenter>
                    <Title>◉【シンボルツリー】(Symbol Tree)</Title>
                    <ContentLeft>
                        <Content>
                            <Paragraph>
                                塾敷地の中心部に植樹。ユズリハ【譲葉】は、新しい葉が古い葉と入れ替わるように出てくる性質から「親が子を育てて家が代々続いていく」ことを連想させる縁起木とされる。常緑樹でありながら、若葉に座を譲るように、春に古い葉が落ちて新しい葉と入れ替わる。春に枝先に若葉が出たあと、前年の葉がそれに譲るように落葉することに由来する。素晴らしい出会い、かけがえのない出会いと絆を、子ども達（後世）に伝え、永久の絆を重ね、繋げていく想いからユズリハを植樹。
                            </Paragraph>
                        </Content>
                    </ContentLeft>
                    <ContentRight>
                        <Image src={treeImage} alt="tree" />
                    </ContentRight>
                    <Title>◉【メッセージボード】(Message Board)</Title>
                    <ContentLeft>
                        <Content>
                            <Paragraph>
                                直接出会いのなかった方でも、来塾した方との出会いとして、想いのコメントを書いていただくもの。メッセージノートも設置し、自由に書いていただく。テントとテ一ブルも用意し、おしゃべり、休憩空間として利用できる。
                            </Paragraph>
                        </Content>
                    </ContentLeft>
                    <ContentRight>
                        <Image src={boardImage} alt="tree" />
                    </ContentRight>
                </ChildContent>
            </Container>
        </Background>
    );
};

export default AboutUs;
