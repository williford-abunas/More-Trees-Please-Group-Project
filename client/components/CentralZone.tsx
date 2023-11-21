export default function CentralZone({ onZoneClick }) {
  function handleOnClick() {
    console.log('Home')
    {
      onZoneClick('home')
    }
  }
  return (
    <>
      <button onClick={handleOnClick}> HOME </button>
      <div>
        {' '}
        <img src="images/terrain02.jpg" />
      </div>
    </>
  )
}
