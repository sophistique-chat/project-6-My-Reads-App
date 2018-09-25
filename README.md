# **My Reads App (React)**

### This is to accomplish Project 6 for Udacity Nanodegree course (Front-End Web Dev)
**Files:**

| File type | Description | File name |
| ------ | ------ |------ |
| md | Udacity supplied, modified | CONTRIBUTING.md, README.md, SEARCH_TERMS.md|
| json | Udacity supplied | package.json|
| Folder | Udacity supplied | /public, /src|
| HTML | Udacity supplied | /public/index.html|
| CSS Files | Udacity supplied, modified | /src/App.css, src/index.css  |
| JS | Udacity supplied, modified | /src/index.js, /src/App.js, /src/App.test.js, /src/BooksAPI.js|
| Images | Udacity supplied | /src/icons, /public/favicon.ico |
| JS | React Component file | /src/Main.js, /src/WantToRead.js, /src/CurrentlyReading.js, /src/Read.js, /src/Book.js, /src/ShelfChanger.js, /src/Des.js, /src/BookSearch.js |

----
## **Requirements:**
----
##### _Using the provided starter code containing an API server along with client library, create a Bookshelf App that allows you to select and categorize books you have read, are currently reading, or want to read by using React. In order to pass the project the following steps should be implemented:_
----
### 1) Application Setup:
 - The application was created with `create-react-app` and requires only `npm install` and `npm start` to get it installed and launched.
 - An updated `README` that describes the project and has instructions for installing and launching the project is included.
 
### 2) Main Page:
 - The main page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and author(s).
 - The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
 - When the browser is refreshed, the same information is displayed on the page.
 ### 3) Search Page:
- The search page has a search input field.
- The search page behaves correctly:
        a) As the user types into the search field, books that match the query are displayed on the page, along with their titles and author(s). You can use throttle/debounce but are not required to do so.
        b) Search results are not shown when all of the text is deleted out of the search input box.
        c) Invalid queries are handled and prior search results are not shown.
        d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
        e) The user is able to search for multiple words, such as “artificial intelligence.”
- Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.
- If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf should be selected on the search page. If that book's shelf is changed on the search page, that change should be reflected on the main page as well. The option "None" should be selected if a book has not been assigned to a shelf.
- When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.
 ### 4) Routing:
- The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
- The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.
 ### 5) Code Functionality:
- Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly.
- Books have the same state on both the search page and the main application page: If a book is on a bookshelf, that is reflected in both locations.
- The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using `key` for list items. All code is functional and formatted properly.
----
----
## **How to run the application:**
----
* Download all nessessary files from [here].
* Open your terminal.
* `cd` in the project directory.
* Install all project dependencies with `npm install`.
* Start the development server with `npm start`.
* With your server running, the project will automatically open at the URL: `http://localhost:3000`.
* On the starter page there are three editable shelves with books:
    * use a dropdown menu at each book to move it to the desired shelf;
    * get more information about a book by hitting `Learn More` button;
    * search for the books you're interested in by hittin the `Add` button at the bottom of the page;
    * add the books you want to see in your library directly from the search page;
    * Enjoy the experience!

----
#### **NOTE!**

**The code was tested to the best of project author's ability using:**
- Browsers: Google Chrome, Google Chrome Canary and Opera;
- Mobile devices: Android powered, 4.8 & 5.0 inch screens.
 - **That does not unfortunately guarantee that your device will display things as expected**
----

----
## **External libraries:**
----
- #### [React]

- #### [Google Fonts]

----
----
## **Useful Sources:**
----
- [Stackoverflow]
- [W3Schools]
- [MDN]
- [Dillinger]
- [Google]
- [Udacity project guide]
----
**All resources and ideas that needed attribution were either mentioned above or added directly into the code.**

----
_Developed by a proud Grow with Google scholarship recipient (USA, 2018)_

----
[Udacity project guide]: <https://github.com/udacity/reactnd-project-myreads-starter/blob/master/README.md>
[here]: <https://github.com/sophistique-chat/project-6-My-Reads-App>
[Stackoverflow]: <https://stackoverflow.com/>
[W3Schools]: <www.w3schools.com>
[MDN]: <https://developer.mozilla.org/>
[Dillinger]: <https://dillinger.io/>
[Google]: <www.google.com>
[React]: <https://reactjs.org/>
[Google Fonts]: <https://fonts.google.com/specimen/Bentham>
