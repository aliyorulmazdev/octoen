import { Card } from "@/components/ui/card";

export default function Component({ title, image, location, details, status }) {
  return (
    <Card className="w-[272px] h-[350] bg-gray-100 border-0 p-4 rounded-lg flex flex-col items-center relative">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold mr-2 text-blue-900 ">{title}</h3>
        </div>
        <div className="ml-auto">
          <CircleIcon status={status} />
        </div>
      </div>
      <img
        alt={title}
        className="my-4"
        height="300"
        src={image}
        style={{
          aspectRatio: "400/300",
          objectFit: "cover",
        }}
        width="400"
      />
      <div className="text-left w-full">
        <p className="text-sm font-bold text-blue-900 ">{location}</p>
        <p className="text-sm font-bold text-blue-900 ">{details}</p>
      </div>
    </Card>
  );
}

function CircleIcon({ status, ...props }) {
  const color = status ? "text-green-500" : "text-red-500"; // Yeşil veya kırmızı renk seçimi
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill={status ? "currentColor" : "red"} // İçi dolu veya dolu olmayan daire seçimi
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={color}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}
