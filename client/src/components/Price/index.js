import React from "react";
import {
    Background,
    Container,
    Content,
    ContentLeft,
    ContentRight,
    Image,
    Li,
    Title,
    Ul,
} from "./element";
import photo04 from "../Images/photos008.jpg";

const Price = () => {
    return (
        <Background id="price">
            <Container>
                <ContentLeft>
                    <Image src={photo04} alt="board" />
                </ContentLeft>
                <ContentRight>
                    <Title>
                        <h1>メニュー</h1>
                    </Title>
                    <Content>
                        <Ul>
                            <Li>イベント、教室講座</Li>
                            <Li>BBQ</Li>
                            <Li>竹バ－ムク－ヘン</Li>
                            <Li>本格ピザ焼き</Li>
                            <Li>ダンボールピザ</Li>
                            <Li>かき氷</Li>
                            <Li>40m流しそうめん</Li>
                            <Li>ボ一ル蹴りアイスクリ一ム</Li>
                            <Li>燻製づくり</Li>
                            <Li>焼き芋づくり</Li>
                            <Li>軽トラプ一ル</Li>
                            <Li>ハンモック</Li>
                            <Li>ドラム缶風呂(ステンレス)</Li>
                            <Li>野外音楽ライブ・コンサ一ト</Li>
                            <Li>餅つき</Li>
                            <Li>凧あげ</Li>
                            <Li>ダッチオーブンで鶏の丸焼き</Li>
                            <Li>母屋で鍋・焼き魚</Li>
                            <Li>スイカ割・種飛ばし</Li>
                            <Li>セトモノ投げ(ストレス発散)</Li>
                            <Li>ススキのふくろう</Li>
                            <Li>まつぼっくりクラフト</Li>
                            <Li>青少年キャンプ(デイ、1泊2日)</Li>
                            <Li>親子キャンプ(デイ、1泊2日、春夏秋冬)</Li>
                            <Li>アロマセラピー講座</Li>
                            <Li>イベント、教室・講座</Li>
                            <Li>
                                スカベンジャ－ハント(ゴミ拾い競争。実際はゴミではなく、落ち葉
                                ※「キャンピングボ一ド」ダウンロ一ド可能
                            </Li>
                            <Li>
                                どんぐり・鳥の羽等の自然の落とし物)。ボ一ドに5×5のアイテムを印刷したものを貼る。参加者にも5×5のアイテムを印刷したものを首から下げられるものを用意。ビンゴのように揃ったら勝ちとか、沢山拾ったらお菓子を挙げるとかルールを作っておく。
                            </Li>
                            <Li>キャンプファイヤ－</Li>
                            <Li>中学生の夢への挑戦を応援するプロジェクト</Li>
                            <Li>ブライダルイベント</Li>
                            <Li>東洋大学　国際学部　地域活動受入</Li>
                            <Li>フリーマーケット</Li>
                        </Ul>
                    </Content>
                </ContentRight>
            </Container>
        </Background>
    );
};

export default Price;
