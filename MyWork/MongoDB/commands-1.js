// Grouping

db.persons
  .aggregate([
    { $match: { gender: "female" } },
    {
      $group: { _id: { state: "$location.state" }, totalPersons: { $sum: 1 } }
    },
    { $sort: { totalPersons: -1 } }
  ])
  .pretty();

// Projection

db.persons
  .aggregate([
    {
      $project: {
        _id: 0,
        gender: 1,
        fullName: { $concat: ["$name.first", " ", "$name.last"] },
        isNewField: "yes"
      }
    }
  ])
  .pretty();

db.persons
  .aggregate([
    {
      $project: {
        _id: 0,
        gender: 1,
        fullName: {
          $concat: [
            { $toUpper: "$name.first" },
            " ",
            { $toUpper: "$name.last" }
          ]
        },
        isNewField: "yes"
      }
    }
  ])
  .pretty();

//   birthDate: {$convert: {input: "$dob.date", to: "date"} },

db.persons.aggregate([
    {
      $project: {
        _id: 0,
        email: 1,
        gender: 1,
        name: 1,
        location: {
          type: "Point",
          coordinates: [{$convert: {input: "$location.coordinates.longitude", to: "double", onError: 0.0, onNull: 0.0}}, {$convert: {input: "$location.coordinates.latitude", to: "double", onError: 0.0, onNull: 0.0}}]
        },
        dob: 1
      }
    },
    {
      $project: {
        email: 1,
        gender: 1,
        location: 1,
        birthDate: {$toDate: "$dob.date"},
        age: {$convert: {input: "$dob.age", to: "int"} },
        fullName: {
          $concat: [
            { $toUpper: { $substrCP: ["$name.first", 0, 1] } },
            {
              $substrCP: [
                "$name.first",
                1,
                { $subtract: [{ $strLenCP: "$name.first" }, 1] }
              ]
            },
            " ",
            { $toUpper: { $substrCP: ["$name.last", 0, 1] } },
            {
              $substrCP: [
                "$name.last",
                1,
                { $subtract: [{ $strLenCP: "$name.last" }, 1] }
              ]
            }
          ]
        },
        isNewField: "yes"
      }
    }
  ]).pretty();


// Unwind & group
  db.friends.aggregate([
      {
          $unwind: "$examScores"
      },
      {
          $group: {
              _id: { age: "$age"}, totalScore: { $sum: "$examScores.score"}
          }
      }
  ])


  // Unwinding
  
  db.friends.aggregate([
    {
        $unwind: "$examScores"
    }
])

db.friends.aggregate([
    {
        $unwind: "$hobbies"
    },
    {
        $group: {
            _id: { age: "$age"}, hobbies: { $push: "$hobbies"}
        }
    }
])

// Remove duplicates with $addToSet operator
db.friends.aggregate([
    {
        $unwind: "$hobbies"
    },
    {
        $group: {
            _id: { age: "$age"}, hobbies: { $addToSet: "$hobbies"}
        }
    }
])

// Find first element of an array

db.friends.aggregate([
    {
        $project: {
            _id: 0,
            examScore: {$slice: ["$examScores", 1]}
        }
    }
])

// Skip elements and get rest of them
// Skip 1 and get next 2
db.friends.aggregate([
    {
        $project: {
            _id: 0,
            examScore: {$slice: ["$examScores", 1, 2]}
        }
    }
])

// Find size of an array
db.friends.aggregate([
    {
        $project: {
            _id: 0,
            scoreCount: {$size: "$examScores"}
        }
    }
])

// Filtering during projection

db.friends.aggregate([
    {
        $project: {
            _id: 0,
            scores: {$filter: {input: "$examScores", as: "es", cond: {$gt: ["$$es", 60 ]}}}
        }
    }
])

db.friends.aggregate([
    {$unwind: "$examScores"},
    {$project: {name: 1, age: 1, score: "$examScores.score"}},
    {$sort: {score: -1 }},
    {$group: {_id: "$_id", name: {$first: "$name"}, maxScore: {$max: "$score"} }},
    {$sort: {maxScore: -1}}
])