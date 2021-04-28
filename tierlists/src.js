const getDiv = (cssClass) => {

  const div = document.createElement("div");
  div.classList.add(cssClass);
  return div;
};

const allowDrop = (event) => event.preventDefault();

const drop = (event) => {

  allowDrop(event);
  event.target.appendChild(document.getElementById(event.dataTransfer.getData("text")));
};

const drag = (event) => event.dataTransfer.setData("text", event.target.id);

const spawnDiv = (div) => document.querySelector("body").append(div);

window.onload = () => {

  containerContainer = getDiv("containerContainer");
  spawnDiv(containerContainer);

  // l = letter
  ['s', 'a', 'b', 'c', 'd', 'f'].forEach(l => {

    const tier = getDiv("tier");
    tier.id = l;
    tier.innerText = l;

    const tierLine = getDiv("tierLine");
    tierLine.ondragover = allowDrop;
    tierLine.ondrop = drop;

    const container = getDiv("tierContainer");
    container.append(tier);
    container.append(tierLine);

    containerContainer.append(container);
  });

  initialContainer = document.createElement("div");
  initialContainer.ondragover = allowDrop;
  initialContainer.ondrop = drop;

  // l = language
  [
    "clang",
    "cpp",
    "csharp",
    "dart",
    "go",
    "java",
    "javascript",
    "kotlin",
    "lua",
    "objective-c",
    "perl",
    "php",
    "python",
    "ruby",
    "rust",
    "swift",
    "typescript"
  ].forEach(l => {

    image = document.createElement("img");
    image.setAttribute("src", `img/${l}.png`)
    image.id = l;
    image.ondragstart = drag;
    image.draggable = true;

    initialContainer.append(image);
  });

  spawnDiv(initialContainer);
};
