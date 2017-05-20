---
title: hashCode.verboseVerif vs hashCode.verboseVerif2
setup: |
  var USE_SHORT_TEXT = 1;
  
  
  var text_short = '[LOG] This is a a not-too-long log message, once that will commonly pop up in my application';
     var text_long = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed odio purus. Ut hendrerit quam id auctor aliquet. Nam et leifend purus, vel elementum nunc. Cras ac facilisis sem. Integer ullamcorper honcus iaculis. Praesent posuere dui tellus, sed interdum libero varius n. Nulla tristique pulvinar sem bibendum fermentum. In purus mi, viverra itae interdum ac, semper eu felis. Vivamus nisi ligula, consequat ut orci non, endrerit iaculis magna. Mauris a sapien fringilla, egestas dolor id, porta sapien. Praesent id magna et leo rutrum feugiat ac nec est. Vestibulum psum metus, interdum eget porttitor ut, feugiat ut diam. Mauris sed ultrices orci. Nam mollis in purus vitae elementum. Aliquam erat volutpat. Nulla pharetra gravida placerat. Nunc leo mauris, auctor a elit vitae, lacinia sollicitudin diam. Nunc porttitor varius tellus. Sed eu ullamcorper elit. Nam rutrum arcu id sodales vestibulum. Quisque fringilla, turpis in porta ullamcorper, velit tortor hendrerit massa, vitae venenatis dui massa id lacus. Suspendisse vulputate dui sit amet velit dignissim suscipit. Nulla ac leo quis massa pulvinar mollis ut ut risus. Duis in ipsum diam. Etiam ultrices leo quis augue pulvinar, vitae gravida dui faucibus. Integer eget arcu vehicula, tristique felis et, rhoncus tortor. Etiam vel tellus vel est volutpat consectetur in a est. Mauris scelerisque orci lectus, quis elementum mi facilisis nec. In condimentum ante justo, eget convallis nulla facilisis vitae. Sed id tempor ante. Mauris dui eros, imperdiet eu eros blandit, tempus facilisis risus. Vivamus blandit viverra turpis. Etiam at ultricies nibh. Ut vel elit a odio mollis tincidunt. Etiam ultrices malesuada molestie. Integer non est scelerisque, sodales mi eu, fringilla quam. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi suscipit semper dapibus. Vestibulum fermentum sem et condimentum ultrices. Integer ornare interdum dictum. Mauris pulvinar porttitor accumsan. Aenean vestibulum faucibus metus eu sollicitudin. Vestibulum quis nibh vel nisi pulvinar ultricies sed ac neque. Nulla mollis sit amet leo eleifend dapibus. Ut eget augue eu sem molestie aliquam sollicitudin venenatis libero. In ac elit quis augue feugiat interdum dignissim vestibulum mi. Nulla in lacinia enim. Vivamus nunc elit, rhoncus vitae vulputate sit amet, mollis sit amet sem. Morbi mi purus, egestas vel ante at, interdum pellentesque quam. Maecenas cursus, massa ac aliquet sollicitudin, ligula odio ornare lorem, ut mattis quam velit dictum quam. Donec iaculis arcu sed dapibus fermentum. Vestibulum ullamcorper ante a ultrices laoreet. Nulla a magna in nulla gravida porttitor. Donec pharetra, odio vitae aliquam scelerisque, urna neque convallis massa, quis egestas urna turpis nec elit. Nam rhoncus elit eget purus sodales, a elementum nisl posuere. Vivamus luctus leo in nisi ultrices sagittis. In ut luctus lectus. Donec et elit feugiat lectus congue commodo. Nunc vel massa volutpat ante cursus elementum. Ut suscipit pellentesque libero ut elementum. Sed nec pretium mauris, vel auctor elit. Vestibulum malesuada neque in adipiscing porta. Quisque sit amet sem sagittis, accumsan justo sit amet, porttitor ipsum. Duis pellentesque sem quis tempor interdum. Maecenas mattis turpis sit amet metus molestie vehicula. In dignissim pellentesque aliquam. Cras aliquet varius varius. Ut sit amet mattis est. Sed turpis eros, feugiat non ante non, lacinia iaculis nibh. Ut sed lorem in dolor feugiat imperdiet. Ut diam lectus, ullamcorper eget nisi non, consectetur euismod augue. Phasellus in congue elit. Aliquam luctus nunc nec faucibus tincidunt. Aliquam erat volutpat. Ut id feugiat magna. Nullam pellentesque ut risus quis lobortis. Maecenas hendrerit tempor laoreet. Etiam commodo id dolor ac pellentesque. Praesent in vulputate nunc. Ut molestie quis ligula nec sodales. Donec nunc arcu, rutrum ac est et, laoreet elementum lorem. In hac habitasse platea dictumst. Sed sit amet molestie enim. Aliquam tincidunt elit a interdum scelerisque. Proin sodales turpis elit, in euismod nibh pulvinar ut. Vivamus et est viverra, suscipit justo sed, consectetur ligula. Integer interdum metus quis urna lacinia, non dignissim mi fringilla. Morbi pulvinar nec neque quis tincidunt. Sed congue fermentum magna, nec feugiat diam euismod ac. Quisque at leo sit amet est ornare interdum. Proin porta non elit vel volutpat. Vestibulum tincidunt, lorem id ultricies sodales, mauris eros auctor urna, nec imperdiet lacus tellus ac nulla. Integer sodales velit at vehicula varius. Vivamus a dolor nisl. Donec dictum at enim non pulvinar. Maecenas sit amet posuere felis. In ac enim dapibus, mattis leo a, convallis lacus. Sed interdum pulvinar sollicitudin. Nulla dignissim nisi in lectus commodo placerat. Etiam molestie dolor lorem, quis condimentum nisl viverra blandit. Phasellus congue arcu lacus, eu ultrices nibh dignissim egestas. Duis consectetur ultricies tortor. Quisque lacinia quam tortor, nec varius tellus adipiscing non. Sed sem nulla, cursus condimentum condimentum quis, sagittis vel tortor. Fusce malesuada suscipit luctus. Duis eleifend, mauris id viverra dignissim, quam erat malesuada enim, at dapibus leo nulla nec nisl. Morbi vehicula urna ante, nec mollis tortor elementum vitae. Cras porttitor condimentum metus in vestibulum. Nunc tristique orci in faucibus fermentum. Nunc et quam fringilla, congue dolor id, tincidunt massa. Praesent enim felis, tristique eget tristique non, interdum vel nunc.";
  
     var text = USE_SHORT_TEXT  ? text_short : text_long;
  
     function bitwise(str) {
       var hash = 0;
       if (str.length == 0) return hash;
       for (i = 0; i < str.length; i++) {
         char = str.charCodeAt(i);
         hash = ((hash << 5) - hash) + char;
       }
       return hash;
     }
  
     function bitwise2(str) {
       return str.split('').reduce((prevHash, currVal) => ((prevHash << 5) - prevHash) + currVal.charCodeAt(0), 0);
     }
  
     function numbers(str) {
       var res = 0,
         len = str.length;
       for (var i = 0; i < len; i++) {
         res = res * 31 + str.charCodeAt(i);
       }
       return res;
     }
  
     function bitwiseconv(str) {
       var hash = 0;
       if (str.length == 0) return hash;
       for (i = 0; i < str.length; i++) {
         char = str.charCodeAt(i);
         hash = ((hash << 5) - hash) + char;
         hash = hash & hash; // Convert to 32bit integer
       }
       return hash;
     }
  
     function numbersconv(str) {
       var res = 0,
         len = str.length;
       for (var i = 0; i < len; i++) {
         res += str.charCodeAt(i);
       }
       return res & 32;
     }
  
     var hashCode = {};
     hashCode.verbose = function(s) {
       var hash = 0,
         i, chr, len;
       if (s.length == 0) return hash;
       for (i = 0, len = s.length; i < len; i++) {
         chr = s.charCodeAt(i);
         hash = ((hash << 5) - hash) + chr;
         hash |= 0; // Convert to 32bit integer
       }
       return hash;
     };
  
     hashCode.verbose2 = function(s) {
       var hash = 0, len = s.length,
         i = 0, chr;
       if (len == 0) return hash;
       while(i < len) {
         hash &= ((hash << 5) - hash) + s.charCodeAt(i++);
       }
       return hash >>> 0;
     };
  
    hashCode.verboseNew = function(s) {
      var hash = 0, i = 0, len = s.length;
      while ( i < len ) {
          hash  = ((hash << 5) - hash + s.charCodeAt(i++)) << 0;
      }
      return hash >>> 0;
  }
  
     hashCode.verboseVerif2 = function(s) {
    var hash = 0;
    var i = 0;
    var len = s.length;
    if (len === 0) return hash;
    while(i < len) {
      hash = ((hash << 5) - hash) + s.charCodeAt(i++);
      hash |= 0;
    }
    return hash >>> 0;
  }
  
     hashCode.verboseVerif = function(s) {
       var hash = 0, len = s.length,
         i = 0, chr;
       if (len == 0) return hash;
       while(i < len) {
         hash = ((hash << 5) - hash) + s.charCodeAt(i++);
         hash |= 0;
       }
       return hash >>> 0;
     };
  
     hashCode.verboseAnd = function(s) {
       var hash = 0, len = s.length,
         i = 0, chr;
       if (len == 0) return hash;
       while(i < len) {
         hash = ((hash << 5) - hash) + s.charCodeAt(i++);
         hash = hash & hash;
       }
       return hash >>> 0;
     };
  
     hashCode.verbosefor = function(s) {
       var hash = 0, len = s.length,
         i = 0, chr;
       if (len == 0) return hash;
       for (i = 0; i < len; i++) {
         hash &= ((hash << 5) - hash) + s.charCodeAt(i);
       }
       return hash >>> 0;
     };
  
     hashCode.arrayreduce = function(s) {
       return s.split("").reduce(function(a, b) {
         a = ((a << 5) - a) + b.charCodeAt(0);
         return a & a
       }, 0);
     };
  
     hashCode.verbose3 = function(s) {
       var hash = 0, len = s.length;
       if (len == 0) return hash;
       Array.prototype.forEach.call(s, ch => {
         hash &= ((hash << 5) - hash) + ch.charCodeAt(0);
       });
       return hash >>> 0;
     };
  
  hashCode.endShift = str => str.split('').reduce((a,b)=>a=(((a<<5)-a)+b.charCodeAt(0))<<0,0)>>>0;
  
  hashCode.md5 = str => str.split('').reduce((a,b)=>a=(((a<<5)-a)+b.charCodeAt(0))<<0,0);
  
     hashCode.compactreduce = function(string) {
       return Array.prototype.reduce.call(string, function(hash, char) {
         return ((hash << 5) - hash) + char.charCodeAt(0) >> 0
       }, 0);
     }
tests:
  -
    name: hashCode.verboseVerif
    code: |
      hashCode.verboseVerif(text)
  -
    name: hashCode.verboseVerif2
    code: |
      hashCode.verboseVerif2(text);
---

