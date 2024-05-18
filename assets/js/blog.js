const blogTitleInput = document.querySelector('#blog-title');
const userNameInput = document.querySelector('#user-name');
const blogContentInput = document.querySelector('#blog-content');
// un-needed? const submitEntryButton = document.querySelector('#blog-entry-button');
const submitEntry = document.querySelector('#blog-entry-form');
const blogEntriesSection = document.querySelector('#blog-entries');

const blogEntries = [];
let blogEntriesRecall = [];

function renderBlogEntries() { // Shows the blog entries on the page
    blogEntriesSection.textContent = ''; // sets the blog-entries section to empty to prepare for rendering
    console.clear();
    for (let i = 0; i < blogEntriesRecall.length; i++) { // Iterates through the blogEntries array
        let currentBlogTitle = blogEntriesRecall[i].blogTitle; // Storing each array item locally for rendering to the page
        let currentBlogUserName = blogEntriesRecall[i].userName;
        let currentBlogContent = blogEntriesRecall[i].blogContent;
        let currentBlogDate = blogEntriesRecall[i].datePosted;
  
      console.log(`Title: ${currentBlogTitle}`);
      console.log(`Username: ${currentBlogUserName}`);
      console.log(`Title: ${currentBlogContent}`);

      const blogArticle = document.createElement("article"); // Creates an article to hold the blog entry
      blogArticle.setAttribute("data-index", i); // Sets the dataset of the article to data-index to match the array index
      blogArticle.setAttribute("class", "blogArticle"); // Sets the dataset of the article to data-index to match the array index
  
      const blogArticleTitle = document.createElement('h1'); // Creates a header for each title
      blogArticleTitle.textContent = currentBlogTitle;
      blogArticle.appendChild(blogArticleTitle);

      const blogArticleContent = document.createElement('p'); // Creates paragraph for the blog content
      blogArticleContent.textContent = currentBlogContent; // Inserts the blog content text into paragraph
      blogArticle.appendChild(blogArticleContent); // Appends the paragraph to the article

      const blogArticleUserName = document.createElement('footer'); // Creates a subheader for each username
      blogArticleUserName.textContent = (`Posted by: ${currentBlogUserName} on ${currentBlogDate}`);
      blogArticle.appendChild(blogArticleUserName);
  
      //const deleteButton = document.createElement('button'); // Makes the delete button
      //deleteButton.textContent = 'Delete ❌'; // The text context of the button
      //blogArticle.appendChild(removeButton); // Appends the button to the entry article

      blogEntriesSection.appendChild(blogArticle); // Appends the entire blog entry article to the blog-entries section
    }
};

submitEntry.addEventListener('submit', function (event) {
  event.preventDefault();
  const dateString = new Date().toLocaleDateString();
  
    // Creates the object from the form input
    const blogEntry = {
    blogTitle: blogTitleInput.value,
    userName: userNameInput.value,
    blogContent: blogContentInput.value,
    datePosted: dateString
};

    blogEntries.push(blogEntry);

    // Stringifies the object to localStorage
    localStorage.setItem('blogEntry', JSON.stringify(blogEntry));
    localStorage.setItem('blogEntries', JSON.stringify(blogEntries));
    
    // Retrieves the objects from localStorage and stores it as a new object
    const BlogEntryRecall = JSON.parse(localStorage.getItem('blogEntry'));
    //console.log(BlogEntryRecall);
    
    blogEntriesRecall = JSON.parse(localStorage.getItem('blogEntries'));
    //console.log(blogEntriesRecall);

    submitEntry.reset();
    renderBlogEntries();

});