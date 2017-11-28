![GeneralAssemb.ly](https://github.com/generalassembly/ga-ruby-on-rails-for-devs/raw/master/images/ga.png "GeneralAssemb.ly")

# FEWD Week #4: JavaScript Basics

<br>

---


### Description 

The team from Relaxr is back...again! They want their page to be more interactive and asked you to add JavaScript to their source code. You've been given the HTML and CSS but will need to create a JavaScript file and add a few different pieces of interactivity:  Users should be able to click a link and have the remainder of the blog's content slide down and appear on the page, both on the main content column and the side bar; users should also be able hide the content when they are finished reading. See a detailed technical explanation below.


<br>

---


### Real-World Applications


- Practice programmatic thinking to plan before writing code
- Use basic JavaScript to create an interactive page based on a user action
- Link an external JavaScript file from HTML


<br>

---


### Technical Requirements 
- Select the appropriate DOM elements with selectors upon a user's click using ```onclick```
- If a user clicks "Read More" on the primary column:

    + Have the html element with the ```id show-this-on-click``` and ```class readless``` appear on the page. 
    + Have the html element with the ```class readmore``` disappear
    + Hint: Think about how you would do it with CSS

- If a user clicks "Read Less" on the primary column:

    +  Have the html element with the ```id show-this-on-click``` and ```class readless``` disappear on the page. 
    +  Have the html element with the ```class readmore``` appear
    +  Hint: Think about how you would do it with CSS

- Using the same functions as above, if a user clicks the "Learn More" link in the sidebar, 
    + Have the html element with the ```id learnmoretext``` appear
    + Have the html element with the ``class learnmore`` disappear

- **Bonus:** Prevent a page from jumping to the top when clicking all links 
    + with the ```event.preventDefault()``` function [More Info]( https://www.w3schools.com/jsref/event_preventdefault.asp)
<br>

---

### Resources

- [Starter Code](starter_code)
- [Javascript Events](https://www.w3schools.com/js/js_events.asp)
- [Javascript DOM Selectors](https://plainjs.com/javascript/selecting/)


<br>

---

### Final Project Milestone 1

Start thinking about your final projects!! We will start next week! 
[Final Project Information](../../Final_Project/final_project_requirements.md)
