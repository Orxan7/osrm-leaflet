import {put, takeEvery, call} from 'redux-saga/effects';
import {fetchTrackFromApi} from '../../../api/fetchTrackApi'
import { changeTrackSucess } from '../../actions/actions';


function* fetchTrackWorker(action){
    
    const data = yield call(fetchTrackFromApi, action.payload);
    const { routes, waypoints } = data;
    yield put({type: 'CHANGE_TRACK_SUCCESS', payload: changeTrackSucess({ routes, waypoints })})
}


export function* trackWatcher(){
    yield takeEvery('CHANGE_TRACK_REQUESTED', fetchTrackWorker)
}