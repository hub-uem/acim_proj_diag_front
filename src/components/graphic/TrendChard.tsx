"use client";

import React, { useEffect, useState } from "react";
import { scaleLinear, scaleBand } from "@visx/scale";
import { Group } from "@visx/group";
import { AxisLeft, AxisBottom } from "@visx/axis";
import { GridRows, GridColumns } from "@visx/grid";
import { localPoint } from "@visx/event";
import { Tooltip, useTooltip, defaultStyles } from "@visx/tooltip";
import { line, curveMonotoneX } from "d3-shape";
import { motion } from "framer-motion";
import type { RelatorioDate } from "@/redux/features/questionnaireApiSlice";
import { useGetRelatorioDatesQuery } from "@/redux/features/questionnaireApiSlice";

const width = 1000;
const height = 600;
const margin = { top: 20, right: 40, bottom: 70, left: 150 };

const tooltipStyles = {
  ...defaultStyles,
  backgroundColor: "#058AFF",
  border: "2px solid #F2F2F2",
  borderRadius: 6,
  color: "white",
  padding: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
};

export default function TrendChart() {
  const { data: availableDatesRaw = [] } = useGetRelatorioDatesQuery();
  const [rawData, setRawData] = useState<RelatorioDate[]>([]);

  useEffect(() => {
    if (availableDatesRaw && Array.isArray(availableDatesRaw)) {
      setRawData(availableDatesRaw as RelatorioDate[]);
    }
  }, [availableDatesRaw]);

  const filteredData = rawData.filter(
    (d): d is RelatorioDate =>
      !!d && typeof d.valorFinal === "number" && !!d.data
  );

  let dateLabels = filteredData.map((d) =>
    new Date(d.data).toLocaleDateString("pt-BR", {
      month: "short",
      year: "numeric",
    })
  );

  if (dateLabels.length === 1) {
    dateLabels = [dateLabels[0], ""]; // adiciona faixa fantasma
  }

  const xScale = scaleBand({
    domain: dateLabels,
    range: [0, width -  margin.left - margin.right],
    padding: 0, 
  });

  const yScale = scaleLinear({
    domain: [0, Math.max(...filteredData.map((d) => d.valorFinal)) * 1.1],
    range: [height - margin.bottom, margin.top], // de baixo para cima
  });

  const y = (d: RelatorioDate) => yScale(d.valorFinal) ?? 0;

  const x = (d: RelatorioDate) =>
    (xScale(
      new Date(d.data).toLocaleDateString("pt-BR", {
        month: "short",
        year: "numeric",
      })
    ) ?? 0) + margin.left;

  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft,
    tooltipTop,
  } = useTooltip<RelatorioDate>();

  const lineGenerator = line<RelatorioDate>()
    .defined((d) => !!d && typeof d.valorFinal === "number" && !!d.data)
    .x(x)
    .y(y)
    .curve(curveMonotoneX); // Curva horizontal

  const pathData = lineGenerator(filteredData) ?? "";

  return (
    <div className="relative">
      <svg width={width} height={height}>
        <GridRows
          scale={yScale}
          width={width - margin.left - margin.right}
          left={margin.left}
          stroke="#e5e7eb"
        />
        <GridColumns
          scale={xScale}
          height={height - margin.top - margin.bottom}
          top={margin.top}
          stroke="#f3f4f6"
        />
        <AxisBottom
          top={height - margin.bottom}
          left={margin.left} // <== ADICIONE isso!
          scale={xScale}
          label="DATAS DE RESPOSTAS"
          stroke="#0D0D0D"
          tickStroke="#0D0D0D"
          labelProps={{
            fontSize: 15,
            fontWeight: "bold",
            fill: "#058AFF",
            dy: "2.5em",
            textAnchor: "start",
          }}
          tickLabelProps={() => ({
            fill: "#00247c",
            fontSize: 15,
            fontWeight: "bold",
            textAnchor: "middle",
            angle: -30,           
            dx: "0.5em",
            dy: "0.5em",
          })}
        />
        <AxisLeft
          top={0}
          left={margin.left}
          scale={yScale}
          stroke="#0D0D0D"
          tickStroke="#0D0D0D"
          label="VALOR FINAL"
          labelProps={{
            fontSize: 15,
            fontWeight: "bold",
            fill: "#058AFF",
            dx: "-6.0em",
            textAnchor: "middle",
          }}
          tickLabelProps={() => ({
            fill: "#00247c",
            fontSize: 15,
            fontWeight: "bold",
            textAnchor: "end",
            dx: "-0.5em",
            dy: "0.25em",
          })}
        />
        <Group>
          <motion.path
            d={pathData}
            fill="none"
            stroke="#00247c"
            strokeWidth={3}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {filteredData.map((d, i) => {
            const cx = x(d);
            const cy = y(d);

            return (
              <g key={i}>
                {/* Linha vertical conectando data ao ponto */}
                <line
                  x1={cx}
                  x2={cx}
                  y1={height - margin.bottom}
                  y2={cy}
                  stroke="#ccc"
                  strokeDasharray="4,2"
                />
                {/* Ponto no gráfico */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={6}
                  fill="#058AFF"
                  stroke="white"
                  strokeWidth={2}
                  onMouseMove={(e) => {
                    const coords = localPoint(e);
                    showTooltip({
                      tooltipData: d,
                      tooltipLeft: coords?.x,
                      tooltipTop: coords?.y,
                    });
                  }}
                  onMouseLeave={hideTooltip}
                />
              </g>
            );
          })}
        </Group>
      </svg>

      {tooltipData && (
        <Tooltip
          top={tooltipTop}
          left={tooltipLeft}
          style={tooltipStyles}
        >
          <div>
            <strong>Data:</strong>{" "}
            {new Date(tooltipData.data).toLocaleDateString("pt-BR")}
          </div>
          <div>
            <strong>Valor:</strong> {tooltipData.valorFinal}
          </div>
        </Tooltip>
      )}
    </div>
  );
}
