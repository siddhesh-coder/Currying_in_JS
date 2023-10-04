//Currying in JavaScript

//Q1 sum(2)(6)(1)

//by arrrow fun
function sum(a){
  return (b)=> {
    return (c)=> {
        return a+b+c;
  }
}
}
console.log("curring by arrow fun SUM: "+sum(2)(6)(1));

//OR by regular fun
function summ(x){
  return function(y){
    return function(z){
      return x+y+z;
    }
  }
}
console.log("curring by regular fun SUM: "+summ(5)(7)(2));

// to interviewer first explain regular below then explain currying
function sum1(aa,bb,cc){
  return aa+bb+cc;
}
console.log("regular multi params fun SUM: "+sum1(2,3,4));

//Q2

function opration(op){
   return (x) => {
      return (y) => {
        if(op === "Sum")
          return x+y;
        else if(op === "Multiply")
          return x*y;
        else if(op === "Divide")
          return x/y;
        else if(op === "Substract")
        return x-y;
        else
          return `please enter valid operation or number`;
      }
   }
}

console.log(opration("Sum")(1)(2));
console.log(opration("Multiply")(1)(2));
console.log(opration("Divide")(4)(2));
console.log(opration("Substract")(5)(2));

//OR if you want to perform same opration many times
const mul = opration("Multiply");
console.log("Multiply: ");
console.log(mul(2)(2));
console.log(mul(3)(2));
console.log(mul(4)(2));
console.log(mul(5)(2));


//Q3 Infinite Currying (IMP Q)
//recursive solution
function op(a){
   return function (b){
    if(b) return op(a+b);
    return a;
   };
}

//Arrow Fun
// function op(a){
//   return (b) =>{
//     if(b) return op(a+b);
//     return a;
//   }
// }

console.log("INFINITE: "+op(2)(5)(6)(7)(3)());

//Q4 Currying VS Partial Application

//Partial Application
function summ1(a){
   return function(b,c){
    return a+b+c;
   };
}
const fn = summ1(10);
console.log(fn(5,6));

//or

console.log(summ1(20)(8,9));

//Partial Application (Partial application is a technique in JavaScript (and many other programming languages) that involves fixing a certain number of arguments of a function, creating a new function with fewer arguments, and pre-filling some of the arguments of the original function. This is particularly useful in functional programming and can help you create more reusable and flexible code.)
// function add(a, b) {
//   return a + b;
// }

// function partiallyAppliedAdd(a) {
//   return function(b) {
//     return add(a, b);
//   };
// }

// const add5 = partiallyAppliedAdd(5);
// console.log(add5(3)); // Outputs 8

//Currying for above code

function sum2(a){
  return (b)=> {
    return (c)=> {
        return a+b+c;
  }
}
}
console.log("sum2: "+sum2(2)(6)(1));

//Q5
//Real World eg for currying in Manipulatiing DOM

function updateElementText(id){
   return function(content){
     document.querySelector("#" + id).textContent = content; 
   };
}
const updateHeader = updateElementText("heading");

updateHeader("Love you all....!");

//Q6 curry() implementation (VVVVVVVVVV IMP Q -S as well as J-)
//convert f(a,b,c) into f(a)(b)(c)

function curry(func){
  return function curriedFunc(...args){

    if(args.length >= func.length){
        return func(...args);
    }

    else{
      return function(...next){
        return curriedFunc(...args, ...next);
      };
    }

  };
}

const sum3 = (a , b , c) => a + b + c;

const totalSumm = curry(sum3);

console.log("Q6: "+totalSumm(1)(6)(5));


