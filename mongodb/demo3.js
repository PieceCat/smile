var startTime = (new Date()).getTime()
var db = connect('log')

var tempArr = []
for(let i=0;i<1000;i++){
    tempArr.push({num:i})
}
db.test.insert(tempArr)
var runTime = (new Date()).getTime()-startTime
print('This run this is :'+runTime+'ms')