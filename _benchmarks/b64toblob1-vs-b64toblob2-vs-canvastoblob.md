---
title: b64ToBlob1 vs b64ToBlob2 vs canvasToBlob
setup: |
  function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
  
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
  
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
  
      const byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
  
      byteArrays.push(byteArray);
    }
  
    const blob = new Blob(byteArrays, {
      type: contentType
    });
    return blob;
  }
  
  function b64toBlob2(base64Data, contentType) {
      const binary = atob(base64Data)
      
      const arrayBuffer = new ArrayBuffer(binary.length)
      const ui8Array = new Uint8Array(arrayBuffer)
      let i = 0
      
      while (i < binary.length) {
        ui8Array[i] = binary.charCodeAt(i)
        i += 1
      }
      
      // We could use this as a fallback instead of ''
      // const type = dataURL.match(/data:([^;]+)/)[1]
      
      return new Blob([ui8Array], {
        type: contentType,
      })
  }
  
  var blobCallback = function(blob){}
  
  var contentType = 'image/png';
  var b64Data = 'iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';
  
  var myCanvas = document.createElement('canvas')
  var ctx = myCanvas.getContext('2d');
  var img = new Image;
  img.onload = function(){
    ctx.drawImage(img,0,0);
  };
  img.src = b64Data;
tests:
  -
    name: b64ToBlob1
    code: |
      b64toBlob(myCanvas.toDataURL().split(',')[1], contentType)
  -
    name: b64ToBlob2
    code: |
      b64toBlob2(myCanvas.toDataURL().split(',')[1], contentType)
  -
    name: canvasToBlob
    code: |
      myCanvas.toBlob(blobCallback,contentType, .8)
---
Native canvas.toBlob vs canvas.toDataURL().toBlob()
