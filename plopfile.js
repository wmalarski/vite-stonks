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
        base: `.templates/component`,
        templateFiles: `.templates/component/*.hbs`,
      },
    ],
  });

  plop.setGenerator("service", {
    description: "React.js Service",
    prompts: [
      {
        type: "input",
        name: "model",
        message: "Model name",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/services",
        base: `.templates/service`,
        templateFiles: `.templates/service/*.hbs`,
      },
    ],
  });
};
