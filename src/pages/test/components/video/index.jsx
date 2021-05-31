import React, { Component } from 'react';
import Section from "@/components/section"
import { Row, Col, Button, Tooltip } from "antd"
import { BorderBox8 } from '@jiaminghi/data-view-react'
import {
    Player,
    ControlBar,
    PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
    ReplayControl, // 后退按钮
    ForwardControl,  // 前进按钮
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,  // 倍速播放选项
    VolumeMenuButton,
    BigPlayButton
} from 'video-react';
import "../../../../../node_modules/video-react/dist/video-react.css"

//视频资源url
const sources = {
    video1: 'http://www.aifixerpic.icu/music/download_mp3?filename=比赛回顾.mp4',
    video2: 'http://www.aifixerpic.icu/music/download_mp3?filename=关于新冠肺炎的一切.mp4',
    video3: 'http://www.aifixerpic.icu/music/download_mp3?filename=perfect_turmp.mp4'
};

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: sources.video2
        };
    }


    //修改视频资源的函数
    changeSource = (name) => {
        console.log(sources[name])
        this.setState({
            source: sources[name]
        })


    }
    render() {
        return (
            <Section title="疫情知识科普视频" style={{ margin: "10px auto 20px 0" }}>
                <Row justify="center">
                    <Col span={24}>
                        <div>
                            <Player
                                playsInline src={this.state.source}
                                style={{ height: "100%", height: "100%" }}
                                //autoPlay 进入后自动播放
                                poster="../../assets/img/img1.jpg"

                            >
                                <source src={this.state.source} />

                                <BigPlayButton position="center" />
                                <ControlBar className="my-class">
                                    <PlayToggle order={6.1} />
                                    <ReplayControl seconds={5} order={6.2} />
                                    <ForwardControl seconds={10} order={6.3} />
                                    <CurrentTimeDisplay order={6.4} />
                                    <TimeDivider order={6.5} />
                                    <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={6.6} />
                                    <VolumeMenuButton />
                                </ControlBar>
                            </Player>
                        </div>
                    </Col>
                </Row>

                <Row gutter={48} justify="center" style={{ marginTop: "30px" }}>
                    <Col span={4}>
                        <Tooltip placement="right" title="科普视频1" arrowPointAtCenter>
                            <Button ghost onClick={this.changeSource.bind(this, 'video1')} className="1">
                                Video1
                            </Button>
                        </Tooltip>
                    </Col>
                    <Col span={4}>
                        <Tooltip placement="right" title="这是科普视频《关于新冠肺炎的一切》,点击即可观看" arrowPointAtCenter>
                            <Button ghost onClick={this.changeSource.bind(this, 'video2')} className="2">
                                Video2
                            </Button> </Tooltip>
                    </Col>
                    <Col span={4}>
                        <Tooltip placement="right" title="这是科普视频3" arrowPointAtCenter>
                        <Button ghost onClick={this.changeSource.bind(this,'video3')} className="3">
                            Video3
                        </Button></Tooltip>
                    </Col>

                </Row>


            </Section>
        );
    }
}

export default Video;