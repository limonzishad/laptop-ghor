import React from "react";
import './Dashboard.css';
import { Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from "recharts";

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <div className="chart-container">
            <div className="chart-box">
                <LineChart width={400} height={400} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="sell" />
                    <Tooltip />
                    <Line type="monotone" dataKey="month" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                </LineChart>
            </div>
            <div className="chart-box">
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="investment"
                        isAnimationActive={true}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        fill="#8884d8"
                        label
                    />
                    <Pie dataKey="revenue" data={data} cx={500} cy={200} innerRadius={50} outerRadius={80} fill="#82ca9d" />
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );
}

export default Dashboard;