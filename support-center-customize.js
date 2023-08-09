'use strict'
let timer
const imageUrl = 'https://' //add your svg hosting location

function doit() {
  if (document.querySelectorAll('[aria-label^="Open category"]')[0]) {
    const items = document.querySelectorAll('[aria-label^="Open category"]')
    for (const item of items) {
      let words = item.ariaLabel.split(' ')
      let word = words[words.length - 1]
      item.parentNode.style.borderRadius = '5%'
      item.innerHTML = `<img src="${imageUrl}${word}.svg" style="width: 100px"></img><p style="text-align: center;">${word}</p>`
    }
    clearInterval(timer)
    return
  }
  console.log('100ms check')
}

Genesys('subscribe', 'SupportCenter.ready', function () {
  timer = setInterval(doit, 100)
  document.addEventListener('click', function () {
    if (document.getElementsByClassName('lg-col-3 md-col-6 sm-col-12  CategoryGridItem_categoryGridItemContainer_minov sm-margin-b-4').length > 0) {
      const items = document.querySelectorAll('[aria-label^="Open category"]')
      for (const item of items) {
        let words = item.ariaLabel.split(' ')
        let word = words[words.length - 1]
        item.parentNode.style.borderRadius = '5%'
        item.innerHTML = `<img src="${imageUrl}${word}.svg" style="width: 100px"></img><p style="text-align: center;">${word}</p>`
      }
    }
  })
})
