---
title: RegExpLoremIpsum vs RegExpLoremIpsum
setup: |
  
tests:
  -
    name: RegExpLoremIpsum
    code: |
      var regexp = new RegExp("(max)*;");
      				
      				for(var i=0;i<10000;i++){
      					regexp.exec("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue lacus vitae diam tristique porta. Aliquam aliquam, leo placerat dictum sodales, massa ex feugiat mauris, ut faucibus nulla enim id libero. Phasellus gravida at diam at aliquam. Praesent rhoncus ligula elit, at pretium lacus tincidunt a. Curabitur finibus consectetur luctus. In fermentum nisi eu lectus euismod, quis porttitor quam porta. Etiam ut fringilla velit. Suspendisse id quam sit amet enim mattis vestibulum sed sed mi. Proin neque felis, pellentesque et venenatis sed, condimentum nec arcu. Cras porta justo aliquam, porta libero suscipit, lobortis risus. Fusce ultrices ipsum rhoncus orci imperdiet venenatis. Integer vulputate nec erat at malesuada. Aliquam consequat elit non consequat pharetra. Fusce eget velit sed ante condimentum vehicula. Cras placerat urna eu felis imperdiet cursus. Quisque viverra ipsum turpis, vel consequat lectus suscipit vel.");
      				}
  -
    name: RegExpLoremIpsum
    code: |
      var regexp = new RegExp("(max)*;");
      				
      				for(var i=0;i<10000;i++){
      					regexp.exec("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut congue lacus vitae diam tristique porta. Aliquam aliquam, leo placerat dictum sodales, massa ex feugiat mauris, ut faucibus nulla enim id libero. Phasellus gravida at diam at aliquam. Praesent rhoncus ligula elit, at pretium lacus tincidunt a. Curabitur finibus consectetur luctus. In fermentum nisi eu lectus euismod, quis porttitor quam porta. Etiam ut fringilla velit. Suspendisse id quam sit amet enim mattis vestibulum sed sed mi. Proin neque felis, pellentesque et venenatis sed, condimentum nec arcu. Cras porta justo aliquam, porta libero suscipit, lobortis risus. Fusce ultrices ipsum rhoncus orci imperdiet venenatis. Integer vulputate nec erat at malesuada. Aliquam consequat elit non consequat pharetra. Fusce eget velit sed ante condimentum vehicula. Cras placerat urna eu felis imperdiet cursus. Quisque viverra ipsum turpis, vel consequat lectus suscipit vel.");
      				}
---

