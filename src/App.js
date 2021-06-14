import './App.css';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import WeatherInfo from './components/WeatherInfo';

function App() {
  return (
    <div id="main-block">
      <Header />
      <WeatherInfo />
      <WeatherCard />
    </div>
  );
}

export default App;
