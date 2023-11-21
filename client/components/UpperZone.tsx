export default function UpperZone({ onZoneClick }) {
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
        <img src="images/terrain01.jpg" />
      </div>
    </>
  )
}
