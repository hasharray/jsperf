---
title: process then mege vs merge then process
setup: |
  const importedStyle = {
    padding: 10,
    width: 120,
    height: 300,
  }
  const styleMap = new WeakMap();
  
  const applyTransformations = (style) => {
    return style;
  }
  
  const process = (...args) => {
    return args.reduce((processedStyle, style) => {
      if(!styleMap.has(style)) {
        styleMap.set(style, applyTransformations(style));
      }
      return Object.assign(processedStyle, styleMap.get(style))
    }, {});
  }
  
  const processAll = (...args) => {
    const objectToProcess = Object.assign({}, ...args);
    if(!styleMap.has(style)) {
      const processedStyle = applyTransformations(objectToProcess)
      styleMap.set(objectToProcess, processedStyle);
      return processedStyle;
    }
    return styleMap.get(objectToProcess)
  }
tests:
  -
    name: process then mege
    code: |
      var map = 1;
      process(importedStyle, { padding: 20});
  -
    name: merge then process
    code: |
      var style = {}
      processAll(importedStyle, { padding: 20});
---

