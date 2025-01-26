import Image from "next/image"
import { Button } from "@/components/ui/button"

export function MerchSection() {
  return (
    <div className="border rounded-lg p-8 bg-white max-w-2xl mx-auto">
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/placeholder.svg"
          alt="Code4Hope Merchandise"
          width={400}
          height={250}
          className="w-full"
        />
        <h2 className="text-2xl font-bold">Buy our merch!</h2>
        <p className="text-gray-600 text-center mb-4">
          Show your support for Code4Hope and look great doing it! Our merchandise features unique designs inspired by our mission.
        </p>
        <Button 
          className="w-full bg-[#826CB8] hover:bg-[#6f5c9d] text-white py-6 text-lg h-auto"
        >
          Code4Hope Merch Store
        </Button>
      </div>
    </div>
  )
}

