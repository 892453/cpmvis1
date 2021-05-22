import React, { useState, useEffect } from "react"
import Section from "@/components/section"
import { Table, Select } from "antd"
import { axios } from "@/services"
import moment from "moment"

const columns = [
	{
		title: "排名",
		dataIndex: "Rank",
		width: "60px",
	},
	{
		title: "内容",
		dataIndex: "Content",
	},
	{
		title: "搜索次数",
		dataIndex: "SearchNum",
		width: "100px",
	},
]
export default function Index() {
	const [tableData, setTableData] = useState({})

	const [options, setOptions] = useState([])

	const [currentDate, setCurrentDate] = useState(
		moment().format("YYYY-MM-DD")
	)
	const timetest=new Date().toLocaleDateString()
	useEffect(() => {
		function initData() {
			//axios("weiboHotTop10.json").then((res) => {
			//axios("http://127.0.0.1:8777/getweibotop10").then((res) => {
			axios("http://172.81.247.83/opinion/getweibotop10").then((res) => {
				const data = res
					.map((d) => ({
						...d,
						SearchNum: Number(d.SearchNum),
					}))
					.reduce((obj, d) => {
						const key = d.Date
						if (!obj[key]) {
							obj[key] = []
						}
						obj[key].push(d)
						return obj
					}, {})

				const dates = Object.keys(data).sort(
					(a, b) => moment(a) - moment(b)
				)

				
				console.log(timetest)
				setTableData(data)
				setOptions(dates)
				setCurrentDate(moment(timetest).format("YYYY-MM-DD"))
				
			})
		}

		initData()
	}, [])

	function handleChangeDate(d) {
		setCurrentDate(d)
	}

	const selectOptions = options.map((d) => ({
		label: d,
		value: d,
	}))

	return (
		<Section
			title="热点话题"
			extra={
				<div style={{ textAlign: "right" }}>
					<Select
						value={currentDate}
						options={selectOptions}
						dropdownStyle={{ height: "200px" }}
						onChange={handleChangeDate}
					/>
				</div>
			}
		>
			<Table
				className="topic-table"
				rowKey="Rank"
				columns={columns}
				dataSource={tableData[currentDate] || []}
				scroll={{ y: "con" }}
				pagination={false}
			/>
		</Section>
	)
}
