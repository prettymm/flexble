function Template(){
    console.log("init Template");
}

Template.prototype.run = function(){
    console.log("run Test");
};


module.export = Template;