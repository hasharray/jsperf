---
title: String.fromCharCode.apply vs [] vs +=
setup: |
  LENGTH = 1000;  // e.g. 10, 100, 1000, 100000
  zzascii = []; for (var i = 0; i < 256; i++) zzascii[i] = String.fromCharCode(i);
  zzinput = []; for (var i = 0; i < LENGTH; i++) zzinput[i] = (i%111) + 1;
tests:
  -
    name: String.fromCharCode.apply
    code: |
      out = String.fromCharCode.apply(null, zzinput);
  -
    name: []
    code: |
      out = [];
      for (var i = 0; i < zzinput.length; i++) out.push(zzascii[zzinput[i]]);
      out2 = out.join("");
  -
    name: +=
    code: |
      out = "";
      for (var i = 0; i < zzinput.length; i++) out += zzascii[zzinput[i]];
---

