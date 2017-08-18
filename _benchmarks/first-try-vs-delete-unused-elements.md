---
title: First Try vs Delete unused elements
setup: |
  function shuffle (array) {
    var currentIndex = array.length, temporaryValue, randomIndex
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
  
    return array
  }
  
  const specialPlayers = {
    mafia: 2,
    detective: 1,
    doctor: 1
  }
  
  const playerNames = ['Daniel', 'Aaron', 'Joseph', 'Eric', 'Noah', 'Brandon']
tests:
  -
    name: First Try
    code: |
      const players = shuffle(playerNames).map(name => {
        let role = 'civilian'
      
        for (const player in specialPlayers) {
          if (specialPlayers[player] > 0) {
            specialPlayers[player]--
            role = player
            break
          }
        }
      
        return {
          name: name,
          role: role
        }
      })
  -
    name: Delete unused elements
    code: |
      const players = shuffle(playerNames).map(name => {
        let role = 'civilian'
      
        for (const player in specialPlayers) {
          if (specialPlayers[player] === 1) {
            delete specialPlayers[player]
          } else {
            specialPlayers[player]--
          }
          role = player
          break
        }
      
        return {
          name: name,
          role: role
        }
      })
---
Mafia Game
