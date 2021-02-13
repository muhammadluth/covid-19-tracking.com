import React from "react";
import { Pie } from "react-chartjs-2";

export const ChartPercentage = ({ active, recovered, deaths, key }) => {
    const state = {
        labels: ["Positive", "Recovered", "Deaths"],
        datasets: [
            {
                backgroundColor: ["#ffd32a", "#0be881", "#ff3f34"],
                data: [active, recovered, deaths]
            }
        ]
    };

    return (
        <div>
            <Pie
                key={key}
                height={75}
                width={100}
                data={state}
                options={{
                    legend: {
                        display: true,
                        position: "right"
                    },
                }}
            />
        </div>
    );
}