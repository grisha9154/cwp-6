const fs = require('fs');
exports.cdelete= function (article, payload, cb) {
    for(let i=0;i<article.length;i++){
        if(article[i].id === payload.articleId){
            for(let j = 0;j<article[i].comments.length;j++){
                if(article[i].comments[j].id===payload.id){
                    article[i].comments.splice(j,1);
                    setTimeout(function () {
                        const write = fs.createWriteStream("E:\\Univer\\5 семестр\\ПСКП\\PSKP\\Лабы\\lab5\\cwp-5\\task03\\articles.json");
                        write.write(JSON.stringify(article));
                    });
                }
            }
        }
    }

    cb(null, null);
};