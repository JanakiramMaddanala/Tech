db.createCollection('persons', {validator: {
    $jsonSchema: {
        bsonType: 'object',
        required: ['name', 'age', 'dob', 'address'],
        properties: {
            name: {
                bsonType: 'string',
                description: 'Must be a string'
            },
            age: {
                bsonType: 'number',
                description: 'Must be a number'
            },
            dob: {
                bsonType: "date",
                description: 'Must be a valid date'
            },
            address: {
                bsonType: 'object',
                required: ['state'],
                properties: {
                    state: {
                        bsonType: 'string',
                        description: 'Must be a string'
                    },
                    city: {
                        bsonType: 'string'
                    }
                }
            }
        }
    }
}})