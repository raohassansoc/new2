import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef } from "react";

const ChartComponent = (props) => {
  const {
    data,
    colors: {
      backgroundColor = "#303C3F", // Change background color to black
      lineColor = "red", // Change line color to white for better contrast
      textColor = "white", // Change text color to white for better contrast
      areaTopColor = "rgba(255, 255, 255, 0.4)", // Change area top color to semi-transparent white
      areaBottomColor = "rgba(255, 255, 255, 0.1)",
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      lineColor,
      topColor: areaTopColor,
      bottomColor: areaBottomColor,
    });
    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [
    data,
    backgroundColor,
    lineColor,
    textColor,
    areaTopColor,
    areaBottomColor,
  ]);

  return <div ref={chartContainerRef} />;
};

export default ChartComponent;
