import SeedPlant from './SeedPlant'

export default function UpperZone({ onZoneClick, seeds, imageSource }) {
  function handleOnClick() {
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
        <h4 className="zone-title">You're in the Upper Zone</h4>
      </div>
      <div>
        {' '}
        <SeedPlant seeds={seeds.seeds} imageSource={imageSource} />
      </div>
    </>
  )
}
