const fs = require('fs');
exports.ccreate = function (article, payload, cb) {
    let result;
    result =JSON.stringify(payload);
    let buf = result.substring(1);
    for(let i=0;i<article.length;i++){
        if(article[i].id ===payload.articleId){
            if(article[i].comments.length===0){
                result = '{"id":'+(0)+','+buf;
            }else{
                result = '{"id":'+(article[i].comments[article[i].comments.length-1].id+1)+','+buf;
            }
            result = JSON.parse(result);
            article[i].comments[article[i].comments.length] =result;
            setTimeout(function () {
                const write = fs.createWriteStream("E:\\Univer\\5 семестр\\ПСКП\\PSKP\\Лабы\\lab5\\cwp-5\\task03\\articles.json");
                write.write(JSON.stringify(article));
            });
            break;
        }
    }
    cb(null, result);
};