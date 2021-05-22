import React, { useRef, useEffect, useState, useContext } from "react"
import echarts from "echarts"
import "echarts/map/js/china"
import style from "./index.less"
import myContext from "../../../../assets/js/createContext"
import axios from "@/services"
import Qs from 'qs'

export default function Radar() {
	const selectAll = useContext(myContext) // 得到父组件传的值
	const currentProvince = selectAll.curProvince
	const currentType = selectAll.curType
	const curentData = selectAll.curDate

	const container = useRef(null)
	const chart = useRef(null)
	useEffect(() => {
		const title =
			currentType === "迁入"
				? `${currentProvince}-迁入来源地.json`
				: `${currentProvince}-迁出目的地.json`
		//console.log("title:",title)
		
		let data = {
			"prov": currentProvince,
			"type": currentType
		}

		//axios(title).then(
		//	(res) => {
		axios({	
				//headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				method:'post',
				url:"http://172.81.247.83/analysis/getprovince_imgrant",
				data:Qs.stringify({
					"prov": currentProvince,
					"type": currentType
				})
			}).then(
			(res) => {
				//console.log(data)
				//console.log("return：",res)

				let currentData = Array.from(
					new Set(
						res.map((item) => {
							let obj = {}
							obj.source = currentProvince
							obj.target = item.migratename
							obj.value = Number(item[curentData])
							return obj
						})
					)
				)
				currentData = currentData.filter(
					(item) => !!item.value && item.target !== currentProvince
				)
				let DateName = Array.from(
					new Set(
						currentData.map((item) => {
							let obj = {}
							obj.name = item.target
							return obj
						})
					)
				)
				DateName.push({ name: currentProvince })

				const option = {
                    title: {
						show: false,
                        text: `迁移图`,
                        textStyle: {
                            color: "#fff",
                        },
                    },
					series: {
						type: "sankey",
						layout: "none",
						focusNodeAdjacency: "allEdges",
						data: DateName,
						links: currentData,
						label: {
							fontSize: 14,
							color: "#fff",
						},
					},
					tooltip: {
						trigger: "item",
					},
					
				} //图标数据

				chart.current = echarts.init(container.current)
				chart.current.setOption(option)
				return () => {}
			},
			[selectAll]
		)
	})

	return <div className="chart-container" ref={container} />
}
