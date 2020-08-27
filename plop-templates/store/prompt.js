// eslint-disable-next-line @typescript-eslint/no-var-requires
const { notEmpty } = require('../utils.js');

module.exports = {
  description: 'generate a store',
  prompts: [
    {
      type: 'input', // 交互类型v
      name: 'name', // 参数名称
      message: '请输入文件名称', // 交互提示
      validate: notEmpty('文件名称'),
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [{
        name: 'state',
        value: 'state',
        checked: true,
      },
      {
        name: 'mutations',
        value: 'mutations',
        checked: true,
      },
      {
        name: 'actions',
        value: 'actions',
        checked: true,
      },
      ],
      validate(value) {
        if (value.indexOf('state') === -1 && value.indexOf('mutations') === -1) {
          return 'store require at least state and mutations';
        }
        return true;
      },
    },
  ],
  actions: (data) => {
    const name = '{{name}}';
    const { blocks } = data;
    const options = ['state', 'mutations'];
    const path = `,
  `;
    if (blocks.length === 3) {
      options.push('actions');
    }
    const actions = [
      {
        type: 'add', // 类型创建模板文件
        path: `src/store/modules/${name}.ts`, // 文件创建路径
        templateFile: 'plop-templates/store/index.hbs', // 文件模板
        data: {
          name, // 参数名
          options: options.join(path),
          state: blocks.includes('state'),
          mutations: blocks.includes('mutations'),
          actions: blocks.includes('actions'),
        },
      },
    ];
    return actions;
  },
};
