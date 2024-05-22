const blogTitleInput = document.querySelector('#blog-title'); // Setting DOM variables
const userNameInput = document.querySelector('#user-name');
const blogContentInput = document.querySelector('#blog-content');
const submitEntry = document.querySelector('#blog-entry-form');
let blogEntries = []; // Initializes the working array

function init() { // Checks for a stored array of objects in local storage and if so sets it to the working array
  const storedBlogEntries = JSON.parse(localStorage.getItem('blogEntries'));
  if (storedBlogEntries !== null) {
    blogEntries = storedBlogEntries;
  }
};

submitEntry.addEventListener('submit', function (event) { // Listens for a submit even from the blog entry form
  event.preventDefault(); // Stops the page from refreshing on submit
  if (blogTitleInput.value === "" || userNameInput.value === "" || blogContentInput.value === ""){ // Checks for empty fields
    alert("Please fill in all fields before continuing.");
    return;
  } else {  
    const dateString = new Date().toLocaleDateString(); // Creates a M/D/Y timestamp for each entry
    const blogEntry = { // Creates the object from the form input
      blogTitle: blogTitleInput.value,
      userName: userNameInput.value,
      blogContent: blogContentInput.value,
      datePosted: dateString
    };

    blogEntries.push(blogEntry); // Pushes the blog entry to the blog entries array
    localStorage.setItem('blogEntries', JSON.stringify(blogEntries)); // Stringifies the array of objects to local storage
    window.location.assign("blog.html"); // Navigates to the blog.html when the form is submitted
}
});

init();