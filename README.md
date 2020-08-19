# YoutubeReplica

a simple YouTube client application. This app will allow users to search for videos, watch a video and leave a comment for it.

## Task

- A React App with three pages; Home, Video and About
- use the official YouTube Data API v3.
- made use of React Router for having multiple pages.
- dependencies used:
  - `react` and its accompanying libraries like `react-dom`.
  - `react-router-dom`
  - `react-youtube`
  - `axios`
  - `CSS`

# The App

## Features

- Navbar with links
- Homepage with search form and results area
- Video page to play a video and leave comments
- About page with short description

### Navbar

- shows on every page/route of the application.
- Shows a logo (In this case says Youtube)
- Shows links to the following pages:
  - Home
  - About

### Homepage `/`

<img src='assets/home-1.png' width='400'>

- Shows a Search form with:
  - a search input Field
  - a search button
- Initially show a message like `No Search Results. Search for videos above!` in the place where the search results would later appear.
- Once the user enters a new search, they can press `Search` or `Enter` to get results.

#### Search Results

<img src='assets/home-2.png' width='400'>

- Once a user submits a search app replaces the original `No search results` message with the results
- The results are ordered in columns with **TWO** results per row
- Display the first 8 results.
- For each video/result display:
  - The video thumbnail image
  - The title of the video
- Each video/result is a link. Clicking on the video will take you to the Video page

### Video Page: `/video/:id`

<img src='assets/video.png' width='400'>

- User is able to access this page by any link to the specific video id
- Used `react-youtube` to show that specific YouTube video.
- Has a form below the video to submit a comment. The form will need:
  - A name input
  - A comment input
  - A submit button
- Adding a new comment in the form and pressing submit adds the comment to the list of comments.
- Form checks to see if user filled both files name and comment, if so allow the user to post the comment else alert the user asking to fill everything out.


### About Page: `/about`

- Show a header with the text **About**.
- Show a short description about what this app is about and who developed it.
