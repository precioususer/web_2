const fontRoboto = [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap",
  },
];

let styleHtml = "";

fontRoboto.map((el) => {
  let outHtml = document.createElement("link");
  outHtml.href = el.href;
  outHtml.rel = el.rel;
  styleHtml += outHtml.outerHTML;
});

export default styleHtml;
