/*
 * @Author: czx
 * @Date: 2022-11-28 15:58:25
 * @LastEditTime: 2022-11-28 16:46:23
 * @LastEditors: czx
 * @Description:
 */

const path=require("path")

const resolve=dir=>path.resolve(__dirname,dir)

module.exports={
  webpack:{
    alias:{
      "@" : resolve("src"),
    }
  }
}
