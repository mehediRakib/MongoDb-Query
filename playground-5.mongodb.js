

use('craftsoft')

db.brands.insertOne(
 {
    "name":"Apple"
}
)

db.brands.insertMany(
    [
        {"name":"Dell"},
        {"name":"hp"},
        {"name":"Asus"},
        {"name":"lenevo"},
        {"name":"Mac"},
        {"name":"google"}

        
    ]
)