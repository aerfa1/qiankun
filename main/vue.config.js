/*
 * @Author: wsj
 * @Date: 2020-11-25
 */
module.exports = {
  devServer: {
    port: 5500,
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap((args) => {
        args[0].title = 'qiankun-wsj'
        return args
      })
  }
};
