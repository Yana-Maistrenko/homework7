/*Створіть функцію reverseArray, яка приймає масив і повертає новий масив, елементи якого розташовані у зворотному порядку.*/
/*function reverseArray(array){
    const reversedArray = [];
    for(let i = array.length - 1; i >= 0; i--){
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
const originalArray = [1, 2, 3, 4, 5];
console.log(reverseArray(originalArray));*/






/*Створіть функцію uniqueValues, яка приймає два масиви і повертає новий масив, 
що містить тільки унікальні значення з обох масивів (без дублікатів).*/
/*function uniqueValues(array1, array2){
    const uniqueValuesArray = [];
    for (let i = 0; i < array1.length; i++){
        let isUnique = true;
        for(let j = 0; j < array2.length; j++){
            if (array1[i] === array2[j]){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            uniqueValuesArray.push(array1[i]);
        }
    }

    for (let i = 0; i < array2.length; i++){
        let isUnique = true;
        for(let j = 0; j < array1.length; j++){
            if (array2[i] === array1[j]){
                isUnique = false;
                break;
            }
        }
        if(isUnique){
            uniqueValuesArray.push(array2[i]);
        }
    }
    return uniqueValuesArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(uniqueValues(array1, array2));*/






/*Напишіть функцію calculateAverageGrade, яка приймає на вхід масив об'єктів з 
інформацією про студентів (ім'я, вік, середній бал) і повертає середній бал усіх студентів.*/
/*function calculateAverageGrade(students){
    let sum = 0;
    if (students.length === 0) return 0;
    for(let i = 0; i < students.length; i++){
        sum += students[i]['grade'];
    }
    return (sum/students.length).toFixed(1);
}

const students = [
	{ name: "Alice", age: 20, grade: 4.5 },
	{ name: "Bob", age: 21, grade: 3.9 },
	{ name: "Charlie", age: 19, grade: 4.8 }
];

console.log(calculateAverageGrade(students));*/



//console.log(typeof(students[0]['grade']));
