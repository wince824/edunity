summary
 React is a JavaScript library, not a framework.
It focuses on one job only: building user interfaces.
React follows the Unix philosophy:
o Do one thing, and do it well.
React does not force structure or tools — it works alongside other libraries.
Why React is different:
• React is declarative
• Developers describe what the UI should look like
• React handles how the DOM updates happen
The HTML DOM and the document Object
• The HTML DOM (Document Object Model) is how the browser represents a web page.
• The DOM turns an HTML page into a tree of objects that JavaScript can read and 
manipulate.
• At the top of this tree is the document object.
• The document object is the owner of all elements on the page.
• Every <div>, <p>, <input>, and <form> exists as an object in the DOM.
• To interact with any HTML element, JavaScript must find it first using document.
 
 Finding HTML Elements in the DOM
JavaScript provides multiple ways to locate elements in an HTML page:
Common DOM selection methods:
• document.getElementById("id")
o Finds one unique element
o Returns the element or null
• document.getElementsByTagName("tag")
o Finds all elements with a given tag
o Returns an HTMLCollection