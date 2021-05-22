import React, { useEffect, useState } from 'react'
import Section from '@/components/section'
import { Table } from 'antd'
import axios from '@/services'

const columns = [{
    title: '时间',
    dataIndex: 'data'
},
{
    title: '播报内容',
    dataIndex: 'news'
},
]

export default function Index() {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        function initTableData() {
            axios('http://www.aifixerpic.icu/board/get_realboard').then(res => {
                setTableData(res)
            })
        }
        initTableData()
        return () => {
        }
    }, [])
    return (
        <Section title="疫情播报">
        <Table
            rowKey="data"
            columns={columns}
            dataSource={tableData}
            scroll={{
                y: true
            }}
            pagination={false}
        />
    </Section>
    )

}