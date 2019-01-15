var myModify = {
    findAndModify: 'workmate',
    query: {name:'chenzhengyu'},
    update: {$set: {age:18}},
    new:true
}
var ResultMessage = db.runCommand(myModify)

printjson(ResultMessage)