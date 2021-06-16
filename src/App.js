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
      {/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
  );
}

export default App;
