---
title: Split Once: Regex vs Split Once: Substring
setup: |
  const s = '303473440:{"id": "5885ae6829fa679c454d4519","junk":"來點utf-8ʕ•ᴥ•ʔ","index": 5,"guid": "aba90f86-0105-406c-bdf6-afdc2c10dc3e","isActive": false,"balance": "$1,092.95","picture": "http://placehold.it/32x32","age": 21,"eyeColor": "brown","name": {"first": "Marisa","last": "Odonnell"},"company": "DATACATOR","email": "marisa.odonnell@datacator.org","phone": "+1 (889) 472-2182","address": "753 Bergen Place, Ruckersville, Idaho, 689","about": "Aliqua in et sint ex irure proident reprehenderit anim nisi adipisicing pariatur consequat ipsum labore. Reprehenderit esse labore esse dolore aute tempor laboris consectetur in Lorem ipsum ut. Laborum qui non et dolore cillum minim. Mollit laborum adipisicing dolor tempor culpa sint occaecat duis laboris consequat. Duis sint aliqua excepteur officia irure nisi nulla aute. Sunt adipisicing velit excepteur amet quis.","registered": "Thursday, December 4, 2014 3:05 PM","latitude": "-82.572481","longitude": "-171.402186","tags": ["esse","dolore","consequat","ex","officia"],"range": [0,1,2,3,4,5,6,7,8,9],"friends": [{"id": 0,"name": "Kayla Erickson"}, {"id": 1,"name": "Meyer Potts"}, {"id": 2,"name": "Liliana Cannon"}],"greeting": "Hello, Marisa! You have 7 unread messages.","favoriteFruit": "apple"}';
tests:
  -
    name: Split Once: Regex
    code: |
      s.split(/:(.+)/)[1];
  -
    name: Split Once: Substring
    code: |
      s.substring(s.indexOf(':') + 1);
---

