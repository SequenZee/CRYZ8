import NewsFeed from "./components/NewsFeed"
import CurrencyConverter from "./components/CurrencyConverter"
const App=()=> {
  return (
    <div className="app">
      <h1>CRYZ8</h1>
      <h3>CRYPTO DASHBOARD</h3>
      <div className="app-wrapper">
      <CurrencyConverter/>
      <NewsFeed/>
      </div>
    </div>
  )
}

export default App
