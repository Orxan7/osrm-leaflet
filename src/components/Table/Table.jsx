import { Table as Tbl } from 'antd' ;
import 'antd/dist/reset.css';
import { useDispatch } from 'react-redux';
import { onRow } from '../App';
import './Table.css';

const dataSource = [
    {
        key: '1',
        num: '№ 1',
        from_lat: 59.84660399,
        from_lng: 30.29496392,
        to_lat: 59.82934196,
        to_lng: 30.42423701
    },
    {
        key: '2',
        num: '№ 2',
        from_lat: 59.82934196,
        from_lng: 30.42423701,
        to_lat: 59.82761295,
        to_lng: 30.41705607
    },
    
];
  
const columns = [
    {
        title: 'Номер заявки',
        dataIndex: 'num',
        key: 'num',
    },
    {
        title: 'Координаты ОТ lat',
        dataIndex: 'from_lat',
        key: 'from_lat',
    },
    {
        title: 'Координаты ОТ lng',
        dataIndex: 'from_lng',
        key: 'from_lng',
    },
    {
        title: 'Координаты ДО lat',
        dataIndex: 'to_lat',
        key: 'to_lat',
    },
    {
        title: 'Координаты ДО lng',
        dataIndex: 'to_lng',
        key: 'to_lng',
    },
];

export default function Table(){

    const dispatch = useDispatch()

    return <Tbl 
        dataSource={dataSource} 
        columns={columns} 
        onRow={(rec)=> {
            return {
                onClick: (event) => onRow(dispatch, rec)
            }
        }

        }
    />;
}


  