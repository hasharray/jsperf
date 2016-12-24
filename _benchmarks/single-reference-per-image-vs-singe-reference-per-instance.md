---
title: single reference per image vs singe reference per instance
setup: |
  <canvas id='canvas' width='1920px' height='1080px'></canvas>
  
  <script type='text/javascript'>
  var img= new Image();
  img.src= 'https://wallpaperscraft.com/image/gorges_du_verdon_france_provence_bridge_113005_3840x2160.jpg'
  
  var canvas= document.getElementById('canvas');
  var context= canvas.getContext('2d');
  context.drawImage(img, 0, 0);
  
  </script
tests:
  -
    name: single reference per image
    code: |
      function Reference() {
      
        this.image= img;
        this.xy= [400, 300];
      }
      
      function instance() {
      
        this.reference= Reference;
        this.xy= [30, 40];
      }
      
      instance.prototype.draw= function() {
      
        context.drawImage(this.reference.image, this.reference.xy[0], this.reference.xy[1], this.xy[0], this.xy[1], 1920, 1080);
      }
      
      var instances= [];
      
      for (var i= 0; i < 1000; i++) {
        instances[i].push(new instance());
      }
      
      for (var i= 0, l= instances.length; i < l; i++) {
        instances.draw();
      }
  -
    name: singe reference per instance
    code: |
      function Reference() {
      
        this.image= img;
        this.xy= [400, 300];
      }
      
      function instance() {
      
        this.reference= new Reference();
        this.xy= [30, 40];
      }
      
      instance.prototype.draw= function() {
      
        context.drawImage(this.reference.image, this.reference.xy[0], this.reference.xy[1], this.xy[0], this.xy[1], 1920, 1080);
      }
      
      var instances= [];
      
      for (var i= 0; i < 1000; i++) {
        instances[i].push(new instance());
      }
      
      for (var i= 0, l= instances.length; i < l; i++) {
        instances.draw();
      }
---
A test to determine if there is any performance difference to creating many objects that reference a single image or one object to reference that image
