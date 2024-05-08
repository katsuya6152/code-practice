module.exports = function (
    /** @type {import('plop').NodePlopAPI} */
    plop,
  ) {
    plop.setGenerator('files', {
      description: 'Create a new files',
      prompts: [
        {
            type: 'input',
            name: 'dir',
            message: 'どのディレクトリに作成しますか？ （ex: chapter1)',
          },
          {
            type: 'input',
            name: 'name',
            message: 'ファイル名は何にしますか？ （ex: problem1-1）',
          },
      ],
      actions: [
        {
            type: 'add',
            path: 'src/{{dir}}/{{name}}/{{name}}.ts',
            templateFile: 'plop-templates/problem.tsx.hbs',
          },
          {
            type: 'add',
            path: 'src/{{dir}}/{{name}}/{{name}}.test.ts',
            templateFile: 'plop-templates/problem.test.tsx.hbs',
          },
      ],
    });
  }