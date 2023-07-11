# horizontal-reader
A simple javascript / css horizontal scrolling ebook style reader for websites

This is a very lightweight and simple horizontal scroller made for reading a lot of text formatted in basic html. It is modeled after ebook readers. Although made for text, you can include images and pretty much any other html / css elements you like on the page.

This will automatically adapt if you change the browser size, and it will collapse into one vertical scroll column on small screens.

It relies heavily on css columns.

*** Things that still need some help, if you're interested in contributing! ***

- The css ends with a bunch of media queries to try to keep nice-proportioned margins for different screen sizes. Maybe you can think of a more elegant / better solution?

- Sometimes the page scroll gets a few pixels off, depending on browser width. I think this has to do with floating-point rounding problems in the javascript, but I haven't yet figured out how to fix. Maybe you can!

  :)
