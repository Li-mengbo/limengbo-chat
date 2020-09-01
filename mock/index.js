/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Mock = require('mockjs');
/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const user = require('./user');

const mocks = [
  ...user,
];

function mockHttp(app) {
  // eslint-disable-next-line no-restricted-syntax
  for (const i of mocks) {
    const types = i.type;
    app[types](i.url, (rep, res) => {
      // 每次响应请求时读取mock data的json文件
      const json = i.reponse();
      // 将json传入 Mock.mock 方法中，生成的数据返回给浏览器
      res.json(Mock.mock(json));
    });
  }
}

module.exports = mockHttp;
