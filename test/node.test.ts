import * as qr from "../src/index";




;(async () => {
    qr.open("www.baidu.com", (val:any) => console.log(val))
})()
