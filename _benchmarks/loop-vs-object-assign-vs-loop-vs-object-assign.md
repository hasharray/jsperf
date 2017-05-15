---
title: loop vs object.assign vs loop vs object.assign
setup: |
  
tests:
  -
    name: loop
    code: |
      let action = {payload: 'advert'};
      let state = {advert: 5, content: 4, cast: 3};
      let playbacks = {};
                  for (let type in state) {
                      if (type !== action.payload) {
                          playbacks[type] = state[type];
                      }
                  }
                  return playbacks;
  -
    name: object.assign
    code: |
      let action = {payload: 'advert'};
      let state = {advert: 5, content: 4, cast: 3};
      let playbacks = {};
      playbacks = Object.assign({}, state);
      delete playbacks[action.payload];
      return playbacks;
---

