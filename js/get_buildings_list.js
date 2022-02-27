export const get_buildings_list = async () => {
  const init = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=utf-8',
    },
  }

  const res = await fetch('../data/buildings.json', init)
  const data = await res.json()
  return data.buildings
}
