// 가능? 버튼

function set_map_img() {
  const select_forms = document.getElementsByClassName('form-select')
  const depart = select_forms[0].value
  const arrive = select_forms[1].value

  let is_checked = document.getElementById('switch').checked
  is_checked = is_checked ? '위성' : '일반'

  let img_url = ''

  if (depart === '' && arrive === '') {
    img_url = '../img/chosun_logo.png'
  } else if (depart === '' || arrive === '') {
    img_url = '../img/404_not_found.png'
  } else if (depart === arrive) {
    img_url = '../img/choose_same_place.png'
  } else {
    img_url = `../img/${is_checked}/${depart}_${arrive}_${is_checked}.png`
  }

  const img_tag = document.getElementById('map-img')
  img_tag.src = img_url
}

const btn = document.getElementById('search-btn')
btn.addEventListener('click', set_map_img)

// 위성 이미지 스위치
const img_switch = document.getElementById('switch')
img_switch.addEventListener('click', set_map_img)
