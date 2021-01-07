// 手机号码
function transTel(tel){
    return tel.slice(0,3)+"****"+tel.slice(7);
}

// 商品价格
function transPrice(price){
    return Number(price).toFixed(2);
}
function formatNum(price, decimal=2){
    return Number(price).toFixed(decimal);
}

//  时间转换
Date.prototype.getWeek=function(){
    let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    return week[this.getDay()];
}
function transTime(time, type=''){
    let oDate = new Date(Number(time));
    let y = oDate.getFullYear();
    let m = (oDate.getMonth() + 1 + '').padStart(2, '0');
    let d = (oDate.getDate()+'').padStart(2, '0');
    let h = (oDate.getHours()+'').padStart(2, '0');
    let i = (oDate.getMinutes()+'').padStart(2, '0');
    let s = (oDate.getSeconds()+'').padStart(2, '0');
    switch(type) {
        case 'Y-m-d': return y+'-'+m+'-'+d;
        case 'Y-m-d H:i:s': return y+'-'+m+'-'+d+' '+h+':'+i+':'+s;
        case 'Y/m/d': return y+'/'+m+'/'+d;
        case 'Y/m/d H:i:s': return y+'/'+m+'/'+d+' '+h+':'+i+':'+s;
        case 'Y/m/d H:i:s w': return y+'-'+m+'-'+d+' '+h+':'+i+':'+s+ ' '+oDate.getWeek();
        default: return y+'-'+m+'-'+d+' '+h+':'+i+':'+s;
    }
}

export default{
    transTel,
    transPrice,
    formatNum,
    transTime,
}