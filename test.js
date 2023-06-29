const p = new Promise((resolve, reject)=>{
    resolve('OK');
    //reject();
});

p.then(function(ok){
    console.log(ok);
}).catch(function(error){
    console.log("fail")
});
