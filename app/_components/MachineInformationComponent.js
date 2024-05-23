import { Card } from "@/components/ui/card";

export default function MachineInformationComponent({
  machineName,
  serialNumber,
  location,
  status,
}) {
  // Durumun yeşil veya kırmızı olması için renk sınıfını belirleyelim
  const statusColorClass = status ? "bg-green-500" : "bg-red-500";

  return (
    <Card className="w-[1200px] border-0 shadow-none">
      <div className="flex justify-between items-center p-4 bg-white">
        <div className="flex items-center">
          <img
            alt="Machine"
            className="h-24 mr-4"
            height="60"
            src="/assets/TempMachine.png"
            style={{
              aspectRatio: "120/60",
              objectFit: "cover",
            }}
            width="120"
          />
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-blue-900">{machineName}</h2>
            <p className="text-sm font-medium text-blue-900">{serialNumber}</p>
            <div className="flex items-center space-x-1">
              <span className="text-sm font-bold text-blue-900">
                Makine Durumu
              </span>
              <span
                className={`block w-3 h-3 rounded-full ${statusColorClass}`}
              />
            </div>
          </div>
        </div>
        <div className="text-right">
          <h3 className="text-lg font-bold text-blue-900">Konum</h3>
          <p className="text-sm font-bold text-blue-900">{location}</p>
        </div>
      </div>
    </Card>
  );
}
