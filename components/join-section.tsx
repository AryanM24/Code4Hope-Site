import { Button } from "@/components/ui/button"

export function JoinSection() {
  return (
    <div className="border-2 border-[#826CB8] rounded-[32px] p-8 shadow-md">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">

            <h2 className="text-2xl font-bold">Interested in joining Code4Hope?</h2>
          </div>
          <p className="text-gray-600 max-w-[600px]">
            Click the button below to view our detailed documentation of EVERYTHING you need to know about Code4Hope!
          </p>
        </div>
        <Button className="bg-[#826CB8] hover:bg-[#6f5c9d] text-white px-8 py-6 text-lg h-auto">
          Official Documentation
        </Button>
      </div>
    </div>
  )
}

