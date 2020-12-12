// 1. Create an array named numbers and store 5 number values in it

let numbers = [1,2,3,4,5];

// 2. Calculate the sum of array items and print it to the console using console.log()
let total = 0;
for(let sum of numbers){
    total = total + sum;
}
console.log(total);

// 3. Calculate the average of array items and print it to the console using console.log()

let totalOne = 0;
for(let sum of numbers){
    totalOne = totalOne + sum;
}
console.log(totalOne / numbers.length);

// 4. Find the highest number in the array and print it to the console using console.log()

// 5. Find the lowest number in the array and print it to the console using console.log()

// 6. Find the even numbers in the array and print them to the console using console.log()

let even =[];

for(let num of numbers){
    if(num %2 ==0){
        even.push(num);
    }
}
console.log(even);

// 7. Find the odd numbers in the array and print them to the console using console.log()

let odd =[];

for(let num of numbers){
    if(num %2 !=0){
        odd.push(num);
    }
}
console.log(odd);

// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()

let div5=[];

for(let num of numbers){
    if(num %5 ==0){
        div5.push(num);
    }
}
console.log(div5);

// 9. Log all the element of the array one by one

for( let all of numbers){
    console.log(all);
}

// 10. Find all the number in the array that is divisible by 3

let div3=[];

for(let num of numbers){
    if(num %3 ==0){
        div3.push(num);
    }
}
console.log(div3);