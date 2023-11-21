export default function LowerZone({ onZoneClick }) {
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
        <img src="images/terrain03.jpg" />
      </div>
    </>
  )
}
