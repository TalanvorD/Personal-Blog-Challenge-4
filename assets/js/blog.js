const blogEntriesSection = document.querySelector('#blog-entries'); // Gets the section that articles will be appended to

let blogEntries = []; // Initializes the working array

function init() { // Checks for a stored array of objects in local storage and if so sets it to the working array
  const storedBlogEntries = JSON.parse(localStorage.getItem('blogEntries'));
  if (storedBlogEntries.length > 0) {
    blogEntries = storedBlogEntries;
    renderBlogEntries();
  }
};

function renderBlogEntries() { // Shows the blog entries on the page
  blogEntriesSection.textContent = ''; // sets the blog-entries section to empty to prepare for rendering
  for (let i = 0; i < blogEntries.length; i++) { // Iterates through the blogEntries array
    let currentBlogTitle = blogEntries[i].blogTitle; // Storing each array item locally for rendering to the page
    let currentBlogUserName = blogEntries[i].userName;
    let currentBlogContent = blogEntries[i].blogContent;
    let currentBlogDate = blogEntries[i].datePosted;

    const blogArticle = document.createElement("article"); // Creates an article to hold the blog entry
    blogArticle.setAttribute("data-index", i); // Sets the dataset data-index of the article to match the array index
    if ((i == 0) || ((i % 2) == 0) ){
      blogArticle.setAttribute("class", "blogArticle"); // Sets the class of the article for CSS manipulation
      } else {
          blogArticle.setAttribute("class", "blogArticle blogArticleOdd"); // Sets the class of the article for CSS manipulation
      }

    const blogArticleTitle = document.createElement('h1'); // Creates a header for each title
    blogArticleTitle.textContent = currentBlogTitle; // Inserts the title text into the header
    blogArticle.appendChild(blogArticleTitle); // Appends the header to the article

    const deleteEntry = document.createElement('button'); // Makes the delete button
    deleteEntry.textContent = '❌'; // The text context of the button
    blogArticle.appendChild(deleteEntry); // Appends the button to the blog article

    const blogArticleContent = document.createElement('p'); // Creates paragraph for the blog content
    blogArticleContent.textContent = currentBlogContent; // Inserts the blog content text into the paragraph
    blogArticle.appendChild(blogArticleContent); // Appends the paragraph to the article

    const blogArticleUserName = document.createElement('footer'); // Creates a footer for each username and date stamp
    blogArticleUserName.textContent = (`Posted by: ${currentBlogUserName} on ${currentBlogDate}`); // Inserts the name and date stamp text into the footer
    blogArticle.appendChild(blogArticleUserName); // Appends the footer to the article

    blogEntriesSection.appendChild(blogArticle); // Appends the entire blog entry article to the blog-entries section
  }
};

blogEntriesSection.addEventListener('click', function (event) { // Listens for a click on the delete button for a blog article
  const blogDeleteButton = event.target;
  if (blogDeleteButton.matches('button') === true) {
    const index = blogDeleteButton.parentElement.getAttribute('data-index'); // Finds the data-index of the blog article to match the array index
    blogEntries.splice(index, 1); // Removes that blog article from the array
    localStorage.setItem('blogEntries', JSON.stringify(blogEntries)); // Stringifies the updated array of objects to local storage
    renderBlogEntries(); // Calls on renderBlogEntries to render the updated array
  }
});

init(); // Calls init() on page load