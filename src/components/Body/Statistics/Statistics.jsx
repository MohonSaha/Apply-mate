import "./Statistics.css";
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "Assingment-1", value: 40 },
    { name: "Assingment-2", value: 48 },
    { name: "Assingment-3", value: 55 },
    { name: "Assingment-4", value: 60 },
    { name: "Assingment-5", value: 44 },
    { name: "Assingment-6", value: 56 },
    { name: "Assingment-7", value: 60 },
];

const COLORS = ["#21013c", "#00C49F", "#d59304", "#FF8042", "#9873FF", "#018016", "#5f0180",];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 602).toFixed(0)}%`}
        </text>
    );
};


const Statistics = () => {
    return (

        // <div className="cart-container">

        <div className="chart-container" style={{ width: '100%', height: 400 }}>
            <h1>Health Check</h1>
            <ResponsiveContainer>
                <PieChart className="chart" width={600} height={400}>
                    <Pie
                    className="pie-chart"
                        data={data}
                        // cx={600}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </PieChart>

            </ResponsiveContainer>
        </div>

        // </div>
    );
}





export default Statistics;
