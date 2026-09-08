"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"

interface Location {
  id: number
  name: string
  address: string
  zipCode: string
}

interface LocationMapProps {
  locations: Location[]
}

export default function LocationMap({ locations }: LocationMapProps) {
  const [zipCode, setZipCode] = useState("")
  const [filteredLocations, setFilteredLocations] = useState<Location[]>(locations)
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (zipCode.trim() === "") {
      setFilteredLocations(locations)
    } else {
      // Simple filtering - in a real app, you would use distance calculation
      const filtered = locations.filter((location) => location.zipCode.includes(zipCode.trim()))
      setFilteredLocations(filtered)
    }

    setSearched(true)
  }

  return (
    <div className="w-full bg-canvas">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-ink">Find a Recycled Relief Basket</h3>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 mb-6">
          <Input
            type="text"
            placeholder="Enter your zip code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" className="bg-brand-blue-700 hover:bg-brand-blue-deep text-white">
            Find Locations
          </Button>
        </form>

        <div className="bg-surface">
          <div className="text-center">
            <MapPin className="h-10 w-10 text-brand-blue-700 mx-auto mb-2" />
            <p className="text-slate">Map would be embedded here</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-medium text-ink">
            {searched && zipCode.trim() !== ""
              ? `${filteredLocations.length} locations found near ${zipCode}`
              : "All Relief Basket Locations:"}
          </h4>

          {filteredLocations.length > 0 ? (
            <div className="space-y-3">
              {filteredLocations.map((location) => (
                <div key={location.id} className="border border-hairline">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-brand-blue-700 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h5 className="font-medium text-ink">{location.name}</h5>
                      <p className="text-slate">{location.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : searched ? (
            <p className="text-slate">
              No locations found near this zip code. Please try another zip code or contact us for assistance.
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}

