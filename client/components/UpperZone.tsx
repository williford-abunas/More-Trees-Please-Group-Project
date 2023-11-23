import SeedPlant from './SeedPlant'

export default function UpperZone({ onZoneClick, seeds, imageSource }) {
  function handleOnClick() {
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
