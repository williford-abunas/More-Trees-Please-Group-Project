import React, { useEffect, useRef, useState } from 'react'
import saplingImage from '../../images/top-tree-png-4131.png'
import Header from './Header'
import { addToStorage, getNativePlants, getPlantsByRegion } from '../api'
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

      {seeds.map((seed, i) => (
        <button key={i} onClick={() => onSelectSeed(seed)}>
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
  plantedPlantsData,
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
      plantedPlantsData.forEach((plantedSeed) => {
        const { x, y, imageUrl, radius } = plantedSeed

        const plantImage = new Image()
        plantImage.src = imageUrl

        plantImage.onload = () => {
          ctx.drawImage(plantImage, x, y, radius || 60, radius || 60)
        }
      })
    }
  }, [imageSrc, plantedPlantsData])

  const handlePlantSeed = (event: React.MouseEvent<HTMLCanvasElement>) => {
    // Get mouse coordinates relative to the canvas
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    // Plant the selected seed at the coordinates
    // console.log(selectedSeed)
    if (selectedSeed) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const sapling = new Image()
        sapling.src = selectedSeed.imageUrl

        sapling.onload = () => {
          ctx.drawImage(
            sapling,
            x,
            y,
            selectedSeed.radius || 60,
            selectedSeed.radius || 60
          )
        }
      }

      plantSeed({ x, y })
    }
  }

  return <canvas ref={canvasRef} onClick={handlePlantSeed} />
}

const SeedPlant = ({ seeds, imageSource }: Plant[]) => {
  const [plantStorage, setPlantStorage] = useState([])
  const [seedsPlantedHere, setSeedsPlantedHere] = useState()
  const [selectedSeed, setSelectedSeed] = useState<Seed | null>(null)

  const handleSelectSeed = (seed: Seed) => {
    setSelectedSeed(seed)
  }

  const handlePlantSeed = (coordinate: { x: number; y: number }) => {
    // Implement logic to plant the selected seed at the specified coordinates
    // For simplicity, this example logs the seed and coordinates

    const timestamp = new Date().toLocaleString()
    console.log(
      'Planting seed:',
      selectedSeed,
      'at coordinates:',
      coordinate,
      'time:',
      timestamp
    )

    const indextoDelete = seeds.findIndex(
      (seed: { name: string | undefined }) => {
        return seed.name === selectedSeed?.name
      }
    )

    seeds.splice(indextoDelete, 1)

    const plantedSeed = {
      ...selectedSeed,
      ...coordinate,
      imgSrc: imageSource,
      timestamp,
    }
    setPlantStorage((prevStorage) => [plantedSeed])

    setSelectedSeed(null)
  }

  // Async nature means we have to have console log in useEffect or the data is one step before
  useEffect(() => {
    console.log(
      'Plant storage:',
      plantStorage,
      ' This is the imageSource ' + imageSource
    )
    async function addingPlants() {
      await addToStorage(plantStorage)
    }
    addingPlants()
  }, [imageSource, plantStorage])

  // Rendering planted plants when you return to area

  async function getPlantsFromRoute(region: { imageSource: any }) {
    const strSplit = region.imageSource.split('/')

    const seedsPlanted = await getPlantsByRegion(strSplit[1])
    setSeedsPlantedHere(seedsPlanted)
  }

  useEffect(() => {
    async function fetchData() {
      const region = { imageSource }
      await getPlantsFromRoute(region)
    }

    fetchData()
  }, [imageSource])

  return (
    <div>
      <SeedInventory seeds={seeds} onSelectSeed={handleSelectSeed} />
      <SeedPlanting
        imageSrc={imageSource}
        selectedSeed={selectedSeed}
        plantSeed={handlePlantSeed}
        plantedPlantsData={seedsPlantedHere}
      />
    </div>
  )
}

export default SeedPlant
