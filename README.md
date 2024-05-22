# Personal-Blog-Challenge-4

## User Story

```md
AS A marketing student,
I WANT a personal blog
SO THAT I can showcase my thoughts and experiences.
```

## Acceptance Criteria

```md
GIVEN a personal blog
WHEN I load the app,
THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
WHEN I submit the form,
THEN blog post data is stored to localStorage.
WHEN the form submits,
THEN I am redirected to the posts page.
WHEN I enter try to submit a form without a username, title, or content,
THEN I am presented with a message that prompts me to complete the form.
WHEN I view the posts page,
THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
WHEN I click the light mode/dark mode toggle,
THEN the page content's styles update to reflect the selection.
WHEN I click the "Back" button,
THEN I am redirected back to the landing page where I can input more blog entries.
WHEN I view the main content,
THEN I am presented with a list of blog posts that are pulled from localStorage.
WHEN I view localStorage,
THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
WHEN I take a closer look at a single blog entry in the list,
THEN I can see the title, the content, and the author of the post.
WHEN I view the footer,
THEN I am presented with a link to the developer's portfolio.
```

## First notes

This project is entirely from scratch so I will need to create the page layout, css styling and javascript.
There's supposed to be 2 pages, one for blog entries and one to display those entries.
JavaScript will be needed to take data from the user to process into objects and stored in localStorage.
JavaScript will also be needed to enable a light/dark mode which will also need to persist between the pages.
I'll begin with the form that accepts the input needed to create a blog entry, then the javascript that processes
that input into an array of objects which is stored in localStorage for persistance, create css to style both pages and finally enable a light/dark mode.

## Steps taken

- Blog input page created.
    - A form is on the page to take input (Title, Author and Content) from the user.
    - Error checking in place in case an empty field is submitted.
    - JavaScript written to process the data from the form.
    - Input processed into an object which is stored into an array.
    - Array is stringified and put into localStorage.

- Blog entry page created.
    - JavaScript written to retrieve and parse the array of objects from localStorage.
    - Retrieved data is processed with a for loop to create articles which are appended to page.

- Light/Dark mode.
    - A string in local stored is created to reflect the current status, default is dark.
    - Toggle added to both pages that enables the change and flips the preference.
    - Status is read on page load for both pages to the preference persists between pages.