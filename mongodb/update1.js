var db = connect('company')

var workmate3 = {
    name:'MinJie',
    age: 20,
    sex: 0,
    job: 'UI设计',
    skill:{
        skillOne: 'Photoshop',
        skillTwo: 'UI',
        skillThree: 'Word+Excal+PPT'
    },
    regeditTime: new Date()
}

db.workmate.update({name:'MinJie'},workmate3)

print('[update]: The data was updated successfully')