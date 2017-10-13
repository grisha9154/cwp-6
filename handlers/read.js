exports.read = function (article, payload, cb) {
    let result;
    for(let i=0;i<article.length;i++){
        if(article[i].id===payload.id)
        {
            result = article[i];
        }
    }
    cb(null,result);
};