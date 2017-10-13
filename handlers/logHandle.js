const fs = require('fs');
exports.log = function (article, payload, cb){
    const read = fs.createReadStream("E:\\Univer\\5 семестр\\ПСКП\\PSKP\\Лабы\\lab6\\cwp-6\\log.json");
    read.read();
    read.on('data',(chunk)=>{
        cb(null,JSON.parse(chunk));
    });
};