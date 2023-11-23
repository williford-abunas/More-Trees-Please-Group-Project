import SeedPlant from './SeedPlant'

export default function CentralZone({ onZoneClick, seeds, imageSource }) {
  function handleOnClick() {
    // console.log('Home')
    {
      onZoneClick('home')
    }
  }
  // console.log(seeds.seeds)

  return (
    <>
      <button onClick={handleOnClick}> HOME </button>
      <div>
        {' '}
        <SeedPlant seeds={seeds.seeds} imageSource={imageSource} />
      </div>
    </>
  )
}
