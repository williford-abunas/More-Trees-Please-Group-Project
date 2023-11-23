import SeedPlant from './SeedPlant'

export default function LowerZone({ onZoneClick, seeds, imageSource }) {
  function handleOnClick() {
    // console.log('Home')
    {
      onZoneClick('home')
    }
  }
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
