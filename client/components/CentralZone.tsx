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
      <div className="zone-div">
        <button className="homeBtn" onClick={handleOnClick}>
          {' '}
          GO HOME{' '}
        </button>
        <h4 className="zone-title">You're in the Central Zone</h4>
      </div>
      <div>
        {' '}
        <SeedPlant seeds={seeds.seeds} imageSource={imageSource} />
      </div>
    </>
  )
}
