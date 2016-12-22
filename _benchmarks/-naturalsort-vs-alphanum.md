---
title:  naturalsort vs alphanum
setup: |
  
tests:
  -
    name:  naturalsort
    code: |
      function naturalSort (a, b) {
      	var re = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
      		sre = /(^[ ]*|[ ]*$)/g,
      		dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
      		hre = /^0x[0-9a-f]+$/i,
      		ore = /^0/,
      		// convert all to strings and trim()
      		x = a.toString().replace(sre, '') || '',
      		y = b.toString().replace(sre, '') || '',
      		// chunk/tokenize
      		xN = x.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
      		yN = y.replace(re, '\0$1\0').replace(/\0$/,'').replace(/^\0/,'').split('\0'),
      		// numeric, hex or date detection
      		xD = parseInt(x.match(hre)) || (xN.length != 1 && x.match(dre) && Date.parse(x)),
      		yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null;
      	// first try and sort Hex codes or Dates
      	if (yD)
      		if ( xD < yD ) return -1;
      		else if ( xD > yD )	return 1;
      	// natural sorting through split numeric strings and default strings
      	for(var cLoc=0, numS=Math.max(xN.length, yN.length); cLoc < numS; cLoc++) {
      		// find floats not starting with '0', string or 0 if not defined (Clint Priest)
      		oFxNcL = !(xN[cLoc] || '').match(ore) && parseFloat(xN[cLoc]) || xN[cLoc] || 0;
      		oFyNcL = !(yN[cLoc] || '').match(ore) && parseFloat(yN[cLoc]) || yN[cLoc] || 0;
      		// handle numeric vs string comparison - number < string - (Kyle Adams)
      		if (isNaN(oFxNcL) !== isNaN(oFyNcL)) return (isNaN(oFxNcL)) ? 1 : -1; 
      		// rely on string comparison if different types - i.e. '02' < 2 != '02' < '2'
      		else if (typeof oFxNcL !== typeof oFyNcL) {
      			oFxNcL += ''; 
      			oFyNcL += ''; 
      		}
      		if (oFxNcL < oFyNcL) return -1;
      		if (oFxNcL > oFyNcL) return 1;
      	}
      	return 0;
      };
      
      for(i=0;i<1000000;i++) {
      naturalSort("mvt", "Track");
      }
  -
    name: alphanum
    code: |
      function alphanum(a, b) {
        function chunkify(t) {
          var tz = [], x = 0, y = -1, n = 0, i, j;
      
          while (i = (j = t.charAt(x++)).charCodeAt(0)) {
            var m = (i == 46 || (i >=48 && i <= 57));
            if (m !== n) {
              tz[++y] = "";
              n = m;
            }
            tz[y] += j;
          }
          return tz;
        }
      
        var aa = chunkify(a);
        var bb = chunkify(b);
      
        for (x = 0; aa[x] && bb[x]; x++) {
          if (aa[x] !== bb[x]) {
            var c = Number(aa[x]), d = Number(bb[x]);
            if (c == aa[x] && d == bb[x]) {
              return c - d;
            } else return (aa[x] > bb[x]) ? 1 : -1;
          }
        }
        return aa.length - bb.length;
      }
      
      for(i=0;i<1000000;i++) {
      alphanum("mvt", "Track");
      }
---

