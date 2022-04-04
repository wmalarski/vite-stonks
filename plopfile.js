module.exports = (plop) => {
  plop.setHelper("basename", (txt) => txt.split("/").at(-1));

  plop.setGenerator("component", {
    description: "React.js Component",
    prompts: [
      {
        type: "input",
        name: "path",
        message: "Component path",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/{{path}}",
        base: `.templates`,
        templateFiles: `.templates/*.hbs`,
      },
    ],
  });
};
