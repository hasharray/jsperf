---
title: Create a plain Object vs Create an Area instance
setup: |
  class Area {
  
      constructor(start, end) {
          this._start = start
          this._end = end
      }
  
      includes(area, position) {
      }
  
      isVisible(area, leftTopPosition) {
      }
  
      positionIsOnTheEdge(area, geometry, edgeType) {
      }
  
      isSubArea(area, subArea) {
      }
  
      normalizeArea(area) {
      }
  
      positions(area) {
      }
  }
tests:
  -
    name: Create a plain Object
    code: |
      const area = {
        start: { row: 0, col: 0 },
        end: { row: 2, col: 2 }
      }
  -
    name: Create an Area instance
    code: |
      const area = new Area({ row: 0, col: 0 }, { row: 2, col: 2 })
---
Creating of a plaing Object vs instantiating a custom "class"
