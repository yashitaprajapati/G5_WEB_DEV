let blogs = [];

function showBlogs(list) {
  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "";

  list.forEach(blog => {
    const li = document.createElement("li");

    const html = `
      <h3>${blog.title}</h3>
      <p>${blog.description}</p>
      <a href="${blog.url}" target="_blank">Link to Blog</a>
      <p><em>${blog.date}</em></p>
      <hr>
    `;

    li.innerHTML = html;
    blogList.appendChild(li);
  });
}

function addBlog(blog, callback) {
  setTimeout(() => {
    blogs.push(blog);
    callback(); 
  }, 1000); 
}

function sortBlogsByDate(order) {
  return new Promise((resolve) => {
    const sorted = [...blogs];

    if (order === "asc") {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    resolve(sorted);
  });
}

document.getElementById("blogForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const blog = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    url: document.getElementById("url").value,
    date: document.getElementById("date").value
  };

  addBlog(blog, () => {
    showBlogs(blogs);
    this.reset(); 
  });
});

const sortSelect = document.getElementById("sortByDate");
sortSelect.addEventListener("change", () => {
  const order = sortSelect.value;

  if (order === "asc" || order === "desc") {
    sortBlogsByDate(order).then(function (sorted) {
      showBlogs(sorted);
    });
  } else {
    showBlogs(blogs);
  }
});


const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const result = [];

  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].title.toLowerCase().includes(query)) {
      result.push(blogs[i]);
    }
  }

  showBlogs(result);
});
