import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ResponsiveBar } from "@nivo/bar";

export default function BarChartComponent({ data, title }) {
  const [timeRange, setTimeRange] = useState("week");

  const handleTimeRangeChange = (range) => {
    setTimeRange(range);
    // Fetch data based on the selected range
    // Example: fetchData(range);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg">
      <div className="flex items-center justify-between w-full mb-4">
        <h2 className="text-lg font-semibold text-blue-900">{title}</h2>
        <div className="flex ml-auto space-x-2">
          <Button
            className={`text-xs rounded-full ${
              timeRange === "week" && "bg-green-500 text-white rounded-full"
            }`}
            variant={timeRange === "week" ? "outline" : "ghost"}
            onClick={() => handleTimeRangeChange("week")}
          >
            HAFTA
          </Button>
          <Button
            className={`text-xs rounded-full  ${
              timeRange === "month" && "bg-green-500 text-white rounded-full"
            }`}
            variant={timeRange === "month" ? "outline" : "ghost"}
            onClick={() => handleTimeRangeChange("month")}
          >
            AY
          </Button>
          <Button
            className={`text-xs rounded-full ${
              timeRange === "year" && "bg-green-500 text-white rounded-full"
            }`}
            variant={timeRange === "year" ? "outline" : "ghost"}
            onClick={() => handleTimeRangeChange("year")}
          >
            YIL
          </Button>
        </div>
      </div>
      <BarChart data={data} className="w-full h-[150px]" />
    </div>
  );
}

function BarChart({ data, ...props }) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={data}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#dbdbdb"]}
        borderRadius={10}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}
