---
title: trim1 vs trim2 vs trim3
setup: |
  function trim0(str) { return str.replace(/^(\s*)/, '').replace(/\s*$/, ''); }
    function trim1(str) { return str.replace(/^\s\s*/, '').replace(/\s\s*$/, ''); }
    function trim2(str) { return str.replace(/^\s+/, '').replace(/\s+$/, ''); }
    function trim3(str) { return str.substring(Math.max(str.search(/\S/), 0), str.search(/\S\s*$/) + 1); }
    function trim4(str) { return str.replace(/^\s+|\s+$/g, ''); }
    function trim5(s) {
    	var str = s.match(/\S+(?:\s+\S+)*/);
    	return str ? str[0] : '';
    }
    function trim6(str) { return str.replace(/^\s*(\S*(\s+\S+)*)\s*$/, '$1'); }
    function trim7(str) { return str.replace(/^\s*(\S*(?:\s+\S+)*)\s*$/, '$1'); }
    function trim8(str) { return str.replace(/^\s*((?:[\S\s]*\S)?)\s*$/, '$1'); }
    function trim9(str) { return str.replace(/^\s*([\S\s]*?)\s*$/, '$1'); }
    
    var trim10_whitespace = ' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
    function trim10(s) {
    	var str = s;
    	for (var i = 0; i < str.length; i++) {
    		if (trim10_whitespace.indexOf(str.charAt(i)) === -1) {
    			str = str.substring(i);
    			break;
    		}
    	}
    	for (i = str.length - 1; i >= 0; i--) {
    		if (trim10_whitespace.indexOf(str.charAt(i)) === -1) {
    			str = str.substring(0, i + 1);
    			break;
    		}
    	}
    	return trim10_whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
    }
    function trim11(s) {
    	var str = s.replace(/^\s+/, '');
    	for (var i = str.length - 1; i >= 0; i--) {
    		if (/\S/.test(str.charAt(i))) {
    			str = str.substring(0, i + 1);
    			break;
    		}
    	}
    	return str;
    }
    function trim12(s) {
    	var	str = s.replace(/^\s\s*/, ""),
    		ws = /\s/,
    		i = str.length;
    	while (ws.test(str.charAt(--i)));
    	return str.slice(0, i + 1);
    }
    // trim12 with \s+ insteas od \s\s*
    function trim13(s) {
    	var	str = s.replace(/^\s+/, ""),
    		ws = /\s/,
    		i = str.length;
    	while (ws.test(str.charAt(--i)));
    	return str.slice(0, i + 1);
    }
    // trim12 without single ws=/\s/
    function trim14(s) {
    	var	str = s.replace(/^\s\s*/, ""),
    		i = str.length;
    	while (/\s/.test(str.charAt(--i)));
    	return str.slice(0, i + 1);
    }
    
    // same as trim11, but > not >=
    // buggy for "a " in Chromium
    function trim15(str) {
    	str = str.replace(/^\s+/, '');
    	for (var i = str.length - 1; i > 0; i--) {
    		if (/\S/.test(str.charAt(i))) {
    			str = str.substring(0, i + 1);
    			break;
    		}
    	}
    	return str;
    }
    trim15.buggy = true;
    
    // trim12 on http://zanstra.com/base/blog/trim_mac_roundup
    var trim16_whitespace = ' \n\r\t\v\f\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
    function trim16(s) {
    	var i = 0, j = s.length-1;
    	while(i < s.length && trim16_whitespace.indexOf(s.charAt(i)) != -1)
    		i++;
    	while(j > i && trim16_whitespace.indexOf(s.charAt(j)) != -1)
    		j--;
    	return s.substring(i,j+1);
    }
    
    // trim12 in http://blog.stevenlevithan.com/archives/faster-trim-javascript#comment-13585
    // looks to be buggy in Opera and Chromium. Works ok in Epiphany.
    // buggy for " ala ma " in Chromium
    // buggy for "ala ma " in Chromium
    function trim17(str) {
    	var str1 = str.replace(/^\s\s*/, '');
    	var len = str1.length;
    	if (len && /\s/.test(str1.charAt(len-1))) {
    		var re = /.*\S/g;
    		re.test(str1);
    		str1 = str1.slice(0, re.lastIndex);
    	}
    	return str1;
    }
    trim17.buggy=true;
    
    // trim in http://blog.stevenlevithan.com/archives/faster-trim-javascript#comment-39371
    // slightly changed return
    //var trim18_whitespace = trim21_whitespace;
    function trim18(str) {
    	var len = str.length;
    	if (len) {
    		while (trim21_whitespace[str.charCodeAt(--len)]);
    		if (++len) {
    			var i = 0;
    			while (trim21_whitespace[str.charCodeAt(i)]) {
    				++i;
    			}
    		}
    		return str.substring(i, len);
    	}
    	return str;
    }
    
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript#comment-21439
    function trim19 (str) {
    	var ws = /\s/, _start = 0, end = str.length;
    	while(ws.test(str.charAt(_start++)));
    	while(ws.test(str.charAt(--end)));
    	return str.slice(_start - 1, end + 1);
    }
    
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript#comment-28776
    function trim20(str) {
    	var whitespace = " \n\r\t\f";
    	for (var i = 0; i < str.length; i++)
    		if (whitespace.indexOf(str.charAt(i)) < 0)
    			break;
    
    	for (var j = str.length - 1; j >= i; j-- )
    		if (whitespace.indexOf(str.charAt(j)) < 0)
    			break;
    
    	return str.substring(i, j+1);
    }
    
    // in original it was manually populated, but looping is nicer
    var trim21_whitespace = {};
    var trim21_ww = [
    	0x0009,0x000a,0x000b,0x000c,0x000d,0x0020,0x0085,0x00a0,0x1680,0x180e,0x2000,0x2001,0x2002,0x2003,0x2004,0x2005,
    	0x2006,0x2007,0x2008,0x2009,0x200a,0x200b,0x2028,0x2029,0x202f,0x205f,0x3000
    ];
    for (var i = 0; i < trim21_ww.length; i++) {
    	trim21_whitespace[trim21_ww[i]] = true;
    }
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript#comment-25052
    // looks to be buggy as it returns different results than others in Epiphany, Chromium (correct in Opera)
    // bug for "  a"
    // buggy for  ' 40. To no one will we sell.'  in Chromium
    function trim21(str) {
    	var n = str.length;
    	var s = trim21_whitespace;
    	var i;
    	if (!n) return str;
    	if (n && s[str.charCodeAt(n-1)]) {
    		do {
    			--n;
    		} while (n && s[str.charCodeAt(n-1)]);
    		if (n && s[str.charCodeAt(0)]) {
    			i = 1;
    			while (i < n && s[str.charCodeAt(i)])
    				++i;
    		}
    		return str.substring(i, n);
    	}
    	if (n && s[str.charCodeAt(0)]) {
    		i = 1;
    		while (i < n && s[str.charAt(i)])
    			++i;
    		return str.substring(i, n);
    	}
    	return str;
    };
    trim21.buggy=true;
    
    // rialto framework, http://blog.stevenlevithan.com/archives/faster-trim-javascript#comment-25038
    // VERY looks to be buggy as it returns different results than others in Epiphany, Chromium, Opera (in Opera even differently)
    // bug for " ", ' 40. To no one. ', '40. To no one. '
    function trim22(str) {
    	return str.replace(/^\s*(\b.*\b|)\s*$/, '$1');
    }
    trim22.buggy=true;
    
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript#comment-13585
    // slightly moded return
    // looks to be buggy in Chromium (correct in Opera and Epiphany)
    // buggy for " ala ma " in Chromium
    // buggy for "ala ma " in Chromium
    function trim23(s) {
    	var str = s.replace(/^\s\s*/, ''),
    	len = str.length;
    	if (len && /\s/.test(str.charAt(len-1))) {
    		var re = /.*\S/g;
    		re.test(str);
    		return str.slice(0, re.lastIndex);
    	} else {
    		return str;
    	}
    }
    trim23.buggy=true;
    
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript#comment-6808
    this.trim24 = (function(){
        var ws = {},
            chars = ' \n\r\t\v\f\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
        for(var i = 0; i < chars.length; i++ )
            ws[chars.charAt(i)] = true;
    
        return function( str ){
            var s = -1,
                e = str.length;
            while( ws[str.charAt(--e)] );
            while( s++ !== e && ws[str.charAt(s)] );
            return str.substring( s, e+1 );
        };
    })();
    
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript#comment-6169
    function trim25(s) {
    	var str = s.replace(/^\s+/, '');
    	for (var i = str.length; i--;)
    		if (/\S/.test(str.charAt(i)))
    			return str.substring(0, ++i)
    	return str
    }
    
    // bug for "  s"
    function trim26(str) {
    	return str.replace(/^\s*(\S.*\S)?\s*$/, '$1');
    }
    trim26.buggy=true;
    
    
    
    var inp = "    \n\n \n\n   a \n a\n  a\n    a\n   a  \n\t\ta\t\ta\njahsdkjahkjshdakjhsdkahskd akhsjdh akjshd kashdkajhsd kajshd \nkauyiuqhwep iasldk qpwoie ad  \n   askdjaslkdjaslkjdaoiur qowioqwhr aspodiquw ijasod iqwiue pqowipoqiw epoqiwpeo iaslkjdqur \t kjahsdkj hakshd\nkajhdk\nk as d  \t\n".split('\n');
    
    function e(f) {
       var x = [];
       for (i = 0; i < inp.length; i++) {
         x.push(f(inp[i]));
       }
       return x;
    }
tests:
  -
    name: trim1
    code: |
      e(trim1)
  -
    name: trim2
    code: |
      e(trim2)
  -
    name: trim3
    code: |
      e(trim3)
---

