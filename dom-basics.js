const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);


const image = document.createElement('img');
image.setAttribute('src', 'https://picsum.photos/200');
image.setAttribute('src', 'random image');
document.body.appendChild(image);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("Section 3");
newSection.innerHTML = "<h2>DOM Basics</h2><p>DOM basics for section 3 h2 of part 4</p>";
document.body.appendChild(newSection);