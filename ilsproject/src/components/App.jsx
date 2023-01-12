import './App.css'
import Map from './Map/Map';
import { useDispatch, useSelector } from 'react-redux';
import { changeTrack } from '../redux/actions/actions';

function App() {

  const dispatch = useDispatch()

  const data = useSelector(state=> state)

  console.log(data)

  return (
    <div className="App">
      <Map />
      <div className="sidebar">
        <h2>Disney World</h2>
        <p>
          Bay Lake, FL
        </p>
        <ul>
          <li>Lat: 28.3852</li>
          <li>Long: -81.5639</li>
        </ul>
        <p>
          <button>
            Set View to Disney World
          </button>
        </p>
        <h2>Disneyland</h2>
        <p>
          Anaheim, CA
        </p>
        <ul>
          <li>Lat: 33.8121</li>
          <li>Long: -117.9190</li>
        </ul>
        <p>
          <button onClick={()=>dispatch(changeTrack(-81.5639,-81.5639,-81.5639,-81.5639))}>
            Fly to Disneyland
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;
