export default function reducer(state={}, action) {
    
    switch(action.type) {
        case 'CHANGE_TRACK_SUCCESS':
            const { routes, waypoints } = action.payload.payload;
            return {
                routes: routes,
                waypoints: waypoints
            }
        default:
          return state;
    }
}