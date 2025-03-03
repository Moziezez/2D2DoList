'use client';
import React from "react";
import dynamic from "next/dynamic";
import { PlotData, Layout } from "plotly.js";

const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

interface Points {
  names: string[];
  x: number[];
  y: number[];
}

interface XyPlotProps {
  points: Points;
}

const XyPlot: React.FC<XyPlotProps> = ({ points }) => {
  const data: Partial<PlotData>[] = [
    {
      x: points.x,
      y: points.y,
      type: "scatter",
      mode: "markers",
      marker: { color: "red" },
      text: points.names,
    },
  ];

  const layout: Partial<Layout> = {
    title: {
      text: '2D2DoList',
      font: {
        family: 'Courier New, monospace',
        size: 24
      },
      xref: 'paper',
      x: 0.05,
    },
    width: 600,
    height: 600,
    xaxis: {
      title: {
        text: 'Dringend ↦',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
      range: [-10, 10],
      dtick: 1,
      showgrid: true,
      showticklabels: false,
    },
    yaxis: {
      title: {
        text: 'Wichtig ↦',
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: '#7f7f7f'
        }
      },
      range: [-10, 10],
      dtick: 1,
      showgrid: true,
      showticklabels: false
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Deine Aufgaben in zwei Dimensionen:</h2>
      <Plot
        data={data}
        layout={layout}
      />
    </div>
  );
};

export default XyPlot;