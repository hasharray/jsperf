---
title: getFeature vs document.createElement
setup: |
  
tests:
  -
    name: getFeature
    code: |
      function getElement(Type, Class, ID, Properties, Style, Attributes) {
          var Element, Key;
          Element = document.createElement(Type);
          if (Class) Element.className = Class;
          if (ID) Element.id = ID;
          for (Key in Properties) {
              Element[Key] = Properties[Key];
          }
          for (Key in Style) {
              Element.style[Key] = Style[Key];
          }
          for (Key in Attributes) {
              Element.setAtribute(Key, Attributes[Key]);
          }
          return Element;
      }
      var div2 = getElement("div", "hello", "hey", null, {backgroundColor: "#bcc", display: "none", position: "there"});
  -
    name: document.createElement
    code: |
      var div2 = document.createElement("div");
      div2.className = "hello";
      div2.id = "hey";
      div2.style.backgroudnColod = "#bcc";
      div2.style.display = "none";
      div2.style.position = "there";
---

