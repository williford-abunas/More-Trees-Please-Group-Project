import React, { useEffect, useRef, useState } from 'react'

interface Seed {
  id: number
  name: string
  color?: string
  radius?: number
}

interface SeedInventoryProps {
  seeds: Seed[]
  onSelectSeed: (seed: Seed) => void
}

const SeedInventory: React.FC<SeedInventoryProps> = ({
  seeds,
  onSelectSeed,
}) => {
  return (
    <div>
      <h3>Seed Inventory</h3>
      <ul>
        {seeds.map((seed) => (
          <li key={seed.id} onClick={() => onSelectSeed(seed)}>
            {seed.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

interface SeedPlantingProps {
  imageSrc: string
  saplingSrc: string
  selectedSeed: Seed | null
  plantSeed: (coordinate: { x: number; y: number }) => void
}

const SeedPlanting: React.FC<SeedPlantingProps> = ({
  imageSrc,
  saplingSrc,
  selectedSeed,
  plantSeed,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const saplingImageRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const saplingImage = new Image()

    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const image = new Image()
      image.src = imageSrc

      saplingImage.src = saplingSrc

      image.onload = () => {
        canvas.width = image.width
        canvas.height = image.height

        //Draw the image on the canvas
        ctx.drawImage(image, 0, 0, image.width, image.height)
      }

      saplingImage.onload = () => {
        saplingImageRef.current = saplingImage
      }
    }
  }, [imageSrc, saplingSrc])

  const handlePlantSeed = (event: React.MouseEvent<HTMLCanvasElement>) => {
    // Get mouse coordinates relative to the canvas
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Plant the selected seed at the coordinates
    if (selectedSeed) {
      plantSeed({ x, y })
    }
  }

  return <canvas ref={canvasRef} onClick={handlePlantSeed} />
}

// Example usage
const SeedPlant: React.FC = () => {
  const [seeds, setSeeds] = useState<Seed[]>([
    { id: 1, name: 'Sunflower', color: 'yellow', radius: 8 },
    { id: 2, name: 'Rose', color: 'red', radius: 10 },
  ])
  const [selectedSeed, setSelectedSeed] = useState<Seed | null>(null)

  const handleSelectSeed = (seed: Seed) => {
    setSelectedSeed(seed)
  }

  const handlePlantSeed = (coordinate: { x: number; y: number }) => {
    // Implement logic to plant the selected seed at the specified coordinates
    // For simplicity, this example logs the seed and coordinates
    console.log('Planting seed:', selectedSeed, 'at coordinates:', coordinate)
  }

  return (
    <div>
      <SeedInventory seeds={seeds} onSelectSeed={handleSelectSeed} />
      <SeedPlanting
        imageSrc="images/New Zealand Sliced/01_central.jpg"
        selectedSeed={selectedSeed}
        plantSeed={handlePlantSeed}
      />
    </div>
  )
}

export default SeedPlant
