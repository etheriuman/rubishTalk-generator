
// pick item from random index of array
function randomItem(array) {
  return array[Math.floor(Math.random()*array.length)]
}

// main function
function generateRubbishTalk(job) {

  // data
  const translatedJob = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }

  const task = {
    engineer: ['加個按鈕', '加新功能','切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  // generate rubbish talk
  const rubbishTalk = `身為一個${translatedJob[job]}，${randomItem(task[job])}，${randomItem(phrase)}吧！`
  
  // exception
  if (!job) {
    return '請選擇一種職業產生幹話！'
  }
  // output
  return rubbishTalk
}

// transform to Express-usable module
module.exports = generateRubbishTalk