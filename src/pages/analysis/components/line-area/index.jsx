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

	const container = useRef(null)
	const chart = useRef(null)
	useEffect(() => {
		const title =
			currentType === "迁入"
				? "省份-迁入规模指数.json"
				: "省份-迁出规模指数.json"
		//console.log("title:",title)   //表示迁入or迁出
		//console.log("province:",currentProvince)   //表示哪个省份
		
		//axios(title).then((res) => {
		//	const curData = res.find(
		//		(item) => item.migratename === currentProvince
		//	)
		axios({	
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			method:'post',
			url:"http://172.81.247.83/analysis/getprovince_in",
			data:Qs.stringify({
				"prov": currentProvince,
				"type": currentType
			})
		}).then((res) => {
			 const curData = res//.find(
			// 	(item) => item.migratename === currentProvince
			// )
			//console.log("analysis右下角data:",currentProvince,currentType)
			//console.log("右下return数据：",curData)    //post请求拿到的数据
			
			
			let keyArr = []
			let valueArr = []
			for (let key in curData) {
				if (key !== "migratename" && key !== "citycode") {
					keyArr.push(key)
					valueArr.push(curData[key])
				}
			}
			const option = {
				title: {
					text: `${currentProvince}${currentType}趋势`,
					textStyle: {
						color: "#fff",
					},
				},
				xAxis: {
					type: "category",
					boundaryGap: false,
					data: keyArr,
					axisLine: {
						show: false,
					},
					axisLabel: {
						color: "#fff",
					},
					axisTick: {
						show: false,
					},
				},
				yAxis: {
					type: "value",
					show: false,
				},
				tooltip: {
					trigger: "axis",
					axisPointer: {
						type: "cross",
						label: {
							backgroundColor: "#6a7985",
						},
					},
				},
				series: [
					{
						data: valueArr,
						type: "line",
						areaStyle: {},
					},
				],
			} //图标数据
			chart.current = echarts.init(container.current)
			chart.current.setOption(option)
			return () => {}
		})
	}, [selectAll])

	return <div className="chart-container" ref={container} />
}
