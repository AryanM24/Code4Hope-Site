import { Button } from "@/components/ui/button"

export function BecomeSponsorSection() {
  return (
    <section className="w-full max-w-3xl mx-auto text-center py-16">
      <h2 className="text-[32px] font-bold mb-4">How to Become a Sponsor</h2>
      <p className="text-gray-500 text-lg mb-8">
        Click below to view the 2024 - 2025 Code4Hope Sponsorship Packet
      </p>
      <Button 
        className="w-full max-w-xl bg-[#826CB8] hover:bg-[#6f5c9d] text-white py-6 text-lg h-auto rounded-xl"
      >
        Sponsorship Packet
      </Button>
    </section>
  )
}

