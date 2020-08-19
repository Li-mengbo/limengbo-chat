module.exports = {
  description: 'generate a page',
  prompts: [
    {
      type: 'input', // 交互类型
      name: 'name', // 参数名称
      message: '请输入文件名称', // 交互提示
    },
  ],
  actions: () => {
    const name = '{{name}}';
    const actions = [
      {
        type: 'add', // 类型创建模板文件
        path: `src/views/${name}/index.vue`, // 文件创建路径
        templateFile: 'plop-templates/page/index.hbs', // 文件模板
        data: {
          name, // 参数名
        },
      },
    ];
    return actions;
  },
};
