const blogTitleInput = document.querySelector('#blog-title'); // Setting variables for the querySelectors
const userNameInput = document.querySelector('#user-name');
const blogContentInput = document.querySelector('#blog-content');
const submitEntry = document.querySelector('#blog-entry-form');
const submitViewEntries = document.querySelector('#blog-view-button');

let blogEntries = [];
blogEntries = JSON.parse(localStorage.getItem('blogEntries')); // Parses the stringified array from local storage

submitEntry.addEventListener('submit', function (event) { // Listens for the submit even on the form
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
    window.location.assign("blog.html"); // Navigates to the blog.html when the form is submitted
});