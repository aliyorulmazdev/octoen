import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import NotificationComponent from "./NotificationComponent";

export default function ControlComponent() {
  const notifications = [
    {
      message:
        "ECO-300kSN 121312321 seri nolu cihazınız dönüşüm işlemini tamamladı.",
      time: "12:56",
    },
    {
      message:
        "ECO-300kSN 121312322 seri nolu cihazınız dönüşüm işlemini tamamladı.",
      time: "13:00",
    },
    {
      message:
        "ECO-300kSN 121312323 seri nolu cihazınız dönüşüm işlemini tamamladı.",
      time: "13:05",
    },
    {
      message:
        "ECO-300kSN 121312321 seri nolu cihazınız dönüşüm işlemini tamamladı.",
      time: "14:15",
    },
    {
      message:
        "ECO-300kSN 121312322 seri nolu cihazınız dönüşüm işlemini tamamladı.",
      time: "15:25",
    },
    // add more notifications as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-6 pt-10 relative">
      <h1 className="text-3xl font-bold text-blue-900 text-left w-full pl-8">
        MAKİNE
        <br />
        KONTROLÜ
      </h1>
      <div className="max-w-xs flex flex-col items-start justify-start mb-4 w-full pl-8">
        <label
          className="block text-lg font-medium mb-2 text-blue-900"
          htmlFor="scheduler"
        >
          ÇALIŞMA PLANLAYICI
        </label>
        <div className="mb-4">
          <Select>
            <SelectTrigger
              className="border rounded-md text-left"
              id="scheduler"
            >
              <SelectValue placeholder="00.00" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <label
            className="block text-lg font-medium mb-2 text-blue-900"
            htmlFor="temperature"
          >
            ISI
          </label>
          <Select>
            <SelectTrigger
              className="border rounded-md text-left"
              id="temperature"
            >
              <SelectValue placeholder="254C" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-4 w-full">
        <p className="text-lg font-medium mb-2 text-left w-full pl-8">
          BAŞLAT DURDUR
        </p>
        <div className="flex justify-start w-full pl-8 space-x-4">
          <Button className="bg-green-500 hover:bg-green-600 text-white rounded-lg">
            BAŞLAT
          </Button>
          <Button className="bg-red-500 hover:bg-red-600 text-white rounded-lg">
            DURDUR
          </Button>
        </div>
      </div>
      <div className="pr-3">
        <NotificationComponent notifications={notifications} />
      </div>
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300" />
    </div>
  );
}
