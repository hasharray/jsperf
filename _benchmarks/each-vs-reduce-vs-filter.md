---
title: Each vs Reduce vs Filter
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
---

