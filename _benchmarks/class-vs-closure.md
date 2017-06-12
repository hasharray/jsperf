---
title: class vs closure
setup: |
  
tests:
  -
    name: class
    code: |
      'use strict'
      class Cow {
          constructor (lungCapacity) {
              this.lungCapacity = lungCapacity
              this.airInLungs = 0
          }
          breathe () {
              this.airInLungs = this.lungCapacity
          }
          moo () {
              let output = 'm'
              let air = this.airInLungs
              while (air --> 0) { // The 'goes to' operator
                  output += 'o'
              }
              this.airInLungs = air
              return output
          }
      }
      const herd = []
      
      for (let i = 0; i < 30000; i++) {
          const cow = new Cow(i)
          cow.index = i
          herd.push(cow)
      }
      
      const start = Date.now()
      
      herd.map(cow => {
          cow.breathe()
          cow.moo()
      })
      
      console.log('Finish mooing in ' + (Date.now() - start) / 1000 + ' seconds')
  -
    name: closure
    code: |
      'use strict'
      function Cow (lungCapacity) {
          var airInLungs = 0
          function breathe () {
              airInLungs = lungCapacity
          }
          function getAirInLungs () {
              return airInLungs
          }
          function moo () {
              var output = 'm'
              var air = getAirInLungs()
              while (air --> 0) { // The 'goes to' operator.df
                  output += 'o'
              }
              airInLungs = air
              return output
          }
          return {breathe:breathe, moo:moo}
      }
      var herd = []
      
      for (var i = 0; i < 30000; i++) {
          var cow = Cow(i)
          cow.index = i
          herd.push(cow)
      }
      
      var start = Date.now()
      herd.map(function(cow) {
          cow.breathe()
          cow.moo()
      })
      console.log('Finish mooing in ' + (Date.now() - start) / 1000 + ' seconds')
---

