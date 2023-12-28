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
      <div className="zone-div">
        <button className="homeBtn" onClick={handleOnClick}>
          {' '}
          GO HOME{' '}
        </button>
        <h4 className="zone-title">You're in the Lower Zone</h4>
      </div>
      <div>
        {' '}
        <SeedPlant seeds={seeds.seeds} imageSource={imageSource} />
      </div>
    </>
  )
}
