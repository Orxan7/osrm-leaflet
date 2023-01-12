import {all} from 'redux-saga/effects';
import { trackWatcher } from './sagas/trackSaga';

export function* rootWatcher(){
    yield all([trackWatcher()])
}