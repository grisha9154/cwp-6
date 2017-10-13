 exports.readall = function (article, payload, cb) {
    let result;
    let lastResalt = {"items":[],"meta":{"page":0,"pages":0,"count":0,"limit":10}};
    result = sort(payload,article);
    if(payload.limit!=undefined)
    {
        lastResalt.meta.limit = payload.limit;
        if(payload.page!=undefined) {
            result = split(article, payload.page, payload.limit);
            lastResalt.meta.page = payload.page;
        }else{
        result = split(article,0,payload.limit);
        }
    }else{
        result = split(article,0,10);
    }

    lastResalt.meta.count = article.length;
    lastResalt.meta.pages = getPages(article.length,lastResalt.meta.limit);
    lastResalt.items = result;


    cb(null, lastResalt);
};

function getPages(count, limit) {
    let ost = count%limit;
    return ((count+ost)/limit);
}
function sort(payload, article) {
    switch (payload.sortField){
        case "date": {
            switch(payload.sortOrder){
                case 'asc':
                    article.sort(sInc);
                   break;
                case 'desc':
                    article.sort(sDesc);
                    break;
            }
        }break;
        case "id": {
            switch(payload.sortOrder){
                case 'asc':
                    article.sort(sIncId);
                    break;
                case 'desc':
                    article.sort(sDescId);
                    break;
            }
        }break;
        case "title": {
            switch(payload.sortOrder){
                case 'asc':
                    article.sort(sIncTitle);
                    break;
                case 'desc':
                    article.sort(sDescTitle);
                    break;
            }
        }break;
        case "text": {
            switch(payload.sortOrder){
                case 'asc':
                    article.sort(sIncText);
                    break;
                case 'desc':
                    article.sort(sDescText);
                    break;
            }
        }break;
        case "author": {
            switch(payload.sortOrder){
                case 'asc':
                    article.sort(sIncAuthor);
                    break;
                case 'desc':
                    article.sort(sDescAuthor);
                    break;
            }
        }break;
    }
    return article;
}

function getDate(date) {
    return new Date(date.substr(0,4),date.substr(4,6),date.substr(6,8));
}
function split(article, page,limit) {
    let mass = [];
    let j = 0;
    for(let i=limit*page;i<((limit*page)+limit);i++){
        mass[j] = article[i];
        j++;
    }
    return mass;
}

function sInc(i,ii) {
    if(getDate(i.date.toString())>getDate(ii.date.toString())){
        return 1;
    }else{
        if(getDate(i.date.toString())<getDate(ii.date.toString())){
            return -1;
        }else{
            return 0;
        }
    }
}
function sDesc(i,ii) {
     if(getDate(i.date.toString())<getDate(ii.date.toString())){
         return 1;
     }else{
         if(getDate(i.date.toString())>getDate(ii.date.toString())){
             return -1;
         }else{
             return 0;
         }
     }
 }

 function sIncId(i,ii) {
     if(getDate(i.id.toString())>getDate(ii.id.toString())){
         return 1;
     }else{
         if(getDate(i.id.toString())<getDate(ii.id.toString())){
             return -1;
         }else{
             return 0;
         }
     }
 }
 function sDescId(i,ii) {
     if(getDate(i.id.toString())<getDate(ii.id.toString())){
         return 1;
     }else{
         if(getDate(i.id.toString())>getDate(ii.id.toString())){
             return -1;
         }else{
             return 0;
         }
     }
 }

 function sIncText(i,ii) {
     if(i.text>ii.text){
         return 1;
     }else{
         if(i.text<ii.text){
             return -1;
         }else{
             return 0;
         }
     }
 }
 function sDescText(i,ii) {
     if(i.title<ii.title){
         return 1;
     }else{
         if(i.title>ii.title){
             return -1;
         }else{
             return 0;
         }
     }
 }

 function sIncAuthor(i,ii) {
     if(i.author>ii.author){
         return 1;
     }else{
         if(i.author<ii.author){
             return -1;
         }else{
             return 0;
         }
     }
 }
 function sDescAuthor(i,ii) {
     if(i.author<ii.author){
         return 1;
     }else{
         if(i.author>ii.author){
             return -1;
         }else{
             return 0;
         }
     }
 }

