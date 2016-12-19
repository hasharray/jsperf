---
title: For loop vs Each vs Reduce vs Filter vs Map
setup: |
  const members = [
    { role_id: 1 },
    { role_id: 1 },
    { role_id: 2 },
    { role_id: 1 },
    { role_id: 1 },
    { role_id: 2 },
    { role_id: 1 },
    { role_id: 1 },
    { role_id: 1 },
    { role_id: 1 }
  ];
tests:
  -
    name: For loop
    code: |
      let count = 0;
      for (let i = 0; i < members.length; i += 1) {
        if (members[i].role_id === 1) {
          count = count + 1
        }
      }
  -
    name: Each
    code: |
      let count = 0;
      members.forEach(function (member) {
        if (member.role_id === 1) {
          count = count + 1
        }
      });
  -
    name: Reduce
    code: |
      const count = members.reduce(function (result, member) {
        if (member.role_id === 1) {
          return result + 1;
        } else {
          return result;
        }
      }, 0);
  -
    name: Filter
    code: |
      const count = members.filter(function (member) {
        return member.role_id === 1
      }).length;
  -
    name: Map
    code: |
      let count = 0;
      members.map(function (member) {
        if (member.role_id === 1) {
          count = count + 1
        }
      });
---

