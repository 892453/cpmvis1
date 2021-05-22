import React from 'react'
import Realtime from "./compoents/real_time"
import Video from "./compoents/video"
import { Row, Col } from "antd"
import style from './index2.less'
import Cap from './compoents/cap'

export default function Board() {
    return (
        <Row gutter={16} className={style.board}>
            <Col span={12} className="board-left">
                <Realtime />
            </Col>
            <Col  span={12} className="board-right">
                <div className="video">
                    <Video/>
                </div>
                <div className="notice">
                    <Cap />
                </div>
                
            </Col>

            
        </Row>
    )
}