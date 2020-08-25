// eslint-disable-next-line @typescript-eslint/no-var-requires
const { notEmpty } = require('../utils.js');

module.exports = {
  description: 'generate a page',
  prompts: [
    {
      type: 'input', // 交互类型
      name: 'name', // 参数名称
      message: '请输入文件名称', // 交互提示
      validate: notEmpty('文件名称'),
    },
    {
      type: 'checkbox',
      name: 'blocks',
      message: 'Blocks:',
      choices: [{
        name: '<template>',
        value: 'template',
        checked: true,
      },
      {
        name: '<script>',
        value: 'script',
        checked: true,
      },
      {
        name: 'style',
        value: 'style',
        checked: true,
      },
      ],
      validate(value) {
        if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
          return 'View require at least a <script> or <template> tag.';
        }
        return true;
      },
    },
  ],
  actions: (data) => {
    const name = '{{name}}';
    const { blocks } = data;
    const actions = [
      {
        type: 'add', // 类型创建模板文件
        path: `src/views/${name}/index.vue`, // 文件创建路径
        templateFile: 'plop-templates/views/index.hbs', // 文件模板
        data: {
          name, // 参数名
          template: blocks.includes('template'),
          script: blocks.includes('script'),
          style: blocks.includes('style'),
        },
      },
    ];
    return actions;
  },
};
