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

// usando il ciclo for

const reversedTeachers = [];  //array(string)
for (let i = 0; i < teachers.length; i++){
  // const teacher = teachers[i];  //string
  // console.log(i, teacher);
  const reversedTeacher = teachers[(teachers.length - 1) - i]   //string
  // console.log(reversedTeacher);
  reversedTeachers.push(reversedTeacher)
};
console.log(reversedTeachers);


/*
// usando reverse

const reversedTeachers = teachers.reverse()
console.log(reversedTeachers)
*/




// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

// usando ciclo for

for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];  //string
  // console.log(i, teacher);
  if (teacher.length >= 5) {
    // console.log(teacher)
    longNames.push(teacher)
  }
}
console.log(longNames);

/* 
// togliendo righe per renderlo più compatto

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i])
  }
}
console.log(longNames);
*/

/* 
// usando il for...of

for (teacher of teachers) {
  if (teacher.length >= 5) {
    longNames.push(teacher)
  }
}
console.log(longNames);
*/








// 3. Rimuovi 'Ed' dall'array teachers

// usando ciclo for
let index = 0
for (let i = 0; i < teachers.length; i++) {
  const teacher = teachers[i];  //string
  console.log(i, teacher);

  if (teacher !== 'Ed') {
    console.log(teacher)
    teachers[index] = teacher;
    index++ 
  }
}
console.log(teachers);

/*
// usando splice

const EdIndex = teachers.indexOf('Ed');
// console.log(EdIndex);
const removeItem = teachers.splice(EdIndex, 1);
// console.log(removeItem);
console.log(teachers);
*/





// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

// const isFabioPresent = teachers.indexOf('Fabio')   //number
const isFabioPresent = teachers.indexOf('Fabio') !== -1;  //boolean
console.log(isFabioPresent);






// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;





/*
// usando join

const teachersString = teachers.join(', ');
console.log(teachersString)
*/