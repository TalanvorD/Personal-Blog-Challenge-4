const blogTitleInput = document.querySelector('#blog-title');
const userNameInput = document.querySelector('#user-name');
const blogContentInput = document.querySelector('#blog-content');
// un-needed? const submitEntryButton = document.querySelector('#blog-entry-button');
const submitEntry = document.querySelector('#blog-entry-form');
const blogEntriesSection = document.querySelector('#blog-entries');

let blogEntries = []; // Initializes the working array

function init() { // Checks for a stored array of objects in local storage and if so sets it to the working array
  const storedBlogEntries = JSON.parse(localStorage.getItem('blogEntries'));
  if (storedBlogEntries !== null) {
    blogEntries = storedBlogEntries;
  }
  renderBlogEntries();
};

function renderBlogEntries() { // Shows the blog entries on the page
  blogEntriesSection.textContent = ''; // sets the blog-entries section to empty to prepare for rendering
  for (let i = 0; i < blogEntries.length; i++) { // Iterates through the blogEntries array
    let currentBlogTitle = blogEntries[i].blogTitle; // Storing each array item locally for rendering to the page
    let currentBlogUserName = blogEntries[i].userName;
    let currentBlogContent = blogEntries[i].blogContent;
    let currentBlogDate = blogEntries[i].datePosted;

    const blogArticle = document.createElement("article"); // Creates an article to hold the blog entry
    blogArticle.setAttribute("data-index", i); // Sets the dataset of the article to data-index to match the array index
    blogArticle.setAttribute("class", "blogArticle"); // Sets the dataset of the article to data-index to match the array index

    const blogArticleTitle = document.createElement('h1'); // Creates a header for each title
    blogArticleTitle.textContent = currentBlogTitle; // Inserts the title text into the header
    blogArticle.appendChild(blogArticleTitle); // Appends the header to the article

    const blogArticleContent = document.createElement('p'); // Creates paragraph for the blog content
    blogArticleContent.textContent = currentBlogContent; // Inserts the blog content text into the paragraph
    blogArticle.appendChild(blogArticleContent); // Appends the paragraph to the article

    const blogArticleUserName = document.createElement('footer'); // Creates a footer for each username and date stamp
    blogArticleUserName.textContent = (`Posted by: ${currentBlogUserName} on ${currentBlogDate}`); // Inserts the name and date stamp text into the footer
    blogArticle.appendChild(blogArticleUserName); // Appends the footer to the article

    //const deleteButton = document.createElement('button'); // Makes the delete button
    //deleteButton.textContent = 'Delete ❌'; // The text context of the button
    //blogArticle.appendChild(removeButton); // Appends the button to the entry article

    blogEntriesSection.appendChild(blogArticle); // Appends the entire blog entry article to the blog-entries section
  }
};

init();