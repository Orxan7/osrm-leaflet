export async function fetchTrackFromApi ({fst_x, fst_y, snd_x, snd_y}) {
    const url = `https://router.project-osrm.org/route/v1/driving/${fst_y},${fst_x};${snd_y},${snd_x}?overview=full&geometries=geojson`
    let res = await fetch(url)
    let data = await res.json()
    return data
}
