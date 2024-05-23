"use client";
import { useState } from "react";
import { CiBatteryEmpty, CiBullhorn, CiClock1, CiWifiOn } from "react-icons/ci";
import InformationComponent from "./InformationComponent";
import BarChartComponent from "./BarChartComponent";
import CartComponent from "./Cart";
import MachineInformationComponent from "./MachineInformationComponent";

function MiddleComponent() {
  const [data1, setData1] = useState([
    { name: "Ptesi", count: 111 },
    { name: "Salı", count: 157 },
    { name: "Çarş", count: 129 },
    { name: "Perş", count: 150 },
    { name: "Cuma", count: 119 },
    { name: "Ctesi", count: 150 },
    { name: "Pazar", count: 119 },
  ]);

  const [data2, setData2] = useState([
    { name: "Ptesi", count: 5 },
    { name: "Salı", count: 15 },
    { name: "Çarş", count: 25 },
    { name: "Perş", count: 35 },
    { name: "Cuma", count: 45 },
    { name: "Ctesi", count: 55 },
    { name: "Pazar", count: 65 },
  ]);

  const items = [
    {
      text: "Çalışma Süresi",
      color: "green",
      icon: <CiClock1 />,
      duration: "120",
    },
    {
      text: "Isı",
      color: "#dfc204",
      icon: <CiBatteryEmpty />,
      duration: "300°C",
    },
    {
      text: "Kapasitesi",
      color: "gray",
      icon: <CiBullhorn />,
      duration: "300kg",
    },
    {
      text: "Enerji Tüketimi",
      color: "#006eff",
      icon: <CiWifiOn />,
      duration: "4kWh",
    },
    {
      text: "Kalan Süre",
      color: "green",
      icon: <CiClock1 />,
      duration: "4 Saat",
    },
  ];

  const cardData = [
    {
      title: "ECO-300KSN",
      image: "/assets/TempMachine.png",
      location: "The Green Park",
      details: "Sivas/Turkey",
      status: true,
    },
    {
      title: "ECO-400KSN",
      image: "/assets/TempMachine.png",
      location: "The Yellow Park",
      details: "İzmir/Turkey",
      status: false,
    },
    {
      title: "ECO-500KSN",
      image: "/assets/TempMachine.png",
      location: "The Orange Park",
      details: "Mersin/Turkey",
      status: false,
    },
    {
      title: "ECO-600KSN",
      image: "/assets/TempMachine.png",
      location: "The Dark Park",
      details: "Çanakkale/Turkey",
      status: false,
    },
  ];

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="pt-5">
        <MachineInformationComponent
          machineName="ECO-300KSN"
          serialNumber="12213518"
          location="The Green Park Sivas/Turkey"
          status={true}
        />
      </div>
      <div className="flex flex-shrink gap-20 justify-center items-center pt-1">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <InformationComponent
              color={item.color}
              icon={item.icon}
              text={item.text}
              duration={item.duration}
            />
          </div>
        ))}
      </div>
      <div
        className="flex flex-shrink gap-20 justify-center items-center pt-1"
        style={{ width: "2000px" }}
      >
        {[
          { data: data1, title: "ÜRETİM" },
          { data: data2, title: "ENERJİ TÜKETİMİ" },
        ].map((item, index) => (
          <div key={index} style={{ width: "28%" }}>
            <BarChartComponent data={item.data} title={item.title} />
          </div>
        ))}
      </div>
      <div className="flex flex-shrink gap-10 justify-center items-center pt-1 pb-3">
        {cardData.map((item, index) => (
          <CartComponent
            key={index}
            title={item.title}
            image={item.image}
            location={item.location}
            details={item.details}
            status={item.status}
          />
        ))}
      </div>
    </div>
  );
}

export default MiddleComponent;
