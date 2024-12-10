// Load the vacancy posts from the JSON file and inject them into the HTML
fetch('./app/js/vacancies.json')
  .then(response => response.json())
  .then(data => {
    const vacantPosts = data.vacancies;
    const vacantContainer = document.querySelector(".vacancies__container");

    vacantPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'vacancies__card'; 
        postElement.innerHTML = `
        <div class = "vacancies__image">
          <img src = "${post.image}" alt ="photo"/>
        </div>
        <div class="vacancies__text">
            <div>
                <h2>${post.jobname}</h2>
                <p>${post.jobtype}</p>
            </div>
            <button><a href="./vacancies-post.html?id=${post.id}">Apply Now</a></button>
        </div>
      `;
      vacantContainer.appendChild(postElement);
    })
  })
  .catch(error => console.error('Error fetching blog posts:', error));

// Handling a request to a vacancy post
// Get vacancy post ID from URL query parameters
const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get('id');

// Fetch the vacancy post data
fetch('./app/js/vacancies.json')
  .then(response => response.json())
  .then(data => {
    const post = data.vacancies.find(p => p.id == postId);
    
    if (post) {
      document.getElementById('vacancyTitle').textContent = post.jobname;
      document.getElementById('vacancySubtitle').textContent = "Job Description";
      document.getElementById('vacancyDescription').textContent = post.description;
      document.getElementById('vacancyReqTitle').textContent = "Requirements";
      document.getElementById('vacancyRequirements').textContent = post.requirements;
    } else {
      document.getElementById('vacancyContent').textContent = 'Post not found.';
    }
  })
  .catch(error => console.error('Error fetching blog post:', error));


// Display Name of file on upload
const fileInput = document.getElementById("fileInput");
const fileNameDisplay = document.getElementById("fileName");

fileInput.addEventListener("change", function () {
  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = fileInput.files[0].name;
  } else {
    fileNameDisplay.textContent = "Attach file (Cv, Portfolio)";
  }
});