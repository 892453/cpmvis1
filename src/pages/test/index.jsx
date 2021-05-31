import React from "react"
import { Row, Col } from "antd"
import Table from './components/table'
import NewNCount from './components/newNCount'
import Rumors from './components/rumors'
import Calendar from './components/calendar'
import style from './index.less'
import Section from '@/components/section'
import BarChart from './components/barChart'
import Video from './components/video'
import Board from './components/real_time'


export default function test(){
    return(
        <div className={style.opinion}>
        <div className="opinion-left">
            <div className="opinionChart">
                <Video />
            </div>
            <div className="hotTopic">
                <Table />
            </div>
        </div>
        <div className="opinion-center">
            <div className="main-chart">
                <BarChart />
            </div>
            <div className="analys-table">
                <Rumors />
            </div>
        </div>
        <div className="opinion-right">
            <div className="calendar">
                <Board />
            </div>
        </div>
    </div>
    )
}