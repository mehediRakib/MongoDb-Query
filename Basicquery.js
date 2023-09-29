//Sorting operation
//Ascending operation
db.test.aggregate([{$sort:{salary:1}}])
db.test.find().sort({salary:1})
//Decending operation
db.test.aggregate([{$sort:{name:-1}}])

//limit Operation
db.test.aggregate([{$limit:3}])
db.test.find().limit(3);

//several query

db.test.find().sort({_id:-1}).limit(3);

db.test.aggregate(
[
{
    $sort:{salary:-1}},
    {$limit:3}
 ])

 //Matching Operator
 db.test.aggregate([
    {
        $match:{
            salary:{$gt:45000}
        }
    }
    ])
    

    db.test.find({salary:{$gt:40000}})

//And or operation
db.test.aggregate([{
    $match:{
        $and:[
            {salary:{$gt:40000}},
           { roll:{$gt:12}}
        ]
    }
}])

db.test.aggregate([
{
    $match:
    {
        $or:[
        {salary:{$gt:45000}},
        {city:'Chandpur'}
        ]
    }
}
])

//Normall
db.test.find({
    $and:[
    {salary:{$gt:40000}},
    {roll:{$lt:15}}
   ]
})


//Select by Matching word
db.test.find({name:/R/})

db.test.aggregate([
{
    $match:
     {name:/Ra/}
}
])

//in operation
db.test.aggregate([
    {$match:
        {name:{$in:['Rakib','Sayma']}}
    }
])
//Projection Operation
db.test.aggregate([
    {
        $project:
        {_id:0,name:1,city:1,salary:1}
    }
    ])

db.test.find(
    {},
     {_id:0,roll:0}
   )

//Skip Operator
db.brands.aggregate([
    {$skip:2},
    {$limit:3}
    ])

//Group by operation

db.students.aggregate([
    {$group:{_id:'$city'}},
    ])

 db.students.aggregate([
     {$group:{_id:'$city',total_Salary:{$sum:"$salary"}}}
   ])

db.students.aggregate([{
    $group:{_id:"$city",average_salary:{$avg:'$salary'}}
}])

db.students.aggregate([
    {$group:{_id:"$city",max:{$max:"$salary"}}}
    ])

//From the whole collection to get max
db.students.aggregate([
    {$group:{_id:0,max:{$max:"$salary"}}}
    ])


db.students.aggregate([ 
  {$group:{_id:0,sum:{$sum:"$salary"}}}
  ])


db.students.aggregate([
    {$group:{_id:{Name:"$name",City:"$city"}}}
])


db.products.aggregate([
    {
        $lookup:{from:'categories',localField:'CategoryID',foreignField:'CategoryID',as:"CategoryDetails"}
    },
    {
        $project:{_id:0,CategoryID:0,BrandID:0,ProductID:0}
    }
 ])


db.products.aggregate([
{
    $lookup:{from:'categories',localField:'CategoryID',foreignField:'CategoryID',as:"CategoryDetails"}
},
{$lookup:{from:'brands',localField:'BrandID',foreignField:'BrandID',as:"BrandDetais"}},
{
    $project:{_id:0,CategoryID:0,BrandID:0,ProductID:0}
}
])


db.products.aggregate([
    {
        $lookup:{from:'categories',localField:'CategoryID',foreignField:'CategoryID',as:"CategoryDetails"}
    },
    {$lookup:{from:'brands',localField:'BrandID',foreignField:'BrandID',as:"BrandDetais"}},
    {
        $project:{
            _id:0,
            Name:1,
            Price:1,
            Unit:1,
            CategoryDetails:{$first:"$CategoryDetails.Name"},
            BrandDetais:{$first:"$BrandDetais.Name"}
            
        }
    }
])

