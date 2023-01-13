import './App.css'
import Map from './Map/Map';
import { useSelector } from 'react-redux';
import { changeTrackRequest } from '../redux/actions/actions';
import Table from './Table/Table';


export function onRow (dispatch, coords){
  const {key, from_lat, from_lng, to_lat, to_lng} = coords;

  document.querySelectorAll('.ant-table-row').forEach((item)=>{
    item.style.backgroundColor = '#fff'
  })

  document.querySelector(`[data-row-key="${key}"]`).style.backgroundColor = '#fafafa'
  dispatch(changeTrackRequest(from_lat, from_lng, to_lat, to_lng))
}

export default function App() {

  const data = useSelector(state=> state)

  return (
    <div className="App">
      <Table />
      <Map {...data}/>
    </div>
  );
}
