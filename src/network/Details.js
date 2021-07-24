import { request } from "./request.js";

export function DetailsData(iid){
    return request({
        url:"/detail",
        params:{
            iid
        }
    })
}


export function recommendData(){
    return request({
        url:"/recommend",
    })
}
export class Goods{
    constructor(itemInfo,columns,services){
        this.title =itemInfo.title;
        this.desc=itemInfo.desc;
        this.newPrice=itemInfo.price;
        this.oldPrice=itemInfo.oldPrice || "￥80.00"
        this.discount=itemInfo.discountDesc || "商品热卖";
        this.columns=columns;
        this.services=services;
        this.realPrice=itemInfo.lowNowPrice;
    }
}

export class Shop{
    constructor(shopInfo){
        this.logo=shopInfo.shopLogo;
        this.name=shopInfo.name;
        this.fans=shopInfo.cFans;
        this.sells=shopInfo.cSells;
        this.scores=shopInfo.score;
        this.goodCount=shopInfo.cGoods;
    }
}

export class GoodsParam{
    constructor(info,rule){
        this.image=info.image ? info.image [0]: '';
        this.infos=info.set;
        this.sizes=rule.tables;
    }
}