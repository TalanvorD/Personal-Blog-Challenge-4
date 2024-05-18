const blogTitleInput = document.querySelector('#blog-title');
const userNameInput = document.querySelector('#user-name');
const blogContentInput = document.querySelector('#blog-content');
// un-needed? const submitEntryButton = document.querySelector('#blog-entry-button');
const submitEntry = document.querySelector('#blog-entry-form');
const blogEntriesSection = document.querySelector('#blog-entries');

const blogEntries = [];
let blogEntriesRecall = [];

function renderBlogEntries() { // Shows the blog entries on the page
    //blogEntriesList.textContent = ''; // sets the blogEntryList to empty
    console.clear();
    for (let i = 0; i < blogEntriesRecall.length; i++) { // Iterates through the blogEntries array
        let currentBlogTitle = blogEntriesRecall[i].blogTitle; // Storing each array item locally for rendering to the page
        let currentBlogUserName = blogEntriesRecall[i].userName;
        let currentBlogContent = blogEntriesRecall[i].blogContent;
  
      console.log(`Title: ${currentBlogTitle}`);
      console.log(`Username: ${currentBlogUserName}`);
      console.log(`Title: ${currentBlogContent}`);
  
      let blogSpanTitle = document.createElement('header'); // Creates a header for each title
      blogSpanTitle.textContent = currentBlogTitle;
      blogSpanTitle.setAttribute('data-index', i); // Sets the dataset to data-index to match the array index
      blogEntriesSection.appendChild(blogSpanTitle);

      let blogSpanUserName = document.createElement('h2'); // Creates a subheaderfor each username
      blogSpanUserName.textContent = currentBlogUserName;
      blogSpanUserName.setAttribute('data-index', i); // Sets the dataset to data-index to match the array index
      blogEntriesSection.appendChild(blogSpanUserName);

      let blogSpanContent = document.createElement('article'); // Creates a span for each array item
      blogSpanContent.textContent = currentBlogContent;
      blogSpanContent.setAttribute('data-index', i); // Sets the dataset to data-index to match the array index
      blogEntriesSection.appendChild(blogSpanContent);
  
      const removeButton = document.createElement('button'); // Makes the remove button
      removeButton.textContent = 'Delete ❌'; // The text context of the button
      blogEntriesSection.appendChild(removeButton); // Appends the button to the blog-entries span
    }
  }

submitEntry.addEventListener('submit', function (event) {
  event.preventDefault();
  
    // Creates the object from the form input
    const blogEntry = {
    blogTitle: blogTitleInput.value,
    userName: userNameInput.value,
    blogContent: blogContentInput.value
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