
// pick item from random index of array
function randomItem(array) {
  return array[Math.floor(Math.random()*array.length)]
}

// main function
function generateRubbishTalk(job) {

  // data
  const task = {
    engineer: ['加個按鈕', '加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // create object includes job and rubbishtalk
  // 透過回傳值傳入index.handlebars的參數要能夠透過布林值判斷是否勾選某職業，這邊選用1,0來判斷
  let rubbishPackage = {
    engineer: 0, // false
    designer: 0, // false
    entrepreneur: 0, // false
    rubbishTalk: ''
  }

  // switch case options
  switch (job) {
    case undefined: // exception
      rubbishPackage.rubbishTalk = '請選擇一種職業來產生幹話！'
      break
    case 'engineer':
      rubbishPackage.engineer = 1 // true
      rubbishPackage.rubbishTalk = `身為一位工程師，${randomItem(task.engineer)}，${randomItem(phrase)}吧！`
      break
    case 'designer':
      rubbishPackage.designer = 1 // true
      rubbishPackage.rubbishTalk = `身為一位設計師，${randomItem(task.designer)}，${randomItem(phrase)}吧！`
      break
    case 'entrepreneur':
      rubbishPackage.entrepreneur = 1 // true
      rubbishPackage.rubbishTalk = `身為一位創業家，${randomItem(task.entrepreneur)}，${randomItem(phrase)}吧！`
      break
  }

  return rubbishPackage
}

// transform to Express-usable module
module.exports = generateRubbishTalk