const blogTitleInput = document.querySelector('#blog-title');
const userNameInput = document.querySelector('#user-name');
const blogContentInput = document.querySelector('#blog-content');
// un-needed? const submitEntryButton = document.querySelector('#blog-entry-button');
const submitEntry = document.querySelector('#blog-entry-form');
const blogEntriesSection = document.querySelector('#blog-entries');

let blogEntries = [];
blogEntries = JSON.parse(localStorage.getItem('blogEntries')); // Parses the stringified array from local storage

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

/* submitEntry.addEventListener('submit', function (event) {
  event.preventDefault(); // Stops the page from refreshing on submit
  const dateString = new Date().toLocaleDateString(); // Creates a M/D/Y timestamp for each entry
  
    const blogEntry = { // Creates the object from the form input
    blogTitle: blogTitleInput.value,
    userName: userNameInput.value,
    blogContent: blogContentInput.value,
    datePosted: dateString
};

    blogEntries.push(blogEntry); // Pushes the blog entry to the blog entries array
    localStorage.setItem('blogEntries', JSON.stringify(blogEntries)); // Stringifies the object to local storage


    submitEntry.reset(); // Resets the form fields to empty
    renderBlogEntries();
}); */

renderBlogEntries();