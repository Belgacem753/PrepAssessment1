//=============================================== 1
//Write a function called percentOf that takes two parameters,
//The function should find out what percentage the first number represents of the second number, 
//and returns the result as a string.
//percentOf(5, 10)  ==>  "5 is 50% of 10"
//percentOf(2, 10)  ==>  "2 is 20% of 10"
// Note: please write one or two lines here describing your solution.
function percentOf(num1, num2) {
    // TODO: your code here

    /***** I used the rule of three to calculate the percent and string concatination to pin up the result ******/

  var p;
  p=num1*100/num2;
  return num1 +' is ' +p+ '% of '+num2;
}

//=============================================== 2

//Write a function called pluralize that:
//takes 2 parameters, a noun and a number.
//returns the number with the noun in pluralized form.
//pluralize('cat', 0)  ==>  "0 cats"
//pluralize('cat', 5)  ==>  "5 cats" 
//pluralize('cat', 1)  ==>  "1 cat" 
// Note: please write one or two lines here describing your solution.
function pluralize(noun, number) {
     // TODO: your code here

     /***** i used the if statement to know if i should pin up a plural noun or a single noun ******/

     if (number ===1){
     	return number+" "+noun;
     }
     return number+" "+noun+'s';
}

//=============================================== 3

// write a function called addOne that takes an array of numbers as an input, 
// and returns a new array with all array elements incremented by one as an output
// Note : solve this question using while loop 
// addOne( [1,2,3,4] ) ==> [2,3,4,5]
// addOne( [3,6,9] ) ==> [4,7,10]
 
// Note: please write one or two lines here describing your solution.
function addOne(array) {
    // TODO: your code here

// here i created a new empty array and everytimr i push the element of the old array incremented with one 

    var i=0;
    var arr=[];
    while (i<array.length) {
    	arr.push(array[i]+1);
    	i+=1;

    }
    return arr;

}

//=============================================== 4

/*
Write a function that uses console.log to give the following triangle:
#
## 
###
####
#####
######
#######
*/
// Note: please write one or two lines here describing your solution.
function drawTriangle() {
// TODO: your code here
/***** here i used the for loop to add '#' everytime and another loop for turning to line *****/


         var s='#';
         var t='';
         for (var j=1;j<8;j++){
         for (var i=0;i<j;i++){
         	t+=s;	
         }
         t=t+'\n';
     }
         return t;
}

//=============================================== 5

//Using recursion, Write a function that accepts a string and returns the number of vowels in that string.
//Note:Five of the 26 alphabet letters are vowels: A, E, I, O, and U.
//countVowels("four score and seven years") ==> 9;
//countVowels("rbk") ==> 0 
function countVowels(string){
         // TODO: your code here
         /***** Here i put an empty string as an end condition,
          then the function invoke itself everytime the stop condition is false and increment 1 if found a vowels and delete the first character *****/ 
         if (string===''){
         	return 0;
         } if (string[0]==="a"||string[0]==="e"||string[0]==="u"||string[0]==="i"||string[0]==="o"||string[0]==="A"||string[0]==="E"||string[0]==="U"||string[0]==="I"||string[0]==="O"){
         	return 1+ countVowels(string.slice(1));
         }
         return 0+ countVowels(string.slice(1));
}

  //Good Luck :))