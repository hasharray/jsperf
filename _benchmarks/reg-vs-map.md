---
title: reg vs map
setup: |
  
tests:
  -
    name: reg
    code: |
      function tagIsAutoClose(tagName) {
        return /^(area|base|br|col|embed|hr|img|input|keygen|param|source|track|wbr)$/i.test(tagName);
      }
      
      
      var cases = 'a,abbr,acronym,address,applet,area,article,aside,audio,b,base,basefont,bdi,bdo,big,blockquote,body,br,button,canvas,caption,center,cite,code,col,colgroup,command,datalist,dd,del,details,dfn,dialog,dir,div,dl,dt,em,embed,fieldset,figcaption,figure,font,footer,form,frame,frameset,h1,h2,h3,h4,h5,h6,head,header,hr,html,i,iframe,img,input,ins,kbd,keygen,label,legend,li,link,main,map,mark,menu,menuitem,meta,meter,nav,noframes,noscript,object,ol,optgroup,option,output,p,param,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,small,source,span,strike,strong,style,sub,summary,sup,table,tbody,td,textarea,tfoot,th,thead,time,title,tr,track,tt,u,ul,var,video,wbr'.split(',');
      
      for (var i = 0, l = cases.length; i<l ;i++){
        tagIsAutoClose(cases[i])
      }
  -
    name: map
    code: |
      var arrTag = 'area|base|br|col|embed|hr|img|input|keygen|param|source|track|wbr'.split('|');
      var mapTag = {};
      for (var i = 0, l = arrTag.length; i<l ;i++){
        mapTag[arr[i]] = i;
      }
      function tagIsAutoClose(tagName) {
        return mapTag[tagName]
      }
      
      var cases = 'a,abbr,acronym,address,applet,area,article,aside,audio,b,base,basefont,bdi,bdo,big,blockquote,body,br,button,canvas,caption,center,cite,code,col,colgroup,command,datalist,dd,del,details,dfn,dialog,dir,div,dl,dt,em,embed,fieldset,figcaption,figure,font,footer,form,frame,frameset,h1,h2,h3,h4,h5,h6,head,header,hr,html,i,iframe,img,input,ins,kbd,keygen,label,legend,li,link,main,map,mark,menu,menuitem,meta,meter,nav,noframes,noscript,object,ol,optgroup,option,output,p,param,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,small,source,span,strike,strong,style,sub,summary,sup,table,tbody,td,textarea,tfoot,th,thead,time,title,tr,track,tt,u,ul,var,video,wbr'.split(',');
      
      for (var i = 0, l = cases.length; i<l ;i++){
        tagIsAutoClose(cases[i])
      }
---

