import React, { useEffect, useRef, useState } from 'react'
import saplingImage from '../../images/top-tree-png-4131.png'
import Header from './Header'
import { getNativePlants } from '../api'
import { Plant } from '../../models/plantsModel'

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

//Seed Inventory component
//Can be modified from data coming from db
const SeedInventory: React.FC<SeedInventoryProps> = ({
  seeds,
  onSelectSeed,
}) => {
  return (
    <div>
      <h3>Seed Inventory</h3>

      {seeds.map((seed) => (
        <button key={seed.id} onClick={() => onSelectSeed(seed)}>
          {seed.name}
        </button>
      ))}
    </div>
  )
}

interface SeedPlantingProps {
  imageSrc: string
  selectedSeed: Seed | null
  plantSeed: (coordinate: { x: number; y: number }) => void
}

const SeedPlanting: React.FC<SeedPlantingProps> = ({
  imageSrc,
  selectedSeed,
  plantSeed,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const image = new Image()
    image.src = imageSrc

    image.onload = () => {
      canvas.width = image.width
      canvas.height = image.height

      // Draw the image on the canvas
      ctx.drawImage(image, 0, 0, image.width, image.height)
    }
  }, [imageSrc])

  const handlePlantSeed = (event: React.MouseEvent<HTMLCanvasElement>) => {
    // Get mouse coordinates relative to the canvas
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Plant the selected seed at the coordinates
    if (selectedSeed) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const sapling = new Image()
        sapling.src = saplingImage

        sapling.onload = () => {
          ctx.drawImage(
            sapling,
            x,
            y,
            selectedSeed.radius || 20,
            selectedSeed.radius || 20
          )
        }
      }

      plantSeed({ x, y })
    }
  }

  return <canvas ref={canvasRef} onClick={handlePlantSeed} />
}

// Example usage
const SeedPlant: React.FC = ({ plants }: Plant[]) => {
  //Dummy data to be replaced

  // const [seeds, setSeeds] = useState<Seed[]>([
  //   { id: 1, name: 'Sunflower', color: 'yellow', radius: 8 },
  //   { id: 2, name: 'Rose', color: 'red', radius: 10 },
  //   { id: 3, name: 'Lavender', color: 'purple', radius: 15 },
  // ])

  const seeds = plants.filter((plant: Plant) => plant.region === 0)

  // const [seeds, setSeeds] = useState<Seed[]>({seedData})

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
        imageSrc="images/terrain01.jpg"
        selectedSeed={selectedSeed}
        plantSeed={handlePlantSeed}
      />
    </div>
  )
}

export default SeedPlant
