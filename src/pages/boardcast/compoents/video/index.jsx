import React, { Component } from 'react';
import Section from "@/components/section"
import { Row,Col,Button,Tooltip } from "antd"
import { BorderBox8 } from '@jiaminghi/data-view-react'
import { Player,
        ControlBar,
        PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
        ReplayControl, // 后退按钮
        ForwardControl,  // 前进按钮
        CurrentTimeDisplay,
        TimeDivider,
        PlaybackRateMenuButton,  // 倍速播放选项
        VolumeMenuButton,
        BigPlayButton} from 'video-react';
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
    changeSource=(name)=> {
        console.log(sources[name])
        this.setState({
            source:sources[name]
        })
         
        
      }
    render() {
        return (
        <Section title="疫情知识科普视频" style={{margin:"10px auto 20px 0"}}>
            <Row gutter={16} style={{margin:"10px auto auto auto"}}>
        {/* 左边三个按钮列 */}
                <Col style={{height:"100%",width:"25%",direction:"column"}}>
                <span>轻触查看视频的简介</span>
            {/* 视频1 */}
                <div>
                <Tooltip placement="right" title="这是一个测试视频" arrowPointAtCenter>
                    <Button ghost onClick={this.changeSource.bind(this,'video1')} className="1">
                        Video1
                    </Button>
                </Tooltip></div>
            {/* 视频2 */}
                <div>
                <Tooltip placement="right" title="这是视频《关于新冠肺炎的一切》,点击即可观看" arrowPointAtCenter>
                    <Button ghost onClick={this.changeSource.bind(this,'video2')} className="2">
                        Video2
                </Button> </Tooltip></div>
            {/* 视频3 */}
                <Tooltip placement="right" title="这是测试视频" arrowPointAtCenter>
                    <Button ghost onClick={this.changeSource.bind(this,'video3')} className="3">
                        Video3
                </Button></Tooltip>
                </Col>
        {/* 右边播放器列 */}
                <Col style={{height:"100%",width:"70%"}}>
                <BorderBox8>
                    <div>
                        <Player
                            playsInline src={this.state.source}
                            style={{margin:"auto"}}
                        //autoPlay 进入后自动播放
                        poster="../../assets/img/img1.jpg"
                        
                        >
                            <source src={this.state.source} />
                        
                            <BigPlayButton position="center" />
                            <ControlBar className="my-class">
                                <PlayToggle order={6.1}/>
                                <ReplayControl seconds={5} order={6.2}/>
                                <ForwardControl seconds={10} order={6.3} />
                                <CurrentTimeDisplay order={6.4} />
                                <TimeDivider order={6.5} />
                                <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={6.6} />
                                <VolumeMenuButton /> 
                            </ControlBar>
                        </Player>
                    </div>
                </BorderBox8>      
                </Col>
            </Row>
        </Section>
        );
    }
}

export default Video;