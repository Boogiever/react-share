import {createServer} from 'miragejs'

export default function makeServer() {
  createServer({
    routes() {
      this.get("/products", () => ({
        products: [
          { id:"0",img: "/resources/product1.png", shortDescription: "不要后背豆豆 背部豆豆说拜拜 背部无豆清爽一夏 男女通用买", price: "48",link:"/product/1" },
          { id:"1",img: "/resources/product2.png", shortDescription: "男鞋冬款加绒保暖防臭男士网面运动2021春秋休闲皮鞋内增", price: "98",link:"/product/2" },
          { id:"2",img: "/resources/product3.png", shortDescription: "老虎玩偶虎年吉祥物公仔毛绒玩具仿真白虎娃娃小号东北虎", price: "19.8",link:"/product/3" },
        ],
      }))
    },
  })
}