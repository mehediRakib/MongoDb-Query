const database='school'

use(database)
///(****) here first we learn CRUD 
//### First one is create method

//Insert one Object only

// db.student.insertOne(
//     {
//         name: "John Doe",
//         age: 25,
//         dept: "Computer Science"
//     }
// )

//###))  Insert multiple object 

// db.student.insertMany(
//     [
//         {
//             name:'Mehedi Hasan Rakib',
//             age:24,
//             dept:"ICT"
            
//         },
//         {
//             name:"Faria",
//             age:15,
//             dept:'English'
//         },
//         {
//             name:'Radifa',
//             age:16,
//             dept:'Chemistry'
//         }
//     ]
// )

//###)) for verifying that data has been inserted successfully we use this command
// db.student.find();

// db.student.find(
//     {age:25}
// )


// db.student.find(
//     {name:'Radifa'}
// )

//--> Comparison opetator
// db.student.find(
//     {
//         age:{$lt:25}
//     }
// )

//---> Logical operator

// db.student.find(
//     {
//         $or:[
//         {
//             dept:'ICT'
//         },
//         {age:{$gt:15}}
//       ]
//     }
// )

// db.student.find(
//     {
//         $and:[
//         {
//             dept:'ICT'
//         },
//         {age:24}
//       ]
//     }
// )

//###))  Porjection for Read data

// db.student.find(
//     {},

//    {_id:0,name:1,dept:1}
    
// )


// db.student.find().sort({age:1})

// db.student.find().limit(2)

// db.student.find().skip(3).limit(1)

//---> counting documents

db.student.countDocuments({age:{$gt:16}})