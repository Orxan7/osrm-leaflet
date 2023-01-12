export async function fetchTrackFromApi ({fst_x, fst_y, snd_x, snd_y}) {
    const url = `http://router.project-osrm.org/route/v1/driving/${fst_x},${fst_y};${snd_x},${snd_y}?overview=false`
    let res = await fetch(url)
    let data = await res.json()
    return data
}
