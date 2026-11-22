const fs=require('fs');fs.mkdirSync('www',{recursive:true});fs.copyFileSync('app.html','www/index.html');console.log('web build ok');
