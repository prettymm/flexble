function Test(){
    console.log("init Test");
}

Test.prototype.run = function(){
    console.log("run Test");
};

eventEmitter.on("getMessage", function(data){

})

module.export = Test;