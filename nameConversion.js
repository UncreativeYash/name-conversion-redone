let text = document.querySelector("#text");

let convertBtn = document.querySelector("#convert-btn");
let camelCase = document.querySelector("#camel-case");
let pascalCase = document.querySelector("#pascal-case");
let snakeCase = document.querySelector("#snake-case");
let kebabCase = document.querySelector("#kebab-case");
let screamingKebabCase = document.querySelector("#screaming-kebab-case");
let screamingSnakeCase = document.querySelector("#screaming-snake-case");

const toCamelCase = (str) => {
  const s =
    str &&
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join("");
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

const toPascalCase = str =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
    .join('');

const toSnakeCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_");

const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

convertBtn.addEventListener("click", function nameFunc() {
  pascalCase.innerHTML = toPascalCase(text.value);
  camelCase.innerHTML = toCamelCase(text.value);
  kebabCase.innerHTML = toKebabCase(text.value);
  screamingKebabCase.innerHTML = toKebabCase(text.value);
  snakeCase.innerHTML = toSnakeCase(text.value);
  screamingSnakeCase.innerHTML = toSnakeCase(text.value);
});
