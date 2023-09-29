//###)) Update Document
// lets explore update documnet in mongodb

use('school')


// db.student.updateOne(
//     {name:'John Doe'},
//     {$set:{age:26}}
// )

// db.student.find()

// db.student.updateOne(
//     {dept:'English'},
//     {$set:{name:'Faria nur Megla'}}
// )

//##)) Update many

// db.student.updateMany(
//     {dept:'English'},
//     {$inc:{age:1}}
// )

// db.student.insertMany(
//     [
//         {
//             name:'Arif',
//             age:23,
//             dept:'Chemistry'
//         },
//         {
//             name:'Fahad',
//             age:17,
//             dept:'ICT'
//         },
//         {
//             name:'Nuhi',
//             age:15,
//             dept:'Chemistry'
//         }
//     ]
// )

// db.student.updateMany(
//     {dept:'Chemistry'},
//     {$inc:{age:1}}
// )

// db.student.find()

// db.student.find(
    
//     {age:{$gt:16}}
// )


//--> Upsert 

// db.student.updateOne(
//     {name:'Faria nur Megla'},
//     {$set:{age:18,city:'Cumilla'}},
//     {upsert:true}

// )

// db.student.replaceOne(
//     {
//         name:'Fahad'
//     },
//     {name:'Radifa',age:17,dept:'ICT'}
// )



// db.student.find()

//####))  Delete Operation

// db.student.deleteOne({
//     name:'Radifa'
// })

// db.createCollection('delete')
// db.delete.drop()

// db.delete.insertMany([
//     {
//         name:'apple',

//     },
//     {
//         name:'microsoft',

//     },
//     {
//         name:'google',

//     }
// ])
 
// db.delete.deleteMany(
//     {}
// )
// db.student.find()

// db.student.updateOne(
//     {dept:'English'},
//     {$unset:{Dept:""}}
// )

// db.student.updateOne(
//     {name:'Mehedi Hasan Rakib'},
//     {$set:{city:'Chandpur'}},
//     {$upsert:true}
// )

// db.student.createIndex(
//     {name:1}
// )

db.student.getIndexes()
// db.student.createIndex(
//     {dept:1,age:-1}
// )