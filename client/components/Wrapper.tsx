import Home from './Home'
import showUpper from './Home'
import showCentral from './Home'
import showLower from './Home'
import UpperZone from './UpperZone'

export default function Wrapper() {
  if (showUpper == true) {
    return <UpperZone />
  } else if (showCentral == true) {
    return <CentralZone />
  } else if (showLower == true) {
    return <LowerZone />
  } else {
    return <Home />
  }
}
