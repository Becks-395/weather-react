import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
  <div className="App">
      <div className="container">
    <Weather defaultCity="Barcelona"/>  
      </div>
    <footer>
      <a href="https://github.com/Becks-395/weather-react" target="_blank" rel="noreferrer">Open source code
      </a>, by Becks Yates
    </footer>
  </div>
  )
}
