---
title: No iife vs With iife
setup: |
  let a=[
    {
      id: '1',
      nome: 'teste1',
      itens: [
        {
          id: '11',
          nome: 'teste11',
          itens: [
            {
              id: '111',
              nome: 'teste111'
            }
          ]
        },
        {
          id: '1111',
          nome: 'teste1111',
          itens: [
            {
              id: '11111',
              nome: 'teste11111'
            }
          ]
        }
      ]
    },
    {
      id: '2',
      nome: 'teste2',
      itens: [
        {
          id: '22',
          nome: 'teste22',
          itens: [
            {
              id: '222',
              nome: 'teste222'
            }
          ]
        }
      ]
    },
    {
      id: '3',
      nome: 'teste3',
      itens: [
        {
          id: '33',
          nome: 'teste33'
        },
        {
          id: '333',
          nome: 'teste333'
        }
      ]
    }
  ]
tests:
  -
    name: No iife
    code: |
      let flatArray = (ar) => {
          var arrayFinal = [];
          (function flat(arr) {
              arr.map(o => {
                  var obj = {};
                  Object.keys(o).forEach(x => {
                      (o[x].constructor == Array) ?
                      flat(o[x]):
                          obj[x] = o[x];
                  })
      arrayFinal.push(obj);
              })
          })(ar)
          return arrayFinal;
      }
  -
    name: With iife
    code: |
      var arrayFinal = [];
      let flatArray = (arr) => {
          arr.map(o => {
              var obj = {};
              Object.keys(o).forEach(x => {
                  if (o[x].constructor == Array) {
                      flatArray(o[x])
                  } else {
                      obj[x] = o[x];
                  }
              })
              console.log(JSON.stringify(obj))
              arrayFinal.push(obj);
          })
      }
---

