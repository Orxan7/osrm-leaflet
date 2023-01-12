export default function reducer(state={}, action) {
    
    switch(action.type) {
        case 'CHANGE_TRACK':
            console.log(action.payload)
            const { fst_x, fst_y, snd_x, snd_y } = action.payload;
            return {
                fst_x,
                fst_y,
                snd_x,
                snd_y
            }
        default:
          return state;
    }
}