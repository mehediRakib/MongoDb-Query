//Uses of Match and skip and Limit operator

db.students.aggregate([
    {$skip:3},
    {$limit:3}
    ])


//Uses of Group by Operator
db.students.aggregate([
    {$group:{_id:"$salary"}}
    ])


 db.students.aggregate([
        {$group:{"$city"}}
        ])


//Sum Operator
db.students.aggregate(
    [
    {$group:{_id:'roll',sum:{$sum:'$salary'}}}
    ]
    )


db.students.aggregate(
        [
        {$group:{_id:rol,sum:{$sum:'$salary'}}}
        ]
        )

 db.students.aggregate(
            [
            {$group:{_id:'class',sum:{$sum:'$salary'}}}
            ]
            )

 db.students.aggregate([
     {$group:{_id:"$city",sum:{$sum:"$salary"}}}
          ])


db.students.aggregate([
    {
        $group:
        {_id:{name:'$name',city:"$city"},
         sum:{$sum:"$salary"}   
        
        
        }
    }
    
    ])

//Average

db.students.aggregate(
    [
    {$group:{_id:"$city",sum:{$avg:"$salary"}}}
    ]
    )

//Max value
db.students.aggregate(
    [
    {$group:{_id:"$city",sum:{$max:"$salary"}}}
    ]
    )

//Value replace by one object to another
db.students.replaceOne(
    {
        name:'Rupa'
    },
    {
        name:"Sabbir",
        roll:4,
        class:12,
        city:"Chandpur",
        salary:26000
    }
    )

 db.students.replaceOne(
        {
            name:'shihab'
        },
        {
            name:"Sakib",
            roll:12,
            class:9,
            city:"Chittagong",
            salary:25000
        }
        )

//Minimum Salary
db.students.aggregate(
    [
    {$group:{_id:'$city',max:{$min:'$salary'}}}
    ])

//Without using groupBy we can use id=0
db.students.aggregate(
    [
    {$group:{_id:0,sum:{$sum:'$salary'}}}
    ]
    )

//Find Average
db.students.aggregate(
    [
    {$group:{_id:0,sum:{$avg:'$salary'}}}
    ]
    )

//Group with two field
db.students.aggregate([
    {
        $group:{_id:{name:'$name',city:"$city"}}
    }
    
    ])


//Find Max,min,avg,sum
db.students.aggregate([
    {
        $group:
        {_id:{roll:'$roll',city:"$city"},
         sum:{$sum:"$salary"}  ,
          avg:{$avg:"$salary"},
           max:{$max:"$salary"},
            min:{$min:"$salary"},
            
        
        
        }
    }
    
    ])


//Table Joining..
//Using Lookup Operator
db.products.aggregate([

    {$lookup:{from:"categories",localField:"categoryID",foreignField:"categoryID",as:"catDetails"}}
    ])


    db.products.aggregate([

        {$lookup:{from:"categories",localField:"categoryID",foreignField:"categoryID",as:"catDetails"}},
        {$lookup:{from:"brands",localField:"BrandID",foreignField:"BrandID",as:"brandDetails"}}
        ])

 db.products.aggregate([
 {$lookup:{from:"categories",localField:"categoryID",foreignField:"categoryID",as:"catDetails"}},
      {$lookup:{from:"brands",localField:"BrandID",foreignField:"BrandID",as:"brandDetails"}},
            {$lookup:{from:"categories",localField:"categoryID",foreignField:"categoryID",as:"catDetails"}}
            
            ])

//Facet operation...Multiple stage and multiple operation can be execute here
db.products.aggregate(
    [
        {
            $facet:
            {
                "Total":[{$count:"total"}],
                "LeDTV":[{$match:{"BrandID":1654327447}}],
                'Refigerator':[{$match:{"BrandID":1652474116}}]
                
            }
        }
    ]
    )

//Multiple operation can execute and complex query
db.products.aggregate(
    [
        {
            $lookup:{from:'categories',localField:'CategoryID',foreignField:'CategoryID',as:"CatergoryDetails"}
        },
        {
            $lookup:{from:'brands',localField:'BrandID',foreignField:'BrandID',as:'BrandDetails'}
        },
        {
            $project:{
                _id:0,
                CategoryID:1,
                CategoryID:1,
                Name:1,
                Price:{$toDouble:'$Price'},
                Unit:1,
                CreatedDate:1,
                ProductID:1,
                ProductName:{$first:'$CatergoryDetails.Name'},
                BrandName:{$first:"$BrandDetails.Name"}
                
            }
        }
        
    ]
    )

//Create NewFields
db.products.aggregate(
    [
     {$match:{Unit:'lt'}},
     {$addFields:{'NewField':"NewField"}}
    ]
    )


 db.products.aggregate(
    [
    {
      $addFields:{'NewADdFiel':{$mod:[15,4]}}
    }
    ]
       )

//Concate operation
db.products.aggregate([{
    $addFields:{"Newfield":{$concate:["$Details"," ","$price"," ","Go forward"]}}
}])


db.products.aggregate([
    {
        $addFields: {
            "Newfield": {
                $concat: ["$Details", " ", "$price", " ", "Go forward"]
            }
        }
    }
])

//Split operation.. here we use two stirng perameter

db.products.aggregate([
    {
        $addFields: {
            "Newfield": {
                $split: [ "$Name"," "]
            }
        }
    }
])

//toLower operation and toUpper Operation
db.products.aggregate([
    {
        $addFields: {
            "Newfield": {
                $toLower: [ "$Name"]
            }
        }
    }
])
