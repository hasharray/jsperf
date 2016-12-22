---
title: One liner vs Loop
setup: |
  
tests:
  -
    name: One liner
    code: |
      var options = [
         [
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: true
            }
         ],
      
         [
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: true
            }
         ],
      
         [
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: true
            }
         ]
      ];
      
      function hasSelected () {
      return ~options.map(parentOptions => parentOptions.filter(childOption => childOption.selected).length).filter(length => length > 0);
      }
      
      console.log(hasSelected());
  -
    name: Loop
    code: |
      var options = [
         [
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: true
            }
         ],
      
         [
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: true
            }
         ],
      
         [
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: false
            },
            {
               selected: true
            }
         ]
      ];
      
      function hasSelected () {
      		let hasSelected = false;
      
      		// Loop through the parent arrays
      		options.forEach((parentOptions) => {
      			// Loop through the child objects  
      			parentOptions.forEach((childOption) => {
      				// Test if the child option is selected and update hasSelected to true
      				if (childOption.selected) hasSelected = true;
      			});
      		});
      
      		return hasSelected;
      }
      
      console.log(hasSelected());
---
Testing if a value is selected
