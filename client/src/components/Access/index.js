import React from "react";
import {
    Background,
    Container,
    Content,
    ContentLeft,
    ContentRight,
    Map,
    Paragraph,
    Iframe,
    Title,
    ParagraphContent,
    ParagraphContentRight,
} from "./element";
import { ContentCenter } from "../AboutUs/element";

const Access = () => {
    return (
        <Background id="access">
            <Container>
                <ContentLeft>
                    <Title>
                        <h1>アクセス</h1>
                    </Title>
                    <Content>
                        <Paragraph>名称：絆支・至誠塾</Paragraph>
                        <Paragraph>
                            住所：〒311-0402　茨城県日立市入四間町1566-9
                        </Paragraph>
                        <Paragraph>電話番号：080-1080-7396</Paragraph>
                        <Paragraph>メール：hanshishisei@gmail.com</Paragraph>
                        <Paragraph>
                            開塾時間: 　 4/1～10/31 9:00～17:00 <br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11/1～12/25
                            9:00～15:30
                        </Paragraph>
                        <Paragraph>
                            休塾: 　1月～3月毎週第二・第四日曜日<br></br>
                            　&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(プログラムにより開塾する場合もあります)
                        </Paragraph>
                    </Content>
                </ContentLeft>
                <ContentRight>
                    <Map>
                        <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1684.105045236614!2d140.58694781490064!3d36.648884932937065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sjp!4v1637981295006!5m2!1sen!2sjp"
                            width="600"
                            height="650"
                            loading="lazy"
                        ></Iframe>
                    </Map>
                </ContentRight>
            </Container>
            <Container>
                <ContentCenter>
                    <Content>
                        <h3>交通アクセス:</h3>
                        <Paragraph>車</Paragraph>
                        <ParagraphContent>
                            JR日立駅～茨城交通バスで約30分(東河内行き「中里スポーツ広場」下車)
                            <br></br>
                            常磐自動車道「日立中央IC」～車で約10分
                        </ParagraphContent>
                        <ParagraphContent>
                            【「日立中央IC」出口丁字路を右折し日立山方線へ、もとやまトンネル・御岩神社を
                            <br></br>
                            ぬけ最初の信号を右折し、グリ一ンふるさとラインを約1.3km、左側に塾看板があり、そこ
                            <br></br>から約500mです】
                        </ParagraphContent>
                        　<Paragraph>電車　</Paragraph>
                        <ParagraphContent>
                            JR常磐線「日立駅」下車
                            <br></br>
                            上野駅～約90分
                        </ParagraphContent>
                    </Content>
                </ContentCenter>
            </Container>
        </Background>
    );
};

export default Access;
