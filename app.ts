/**
 * 把今天最好的表现当作明天最新的起点．．～
 * いま 最高の表現 として 明日最新の始発．．～
 * Today the best performance  as tomorrow newest starter!
 * Created by IntelliJ IDEA.
 *
 * @author: xiaomo
 * @github: https://github.com/qq83387856
 * @email: hupengbest@163.com
 * @QQ_NO: 83387856
 * @Date: 2016/2/14 15:45
 * @Description:
 * @Copyright(©) 2015 by xiaomo.
 **/

import greeter = require('./src/ts/greeter');
import $ = require('jquery');

$(() => {
    $(document.body).html(greeter("World"));
});