const fs = require('fs');
exports.acreate = function (article, payload, cb) {
    let result;
    result =JSON.stringify(payload);
    let buf = result.substring(1);
    if(article.length===0){
        result = '{"id":'+(0)+','+buf;
    }else{
        result = '{"id":'+(article[article.length-1].id+1)+','+buf;
    }
    result = JSON.parse(result);
    article[article.length]=result;
    setTimeout(function () {
        const write = fs.createWriteStream("E:\\Univer\\5 семестр\\ПСКП\\PSKP\\Лабы\\lab5\\cwp-5\\task03\\articles.json");
        write.write(JSON.stringify(article));
    });
    cb(null, result);
};