var CategoryTypes = {
  音樂: 1,
  戲劇: 2,
  舞蹈: 3,
  親子: 4,
  獨立音樂: 5,
  展覽: 6,
  講座: 7,
  電影: 8,
  綜藝: 11,
  競賽: 13,
  徵選: 14,
  其他: 15,
  演唱會: 17,
  研習課程: 19,
}

var favoriteArray = []

var saveFavoriteToLocalStorage = () => {
  data = JSON.stringify(favoriteArray)
  localStorage.setItem('favoriteArray', data)
}

var setFavoriteFromLocalStorage = () => {
  data = localStorage.getItem('favoriteArray')
  if (!!data) {
    favoriteArray = JSON.parse(data)
  } else {
    favoriteArray = []
  }
}


// var addToFavorite = (showData)=>{
//     data = localStorage.getItem('favoriteArray')
//     favoriteArray = JSON.parse(data);
//     favoriteArray.push(showData);
//     data = JSON.stringify(favoriteArray)
//     localStorage.setItem('favoriteArray', data)
// }
