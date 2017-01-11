---
title: Double sélecteurs & length vs Simple sélecteur & val
setup: |
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  <input type="hidden" name="action" value="save-add" />
tests:
  -
    name: Double sélecteurs & length
    code: |
      if($("input[name=action][value=view]").length() === 0) {
      console.log('bravo');
      }
  -
    name: Simple sélecteur & val
    code: |
      if($("input[name=action]").val() != "view") {
      console.log('bravo');
      }
---

