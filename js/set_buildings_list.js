import { get_buildings_list } from '/js/get_buildings_list.js'

const buildings = await get_buildings_list()

const select_forms = document.getElementsByClassName('form-select')

let options_depart = '<option value="" selected>출발</option>'
let options_arrive = '<option value="" selected>도착</option>'

for (let building of buildings) {
  options_depart += `<option value="${building.name}">${building.name}</option>`
  options_arrive += `<option value="${building.name}">${building.name}</option>`
}

select_forms[0].innerHTML = options_depart
select_forms[1].innerHTML = options_arrive

console.log(buildings)
