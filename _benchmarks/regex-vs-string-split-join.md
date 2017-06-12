---
title: Regex vs String split/join
setup: |
  var str = 'Abcadf ad fadfadfadlkfjahdlfg3o4tupthgnbs advfajb243blakdfh mnbvmnbqver qenrqevrqiouewtriqeufgdnbakdjhfoqieuqhoefiuhd efghij Abcadf ad fadfadfadlkfjahdlfg3o4tupthgnbs advfajb243blakdfh mnbvmnbqver qenrqevrqiouewtriqeufgdnbakdjhfoqieuqhoefiuhd efghij';
tests:
  -
    name: Regex
    code: |
      str.replace(/./g, "$&Z");
  -
    name: String split/join
    code: |
      str.split('').join('Z') + 'Z';
---

