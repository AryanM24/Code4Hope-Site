"use client"

import React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type MasonryColumns =
  | number
  | {
      default?: number
      sm?: number
      md?: number
      lg?: number
    }

interface MasonryGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: MasonryColumns
  gap?: number
  children: React.ReactNode
}

function resolveColumnCount(columns: MasonryColumns, width = 0) {
  if (typeof columns === "number") {
    return columns
  }

  if (width >= 1024 && columns.lg) {
    return columns.lg
  }

  if (width >= 768 && columns.md) {
    return columns.md
  }

  if (width >= 640 && columns.sm) {
    return columns.sm
  }

  return columns.default ?? 1
}

export default function MasonryGrid({
  columns = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = 16,
  children,
  className,
  ...props
}: MasonryGridProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [columnCount, setColumnCount] = useState(() => resolveColumnCount(columns))
  const [childrenArray, setChildrenArray] = useState<React.ReactNode[]>([])

  // Convert children to array
  useEffect(() => {
    setChildrenArray(React.Children.toArray(children))
  }, [children])

  // Update column count based on screen size
  useEffect(() => {
    const updateColumnCount = () => {
      setColumnCount(resolveColumnCount(columns, window.innerWidth))
    }

    updateColumnCount()
    window.addEventListener("resize", updateColumnCount)
    return () => window.removeEventListener("resize", updateColumnCount)
  }, [columns])

  // Distribute children into columns
  const getColumnItems = (colIndex: number) => {
    return childrenArray.filter((_, index) => index % columnCount === colIndex)
  }

  return (
    <div
      ref={containerRef}
      className={cn("grid", className)}
      style={{
        gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
        gap: `${gap}px`,
      }}
      {...props}
    >
      {Array.from({ length: columnCount }).map((_, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {getColumnItems(colIndex)}
        </div>
      ))}
    </div>
  )
}
