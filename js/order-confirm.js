!function(e){function t(t){for(var s,d,o=t[0],n=t[1],c=t[2],p=0,u=[];p<o.length;p++)d=o[p],r[d]&&u.push(r[d][0]),r[d]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);for(l&&l(t);u.length;)u.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],s=!0,o=1;o<i.length;o++){var n=i[o];0!==r[n]&&(s=!1)}s&&(a.splice(t--,1),e=d(d.s=i[0]))}return e}var s={},r={12:0},a=[];function d(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,d),i.l=!0,i.exports}d.m=e,d.c=s,d.d=function(e,t,i){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(d.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)d.d(i,s,function(t){return e[t]}.bind(null,s));return i},d.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/dist";var o=window.webpackJsonp=window.webpackJsonp||[],n=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=n;a.push([33,0]),i()}({28:function(e,t){e.exports='<div class="modal close"> <div class="modal-container"> <div class="modal-header"> {{#isUpdate}} <h1 class="modal-title">更新地址</h1> {{/isUpdate}} {{^isUpdate}} <h1 class="modal-title">使用新地址</h1> {{/isUpdate}} <i class="fa fa-close close"></i> </div> <div class="modal-body"> <div class="form"> <div class="form-line"> <label for="receiver-name" class="label"> <span class="required">*</span>收件人姓名： </label> <input type="text" id="receiver-name" class="form-item" placeholder="请输入收件人姓名" value="{{data.receiverName}}"/> </div> <div class="form-line"> <label for="receiver-province" class="label"> <span class="required">*</span> 所在城市： </label> <select class="form-item" id="receiver-province"> <option value="">请选择</option> </select> <select class="form-item" id="receiver-city"> <option value="">请选择</option> </select> </div> <div class="form-line"> <label for="receiver-address" class="label"> <span class="required">*</span> 详细地址： </label> <input type="text" id="receiver-address" class="form-item" placeholder="请精确到门牌号" value="{{data.receiverAddress}}"/> </div> <div class="form-line"> <label for="receiver-phone" class="label"> <span class="required">*</span> 收件人手机： </label> <input class="form-item" id="receiver-phone" placeholder="请输入11位手机号" value="{{data.receiverPhone}}"/> </div> <div class="form-line"> <label class="label" for="receiver-zip"> 邮政编码： </label> <input class="form-item" id="receiver-zip" placeholder="如：100000" value="{{data.receiverZip}}"/> </div> <div class="form-line"> <input type="hidden" id="receiver-id" value="{{data.id}}"/> <a class="btn address-btn">保存收获地址</a> </div> </div> </div> </div> </div>'},29:function(e,t){e.exports={cityInfo:{"北京":["北京"],"上海":["上海"],"天津":["天津"],"重庆":["重庆"],"河北省":["石家庄","张家口","承德","秦皇岛","唐山","廊坊","保定","沧州","衡水","邢台","邯郸"],"山西省":["太原","大同","朔州","阳泉","长治","晋城","忻州","吕梁","晋中","临汾","运城"],"辽宁省":["沈阳","朝阳","阜新","铁岭","抚顺","本溪","辽阳","鞍山","丹东","大连","营口","盘锦","锦州","葫芦岛"],"吉林省":["长春","白城","松原","吉林","四平","辽源","通化","白山","延边"],"黑龙江省":["哈尔滨","齐齐哈尔","黑河","大庆","伊春","鹤岗","佳木斯","双鸭山","七台河","鸡西","牡丹江","绥化","大兴安"],"江苏省":["南京","徐州","连云港","宿迁","淮阴","盐城","扬州","泰州","南通","镇江","常州","无锡","苏州"],"浙江省":["杭州","湖州","嘉兴","舟山","宁波","绍兴","金华","台州","温州","丽水"],"安徽省":["合肥","宿州","淮北","阜阳","蚌埠","淮南","滁州","马鞍山","芜湖","铜陵","安庆","黄山","六安","巢湖","池州","宣城"],"福建省":["福州","南平","三明","莆田","泉州","厦门","漳州","龙岩","宁德"],"江西省":["南昌","九江","景德镇","鹰潭","新余","萍乡","赣州","上饶","抚州","宜春","吉安"],"山东省":["济南","聊城","德州","东营","淄博","潍坊","烟台","威海","青岛","日照","临沂","枣庄","济宁","泰安","莱芜","滨州","菏泽"],"河南省":["郑州","三门峡","洛阳","焦作","新乡","鹤壁","安阳","濮阳","开封","商丘","许昌","漯河","平顶山","南阳","信阳","周口","驻马店"],"湖北省":["武汉","十堰","襄攀","荆门","孝感","黄冈","鄂州","黄石","咸宁","荆州","宜昌","恩施","襄樊"],"湖南省":["长沙","张家界","常德","益阳","岳阳","株洲","湘潭","衡阳","郴州","永州","邵阳","怀化","娄底","湘西"],"广东省":["广州","清远","韶关","河源","梅州","潮州","汕头","揭阳","汕尾","惠州","东莞","深圳","珠海","江门","佛山","肇庆","云浮","阳江","茂名","湛江"],"海南省":["海口","三亚"],"四川省":["成都","广元","绵阳","德阳","南充","广安","遂宁","内江","乐山","自贡","泸州","宜宾","攀枝花","巴中","达川","资阳","眉山","雅安","阿坝","甘孜","凉山"],"贵州省":["贵阳","六盘水","遵义","毕节","铜仁","安顺","黔东南","黔南","黔西南"],"云南省":["昆明","曲靖","玉溪","丽江","昭通","思茅","临沧","保山","德宏","怒江","迪庆","大理","楚雄","红河","文山","西双版纳"],"陕西省":["西安","延安","铜川","渭南","咸阳","宝鸡","汉中","榆林","商洛","安康"],"甘肃省":["兰州","嘉峪关","金昌","白银","天水","酒泉","张掖","武威","庆阳","平凉","定西","陇南","临夏","甘南"],"青海省":["西宁","海东","西宁","海北","海南","黄南","果洛","玉树","海西"],"内蒙古":["呼和浩特","包头","乌海","赤峰","呼伦贝尔盟","兴安盟","哲里木盟","锡林郭勒盟","乌兰察布盟","鄂尔多斯","巴彦淖尔盟","阿拉善盟"],"广西":["南宁","桂林","柳州","梧州","贵港","玉林","钦州","北海","防城港","南宁","百色","河池","柳州","贺州"],"西藏":["拉萨","那曲","昌都","林芝","山南","日喀则","阿里"],"宁夏":["银川","石嘴山","吴忠","固原"],"新疆":["乌鲁木齐","克拉玛依","喀什","阿克苏","和田","吐鲁番","哈密","博尔塔拉","昌吉","巴音郭楞","伊犁","塔城","阿勒泰"],"香港":["香港"],"澳门":["澳门"],"台湾":["台北","台南","其他"]},getProvinces:function(){let e=[];for(let t in this.cityInfo)e.push(t);return e},getCities:function(e){return this.cityInfo[e]||[]}}},30:function(e,t,i){let s=i(0),r=i(29),a=i(8),d=i(28),o={show:function(e){this.option=e,this.option.data=e.data||{},this.$modalWrap=$(".modal-wrap"),this.loadModal(),this.bindEvent()},hide:function(){this.$modalWrap.empty()},loadModal:function(){let e=s.renderHtml(d,{isUpdate:this.option.isUpdate,data:this.option.data});this.$modalWrap.html(e),this.loadProvince()},bindEvent:function(){let e=this;this.$modalWrap.find("#receiver-province").change(function(){var t=$(this).val();e.loadCities(t)}),this.$modalWrap.find(".address-btn").click(function(){let t=e.getReceiverInfo(),i=e.option.isUpdate;!i&&t.status?a.save(t.data,function(t){s.successTips("地址添加成功"),e.hide(),"function"==typeof e.option.onSuccess&&e.option.onSuccess(t)},function(e){s.errorTips(e)}):i&&t.status?a.update(t.data,function(t){s.successTips("修改地址成功"),e.hide(),"function"==typeof e.option.onSuccess&&e.option.onSuccess(t)},function(e){s.errorTips(e)}):s.errorTips(t.errMsg||"好像哪里不对了~~>_<~~")}),this.$modalWrap.find(".modal-container").click(function(e){e.stopPropagation()}),this.$modalWrap.find(".close").click(function(){e.hide()})},loadProvince:function(){let e=r.getProvinces()||[],t=this.$modalWrap.find("#receiver-province"),i=this.getSelectOption(e);t.html(i),this.option.isUpdate&&this.option.data.receiverProvince&&(t.val(this.option.data.receiverProvince),this.loadCities(this.option.data.receiverProvince))},loadCities:function(e){let t=r.getCities(e)||[],i=this.$modalWrap.find("#receiver-city");i.html(this.getSelectOption(t)),this.option.isUpdate&&this.option.data.receiverCity&&i.val(this.option.data.receiverCity)},getSelectOption:function(e){let t='<option value="">请选择</option>';for(let i=0,s=e.length;i<s;i++)t+='<option value="'+e[i]+'">'+e[i]+"</option>";return t},getReceiverInfo:function(){let e={},t={status:!1};return e.receiverName=$.trim(this.$modalWrap.find("#receiver-name").val()),e.receiverProvince=this.$modalWrap.find("#receiver-province").val(),e.receiverCity=this.$modalWrap.find("#receiver-city").val(),e.receiverAddress=$.trim(this.$modalWrap.find("#receiver-address").val()),e.receiverPhone=$.trim(this.$modalWrap.find("#receiver-phone").val()),e.receiverZip=$.trim(this.$modalWrap.find("#receiver-zip").val()),this.option.isUpdate&&(e.id=this.$modalWrap.find("#receiver-id").val()),e.receiverName?e.receiverProvince?e.receiverCity?e.receiverAddress?e.receiverPhone?(t.status=!0,t.data=e):t.errMsg="请输入收件人手机号":t.errMsg="请输入收件人详细地址":t.errMsg="请选择收件人所在城市":t.errMsg="请选择收件人所在省份":t.errMsg="请输入收件人姓名",t}};e.exports=o},31:function(e,t){e.exports='{{#list}} {{#isActive}} <div class="address-item active" data-id="{{id}}"> {{/isActive}} {{^isActive}} <div class="address-item" data-id="{{id}}"> {{/isActive}} <div class="address-title"> {{receiverCity}} {{receiverProvince}} ({{receiverName}} 收) </div> <div class="address-detail"> {{receiverAddress}} {{receiverPhone}} </div> <div class="address-opera"> <span class="link address-update">编辑</span> <span class="link address-delete">删除</span> </div> </div> {{/list}} <div class="address-add"> <div class="address-new"> <i class="fa fa-plus"></i> <div class="text">使用新地址</div> </div> </div></div>'},32:function(e,t){e.exports='<table class="product-table"> <tr> <th class="cell-img">&nbsp;</th> <th class="cell-info">商品描述</th> <th class="cell-price">价格</th> <th class="cell-count">数量</th> <th class="cell-total">小计</th> </tr> {{#orderItemVoList}} <tr> <td class="cell-img"> <a href="./detail.html?productId={{productId}}" target="_blank"> <img class="p-img" src="{{imageHost}}{{productImage}}" alt="{{productName}}"/> </a> </td> <td class="cell-info"> <a class="link" href="./detail.html?productId={{productId}}" target="_blank">{{productName}}</a> </td> <td class="cell-price">￥{{currentUnitPrice}}</td> <td class="cell-count">{{quantity}}</td> <td class="cell-total">￥{{totalPrice}}</td> </tr> {{/orderItemVoList}} </table> <div class="submit-con"> <span>订单总价:</span> <span class="submit-total">￥{{productTotalPrice}}</span> <span class="btn order-submit">提交订单</span> </div>'},33:function(e,t,i){i(80),i(1),i(2);let s=i(0),r=i(8),a=i(6),d=i(32),o=i(31),n=i(30),c={data:{selectedAddressId:null},init:function(){this.onLoad(),this.bindEvent()},onLoad:function(){this.loadAddressList(),this.loadProductList()},bindEvent:function(){let e=this;$(document).on("click",".address-item",function(){$(this).addClass("active").siblings(".address-item").removeClass("active"),e.data.selectedAddressId=$(this).data("id")}),$(document).on("click",".order-submit",function(){let t=e.data.selectedAddressId;t?a.create({shippingId:t},function(e){window.location.href="./payment.html?orderNumber="+e.orderNo},function(e){s.errorTips(e)}):s.errorTips("请选择一个收获地址")}),$(document).on("click",".address-add",function(){n.show({isUpdate:!1,onSuccess:function(){e.loadAddressList()}})}),$(document).on("click",".address-update",function(t){t.stopPropagation();let i=$(this).parents(".address-item").data("id");r.getAddress(i,function(t){n.show({isUpdate:!0,data:t,onSuccess:function(){e.loadAddressList()}})},function(e){s.errorTips("打开失败，刷新一下试试看~")})}),$(document).on("click",".address-delete",function(t){t.stopPropagation();let i=$(this).parents(".address-item").data("id");window.confirm("确认删除改地址吗？")&&r.deleteAddress(i,function(t){e.loadAddressList()},function(e){s.errorTips(e)})})},loadAddressList:function(){let e=this;r.getAddressList(function(t){e.filterAddress(t);let i=s.renderHtml(o,t);$(".address-con").html(i)},function(e){$(".address-con").html('<p class="err-tip">地址加载失败，请刷新后重试</p>>')})},loadProductList:function(){a.getProductList(function(e){let t=s.renderHtml(d,e);$(".product-con").html(t)},function(e){$(".product-con").html('<p class="err-tip">地址加载失败，请刷新后重试</p>')})},filterAddress:function(e){if(this.data.selectedAddressId){let t=!1;for(let i=0,s=e.list.length;i<s;i++)e.list[i].id===this.data.selectedAddressId&&(e.list[i].isActive=!0,t=!0);t||(this.data.selectedAddressId=null)}}};$(function(){c.init()})},8:function(e,t,i){let s=i(0),r={getAddressList:function(e,t){s.request({url:s.getServerUrl("/shipping/list.do"),data:{pageSize:50},success:e,error:t})},save:function(e,t,i){s.request({url:s.getServerUrl("/shipping/add.do"),data:e,method:"POST",success:t,error:i})},getAddress:function(e,t,i){s.request({url:s.getServerUrl("/shipping/select.do"),data:{shippingId:e},method:"POST",success:t,error:i})},update:function(e,t,i){s.request({url:s.getServerUrl("/shipping/update.do"),data:e,method:"POST",success:t,error:i})},deleteAddress:function(e,t,i){s.request({url:s.getServerUrl("/shipping/del.do"),data:{shippingId:e},method:"POST",success:t,error:i})}};e.exports=r},80:function(e,t){}});