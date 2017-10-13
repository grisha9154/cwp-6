const fs = require('fs');
exports.update = function (article, payload, cb) {
    let result;
    for(let i=0;i<article.length;i++){
        if(article[i].id===payload.id)
        {
            article[i] = payload;
            setTimeout(function () {
                const write = fs.createWriteStream("E:\\Univer\\5 семестр\\ПСКП\\PSKP\\Лабы\\lab5\\cwp-5\\task03\\articles.json");
                write.write(JSON.stringify(article));
            });
            break;
        }
    }
    cb(null, result);
}