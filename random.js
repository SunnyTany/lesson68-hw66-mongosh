const nameStudent = [
  'Bria',
  'Marta',
  'Missouri',
  'Larue',
  'Noemy',
  'Josefa',
  'Rosa',
  'Samara',
  'Lysanne',
  'Pasquale'
]

const subjects = [
  'Math',
  'English',
  'Chemistry',
  'Physics',
  'Biology',
  'History',
  'Geography',
  'Music',
  'Art',
  'Literature'
]

const randomNumber = (from, to) =>
  Math.floor(Math.random() * (to - from + 1)) + from

const faker = {
  name: () => nameStudent[randomNumber(0, nameStudent.length - 1)],
  subject: () => subjects[randomNumber(0, subjects.length - 1)],
}