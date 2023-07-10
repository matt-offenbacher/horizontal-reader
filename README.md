# horizontal-reader
A simple javascript / css horizontal scrolling ebook style reader for websites

This is a very light-weight e-book style horizontal scroller made for reading a lot of text -- although you can include images and pretty much any other html elements you like on the pages.

It uses css columns and "scroll-behavior: smooth;" for page animations.

It will automatically adapt if you change browser size, and collapses into one vertical scroll column on small screens.

*** Things that still need some help, if you're interested in contributing! ***

- The css ends with a bunch of media queries to try to keep nice-proportioned margins for different screen sizes. Maybe you can think of a more elegant / better solution?

- Sometimes the page scroll gets a few pixels off, depending on browser width. I beleive this has to do with floating-point rounding problems in the javascript, but I haven't yet figured out how to fix. Maybe you can!

  :)
