# assignment-5

1. The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is that,
   getElementById targets a specific element with a specific name while getElementsByClassName targets all the elements with the same name.
   querySelector returns the first singlular CSS selector that it matches with while querySelectorAll returns all of the matching CSS selectors.

2. To create and insert a new elemont inside the DOM we must first create the element using document.createElement() and then insert it using appendChild.

3. When an event occurs inside an element it branches out to its parent element then the parent of that parent and then the parent of that parent until it reaches the root document, this is Event Bubbling.

4. When we add an event listener to a parent instead of adding multiple listeners for the children inside of it to handle all of the events of the children inside it then thats Event Delegation. It is useful because it improves performance.

5. preventDefault() stops the default action for an event. ex-Like reloading the page when we click a button,
   while stopPropagation() stops the event from reaching its parents.
