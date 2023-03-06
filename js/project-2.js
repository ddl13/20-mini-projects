const tech = [
  { label: "HTML" },
  { label: "JavaScript" },
  { label: "React" },
  { label: "Node.js" },
  { label: "Ajax" },
  { label: "Vue.js" },
  { label: "CSS" },
  { label: "Python" },
  { label: "Figma" },
  { label: "Next.js" },
  { label: "Redux" },
  { label: "MongoDB" },
  { label: "TypeScript" },
];

const inputref = document.querySelector("#filter");
const listRef = document.querySelector(".js-list");

inputref.addEventListener("input", _.debounce(onFilterChange, 200));

const createdMarkup = createListItemsMarkup(tech);

listRef.innerHTML = createdMarkup;

function createListItemsMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

function onFilterChange(e) {
  const filter = e.target.value.toLowerCase();

  const filtredItems = tech.filter((item) =>
    item.label.toLowerCase().includes(filter)
  );

  const filteredListMarkup = createListItemsMarkup(filtredItems);
  listRef.innerHTML = filteredListMarkup;
}
