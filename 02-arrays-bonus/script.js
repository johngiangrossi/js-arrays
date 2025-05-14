const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log(teachers);
console.log(teachers.length);


const reversedTeachers = [];  //array(string)
for (let i = 0; i < teachers.length; i++){
  // const teacher = teachers[i];  //string
  // console.log(i, teacher);
  const reversedTeacher = teachers[(teachers.length - 1) - i]   //string
  // console.log(reversedTeacher);
  reversedTeachers.push(reversedTeacher)
};
console.log(reversedTeachers);






// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];


for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];  //string
  // console.log(i, teacher);
  if (teacher.length >= 5) {
    // console.log(teacher)
    longNames.push(teacher)
  }
}
console.log(longNames);


/* togliendo per renderlo più compatto

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i])
  }
}
console.log(longNames);
*/

/* usando il for...of

for (teacher of teachers) {
  if (teacher.length >= 5) {
    longNames.push(teacher)
  }
}
console.log(longNames);
*/








// 3. Rimuovi 'Ed' dall'array teachers

const EdIndex = null;







// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

// const isFabioPresent = teachers.indexOf('Fabio')   //number
const isFabioPresent = teachers.indexOf('Fabio') !== -1;  //boolean
console.log(isFabioPresent);








// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString =  null;