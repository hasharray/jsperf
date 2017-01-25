---
title: className vs classList
setup: |
  var el = document.createElement("div")
tests:
  -
    name: className
    code: |
      el.className = "this is a test"
      classes = el.className.split(" ")
      if ("this" in classes) {
        classes.splice(classes.indexOf("this"), 1)
      }
      classes.push("that")
      el.className = classes.join(" ")
  -
    name: classList
    code: |
      el.className = "this is a test"
      if (el.classList.contains("this")) {
        el.classList.remove("this")
      }
      el.classList.add("that")
---

