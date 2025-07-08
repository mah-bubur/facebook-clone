
// script.js

// DOM Elements
const postBtn = document.getElementById('postBtn');
const postInput = document.getElementById('postInput');
const postContainer = document.getElementById('postContainer');

// Event Listener
postBtn.addEventListener('click', () => {
  const text = postInput.value.trim();

  if (text !== "") {
    const newPost = document.createElement('div');
    newPost.className = 'post';
    newPost.innerHTML = `
      <h4>Mahbubur Rahman</h4>
      <p>${text}</p>
    `;
    postContainer.prepend(newPost); // New post on top
    postInput.value = ""; // Clear input
  } else {
    alert("Please write something before posting.");
  }
});

document.addEventListener("click", function(e) {
  if
  (e.target.classList.contains("like-btn")
) {
  e.target.classList.toggle("liked");
  if
  (e.target.classList.contains("liked")) {
    e.target.style.color = "red";
  } else {
    e.target.style.color = "#1877f2";
  }
}

if
(e.target.classList.contains("comment-btn")) {
  const commentBox =
  e.target.closest(".post").querySelector(".comment-box");
  commentBox.style.display =
  (commentBox.style.display === "none") ?
  "block" : "none";
}
});

const toggleBtn =
document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if
  (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '\u2600';
  } else {
    toggleBtn.textContent = '\u1F319';
  }
});

const imageInput =
document.getElementById('imageInput');

postBtn.addEventListener('click', () => {
  const text = postInput.value.Trim();
  const imageInput = imageInput.files[0];

  if (text === "" && !imageFile) {
    alert("Write something or choose an image.");
    return;
  }

  const newPost =
  document.createElement('div');
  newPost.className = 'post';

  let postContant = `<h4>Mahbubur Rahman</h4>`;

  if (text) {
    postContant += `<p>${text}</p>`;
  }

  if (imageFile) {
    const imageURL =
    URL.createObjectURL(imageFile);
      postContant += `<img src="$
      {imageURL}" style="max-width: 100%;
      margin-top: 10px; border-radius: 10px;">`;
  }

  newPost.innerHTML = postContant;
  postContainer.prepend(newPost);

  postInput.value = "";
  imageInput.value = "";
});

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', () => {
  const keyword = searchInput.value.toLowerCase();
  const posts = document.querySelectorAll('.post');

  posts.forEach(post => {
    const text = post.textContent.toLowerCase();
    if (text.includes(keyword)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
});

const menuToggle = document.getElementById('menuToggle');
const leftSidebar = document.querySelector('.left-sidebar');

menuToggle.addEventListener('click', () => {
  leftSidebar.classList.toggle('active');
});

function savePostsToLocalStorage() {
  localStorage.setItem("posts", postContainer.innerHTML);
}

postContainer.prepend(newPost);
postInput.value = "";
imageInput.value = "";

savePostsToLocalStorage();

window.addEventListener("DOMContentLoaded", () => {
  const savePosts =
  localStorage.getItem("posts");
  if (savePosts) {
    postContainer.innerHTML =
    savePosts;
  }
});