export function changeTrack(first_x, first_y, second_x, second_y) {
  return {
      type: 'CHANGE_TRACK',
      payload: {
        fst_x: first_x,
        fst_y: first_y, 
        snd_x: second_x, 
        snd_y: second_y
      }
    }
  }
