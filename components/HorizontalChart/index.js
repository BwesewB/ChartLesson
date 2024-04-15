import { Bar } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function HorizontalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Data 1',
                    data: [10, 30, 14, 5, 12, 25, 17],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                },
                {
                    label: 'Data 2',
                    data: [10, 30, 14, 5, 12, 25, 17],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(100, 12, 235, 0.4)'
                },
                {
                    label: 'Data 3',
                    data: [10, 30, 14, 5, 12, 25, 17],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(200, 62, 235, 0.4)'
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y', //This changes the orinetation of the graph
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display:true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: true,
            responsive:true
        })
    }, [])

    return(
        <div>
            <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
        </div>
    )
}