function ajax(config) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        var param = '';
        for (var attr in config.data) {
            param += attr + '=' + config.data[attr] + '&';
        }
        if (param) { //substring(start, end)截取字符串去掉最后的&符号
            param = param.substring(0, param.length - 1);
        }
        if (config.type === 'get') {
            config.url += '?' + encodeURI(param);
        }
        xhr.open(config.type, config.url, true);
        var data = null;
        if (config.type === 'post') {
            data = param;
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            //post模式下必须加的请求头，这个请求头是告诉服务器怎么去解析请求的正文部分。
        }
        xhr.send(data);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(xhr.responseText)
                }

            }
        };
    })
}
export default ajax;