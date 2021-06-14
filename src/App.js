import './App.css';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import WeatherNow from './components/WeatherNow';

function App() {
  return (
    <div id="main-block">
      <Header />
      <WeatherNow />
      <WeatherCard />
    </div>
  );
}

export default App;
