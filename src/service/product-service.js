/**
 * Created by weiqiujuan on 17-12-8.
 */
let _mm = require('util/mall.js');

let product = {
    //获取商品列表
    getProductList: function (listParam, resolve, reject) {
        _mm.request({
            url: _mm.getServerUrl('/product/list.do'),
            data: listParam,
            method:"POST",
            success: resolve,
            error: reject
        });
    },
    //获取商品详细信息
    getProductDetail: function (productId, resolve, reject) {
        //直接指定传参的属性就是key
        _mm.request({
            url: _mm.getServerUrl('/product/detail.do'),
            data: {
                productId: productId
            },
            method:"POST",
            success: resolve,
            error: reject
        });
    }
};
module.exports = product;