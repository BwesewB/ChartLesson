import { Pie } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 30, 14, 5, 12, 25],
                    borderColor: [
                        'rgba(235, 162, 235, 0.4)',
                        'rgba(53, 162, 235, 0.4)',
                        'rgba(162, 162, 235, 0.4)',
                        'rgba(53, 162, 53, 0.4)',
                        'rgba(53, 53, 235, 0.4)',
                        'rgba(53, 235, 235, 0.4)'
                    ],
                    backgroundColor: [
                        'rgba(235, 162, 235, 0.4)',
                        'rgba(53, 162, 235, 0.4)',
                        'rgba(162, 162, 235, 0.4)',
                        'rgba(53, 162, 53, 0.4)',
                        'rgba(53, 53, 235, 0.4)',
                        'rgba(53, 235, 235, 0.4)'
                    ],
                    borderWidth: 1
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display:true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive:true
        })
    }, [])

    return(
        <div>
            <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
        </div>
    )
}