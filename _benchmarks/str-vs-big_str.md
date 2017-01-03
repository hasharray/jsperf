---
title: STR vs BIG_STR
setup: |
  var BIG_STR1 = "wed ljqfiewurqfh qiuhreg qiugherq igfuhferqiufherfiu hiufherfiuerqhf rfiuqherf ifruqher flirufhera lifuherf ireughierquh rfiauherf eriughq iughfer iujnf ieruglhwegpoiuhg puoigh iughriughuriheriughriehgieruhgierg gnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnngeri ugjhqeri guqgpiuhreg piugh rgiuherqg pugherpiugqhrigu hrgiuhrg iguhr gpirughriueqpg hpiugh rpiugrh gpiuhgqpiurghqrjg qguhoifdsjeroiujvferqpgjhrgh803q 4uhrgjerpoijferqgj8ergjej";
  
  var BIG_STR2 = BIG_STR1;
  
  var STR1 = "abc";
  var STR2 = STR1;
  
  
  var res;
tests:
  -
    name: STR
    code: |
      res = STR1 === STR2;
  -
    name: BIG_STR
    code: |
      res = BIG_STR1 === BIG_STR2;
---
Test if strings are compared by reference first.
