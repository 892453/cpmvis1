import React from 'react'
import { ScrollRankingBoard } from '@jiaminghi/data-view-react'
import Section from '@/components/section'
   

const data1= [
    {
      name: '2020年9月',
      value: 5.4
    },
    {
      name: '2020年8月',
      value: 5.6
    },
    {
      name: '2020年7月',
      value: 5.7
    },
    {
      name: '2020年6月',
      value: 5.7
    },
    {
      name: '2020年5月',
      value: 5.9
    },
    {
        name: '2020年4月',
        value: 6.0
      },
    {
        name: '2020年3月',
        value: 5.9
      },
    {
        name: '2020年2月',
        value: 6.2
      },
    {
        name: '2020年1月',
        value: 5.3
      }
      ,
    {
        name: '2019年12月',
        value: 5.2
      }


  ]
  const config={
    data:data1,
    colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
    unit: '%',
    rowNum:6,
    waitTime:2000,
    carousel:'single',
    colors:['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c', '#ff9f7f'],
    
  }
  
export default function Index() {
   

    return (
        <Section title="失业率变化统计">
            <ScrollRankingBoard config={config} />
        </Section>
    )
}