# Project 4 (paired API-powered application with jQuery)

## Due date

Project due dates can be found [here](https://github.com/HackerYou/bootcamp-notes/blob/master/stuff-you-need-to-know/important-dates.md).

## Project description

Your task for this week is to collaboratively create a web application using JavaScript and an API.

We've provided a list of RESTful APIs that can be accessed publicly and have decent documentation. Try to work with an API that has data you find interesting - it'll be more fun that way! If you're not sure that an API meets requirements, talk to an instructor.

We encourage you to use the pair-programming method: both team members work together on one computer. One person is the typer, but both are talking about what each line of code does. The typer role switches back and forth **often**. Don't just commit from one person's GitHub account. Push your changes, have the other person pull on their machine, and work from there. (We will be checking the GitHub commits.)

Your partners are listed [here](https://docs.google.com/spreadsheets/d/1nNtc4s0M6aWJv1K_sNPYzFOXappNFq9LZYzwl4B9JQg/edit?usp=sharing).

## Project objective

To show a understanding of jQuery, DOM manipulation, error handling, and UI design. And to demonstrate competence in pair programming and communication.

### APIs built by people in the Juno community

-   [Makeup API](https://makeup-api.herokuapp.com/)
-   [Drag Race API](https://drag-race-api.readme.io/docs)
-   [Harry Potter API](https://potterapi.com/)

### Public APIs

-   [Zomato](https://developers.zomato.com/api)(restaurants)
-   [Open Brewery DB](https://www.openbrewerydb.org/) (breweries)
-   [Pokemon API](https://pokeapi.co/) (Pokemon)
-   [MovieDB](https://www.themoviedb.org/documentation/api) (movies)
-   [Mapquest API](https://developer.mapquest.com/) (maps)

### Other APIs

There are lots of other public APIs to explore [here](https://github.com/toddmotto/public-apis), but be warned: there is no guarantee that an API will work the way you want it to. It's very important to look at the data you are able to get back from an API **before** committing to a project idea!

### Tips for getting started

-   Track down an API that is of interest of you and work through the documentation to see if the information you want is available.
-   Be sure that the API **DOES NOT** require **oAuth** authentication. Requiring oAuth doesn't preclude you from using the API but it adds another layer of complexity to the project.
-   Use a tool like [Postman](https://www.getpostman.com/) to help access your data.
-   Be aware that APIs often lack documentation and the creators have no obligation to make accessing the data an easy task for all. If you get stuck due to information being missing, or complexity, pivot your approach.
-   In pseudo code, write out what you want to accomplish and what steps you'll take to get there. When ready, identify which steps would best be served as methods.

**pseudo code example**

```javascript
// Create app namespace to hold all methods
const app = {};

// Collect user input
app.collectInfo = function() {};

// Make AJAX request with user inputted data
app.getInfo = function() {};

// Display data on the page
app.displayInfo = function() {};

// Start app
app.init = function() {};

$(function() {
	app.init();
});
```

### Gotchas

Previous projects by Juno students have included the use of geolocation in their projects. In the past, this was an easy process, but recently Google has introduced properties in their browser that blocks this ability unless the domain is secured by an SSL certificate. Using geolocation will work locally, but unfortunately will not work on your live site unless it is secure.

In order to secure your site, it's best to see if your host offers SSL certificates, or use a third-party service like [Cloudflare](https://www.cloudflare.com/plans). If this isn't possible, GitHub offers free hosting of sites with secured certificates. Ask an instructor to help you down this path. If you DO host your project on a domain that has `https` you will need to make sure any thing that you link or and AJAX requests that you make have a domain that is `https`. Otherwise you will get errors when it is deployed!

If you have an API that does not support CORS you might have to use what's called a proxy server, we have set one up at [https://github.com/hackeryou/json-proxy](https://github.com/hackeryou/json-proxy) , if you think this is the case, let an instructor know and we can [show you how it works](https://github.com/HackerYou/bootcamp-notes/blob/master/applied-javascript/fetching-data-with-something-other-than%24.ajax.md).

## Project proposals

Once you have a good idea, we want you to fill out a [scope outline document](https://forms.gle/B9cJMn8qmu7YEXBa7) and then meet with **an instructor who will approve and submit it for you**. This is designed to make you think about what your minimum viable product is (i.e. what is the smallest version of this idea that is a functional product), and it mimics a project approval process you may do at work. Here is [an example of a scope approval](https://hychalknotes.s3.amazonaws.com/Scope%20Approval%20Example.pdf).

Remember that you can have as many stretch goals as you want, but the minimum viable product is what's stated on your scope document and you are **committed to producing** that by the deadline.

> **It is always better to under-promise and over-deliver.**

## How will this project be graded?

You will be given an opportunity to provide feedback about the experience of working with your partner at the end of the project.

> **It is just as important to make a functional product as it is to work well with your partner.** We take note of who is respectful, willing to take feedback, and mindful of their partners' learning. Both members of the team should have a complete understanding of the technical aspects of the project. It is **not acceptable** for one person to do the HTML and CSS and one person to do the JS.

**Requirements:**

-   It is clear to the user what the app does and results are displayed legibly
-   Adds to the DOM dynamically using JavaScript
-   App is dynamic based on user interaction (e.g. drop down menu, search field)
-   App interacts with at least one API
-   Code is organized using an object (i.e. it is namespaced)
-   GitHub repo has more than one significant commit from each student
-   App and interactions are accessible
-   Site is live on GH Pages or student's own URL
-   Errors are handled effectively
-   Consistent class naming convention is used throughout

You will also be given a general mark on how well you adhere to best practices mentioned in class. Best practices include but may not be limited to:

-   Extraneous code is removed (including console.log)
-   Semantic HTML elements are used properly
-   Setup snippet is used
-   Wrapper used to constrain content on large displays
-   One external `.css` stylesheet is used for whole project
-   It is clear to the user what the app does
-   Site is responsive and uses media queries
-   ID selectors should not be used to style elements
-   Sass selectors should not be nested more than 3 levels deep


You will also each be given a mark for presenting your project.

<!-- You will also be given individual marks for your project presentation:

-   Student was loud enough for everyone to hear
-   Student was able to identify a technical win
-   Student was able to effectively identify a technical challenge
-   Student did not go over time -->

<!-- ## Peer Code Review

Part of your mark for this project will be from a Peer Code Review. You will be given a rubric and a review partner once the project has been handed in. You will take one hour in class time to sit together and deliver your feedback to each other. At the end of the hour you will be asked to grade your partner's review of your code. Both their review of your code and their evaluation of your review will be included in your mark for this project. 

### Why is code review important? 

[Here is a resource](https://github.com/HackerYou/bootcamp-notes/blob/master/stuff-you-need-to-know/resources-and-cheat-sheets/code-review-best-practices.md) to find out more about how code reviews in the professional world and why they are important to practice. 

### What should I look for in a good review? 

You are looking for an opportunity to imporve your code and be exposed to new ways of thinking. You should evaluate your partner's review of your code according to these three criteria:

Did they ...

1. Deliver a clear and thorough review
2. Ask open-ended questions
3. Provide positive and constructive criticism

You will be given a chance to make any further comments about their review as well (this feedback will be given to them directly and not filtered). -->

## Submitting your project

1. Rename your organization's repository to the title of your app, and match its naming convention with the rest of your project.

-   (You don't have to rename your org if its naming convention doesn't match)

2. Remove any unneeded files from the project.
3. Push your files to GitHub (you should be doing this continuously, not just at the end!)
4. Deploy your website to GitHub Pages or on your own domain/subdomain.
5. Submit your repo URL using [the project submission form](https://docs.google.com/forms/d/e/1FAIpQLSeRr63HMZPrJDomUPKwtmYRsTXWP8pCPFdGEyE2cFst-7BFUQ/viewform).


<!-- ## #design in Helpcue

Though design isn't the core focus of the bootcamp, having a well-designed and cohesive project will help provide a professional polish to your portfolio pieces.

Whether you need advice on colour schemes, fonts, layout or a wider professional opinion, manage your time so that you can take advantage of instructor and peer feedback on design during project work time. 🎨 -->

## Lateness

Projects handed in on the same date as the deadline but after the requested time (usually 10 a.m.) will receive a 10% penalty. Students will receive an additional 10% deduction for each day the project is late, up to a maximum penalty of 30% (or 3 days late). After 3 days, the project will receive a total mark of 0.

# No plagiarism!! 👀 We'll be watching for it!

Plagiairism is presenting someone else's work as your own. When you use other developers' work, you must credit them on the site or in the comments. If you think something in your project walks the line, check with an instructor **before handing in your project**.
