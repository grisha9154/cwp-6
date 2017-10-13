const fs = require('fs');

exports.adelete=function (article, payload, cb) {
    for(let i=0;i<article.length;i++){
        if(article[i].id===payload.id)
        {
            article.splice(i,1);
            setTimeout(function () {
                const write = fs.createWriteStream("E:\\Univer\\5 семестр\\ПСКП\\PSKP\\Лабы\\lab5\\cwp-5\\task03\\articles.json");
                write.write(JSON.stringify(article));
            });
            break;
        }
    }
    cb(null, null);
};