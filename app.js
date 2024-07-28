load('../random.js')

db.assignments.drop()

db.createCollection('assignments')
db.getCollectionNames()

const assignments = []

for (let i = 0; i < 5; i++) {
  assignments.push({
    name: faker.name(),
    subject: faker.subject(),
    score: randomNumber(50, 100)
  })
}

db.assignments.insertMany(assignments)
createIndex({ name: 1}, { unique: true })
db.getCollectionNames()
print('associated DB name:', db.assignments.getDB())
print('============= STATS START =============')
db.customers.stats()
print('============= STATS END =============')

const resScoreFind80 = db.assignments.find({score: {$gl: 80}}, {name:1, score: 1})
print(resScoreFind80)

const resScoreUpdate = db.assignments.findOne({score: {$lt: 85}}, {name:1, score: 1}).updateOne({score: 90})
print(resScoreUpdate)

const resScoreDelete = db.assignments.find().sort({score: 1}).limit(1)
db.assignments.deleteOne(resScoreDelete)

db.assignments.aggregate([
  {
    $group: {
      _id: '$subject',
      avgScore: {$avg: '$score'}
    },
    $sort: {
      avgScore: {$gl: 75}
    }
  }
])

db.assignments.find({ _id: 1}, {name: 1, subject: 1, score: 1})