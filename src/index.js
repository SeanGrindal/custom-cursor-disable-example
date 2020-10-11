const CustomCursor = require('custom-cursor.js').default 

const customCursor = new CustomCursor('.cursor', {
   focusElements: [{
      selector: '.photo-link',
      focusClass: '', // no focus class is applied
      mouseenter: () => {
        customCursor.disable()       
      },
      mouseleave: () => {
        customCursor.enable()       
      }
   }, 'a']
}).initialize()