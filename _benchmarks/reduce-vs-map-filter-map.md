---
title: reduce vs map filter map
setup: |
  import Immutable from 'https://cdnjs.cloudflare.com/ajax/libs/immutable/3.8.1/immutable.min.js'
  function isDataItemMenuDivider(item) {
    return false;
  }
  const totalItemCount = 20000;
  const modelData = Immutable.List(Array(totalItemCount).keys()).map(key => key.toString());
tests:
  -
    name: reduce
    code: |
      const focusableItemIndices =
          modelData
          .map((item, index) => ({focusable: !isDataItemMenuDivider(item), index: index}))
          .filter(item => item.focusable)
          .map(item => item.index)
          .toJS();
  -
    name: map filter map
    code: |
      focusableItemIndices =
          modelData
          .map((item, index) => ({focusable: !isDataItemMenuDivider(item), index: index}))
          .filter(item => item.focusable)
          .map(item => item.index)
          .toJS();
---

