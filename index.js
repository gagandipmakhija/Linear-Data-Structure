function printPairs(arr, n, sum)
{
    let count = 0; // Initialize result
 
    // Consider all possible pairs and check
    // their sums
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                 document.write("(" + arr[i] + ", "
                    + arr[j] + ")" + "<br>");
}
 
// Driver function to test the above function
 
    let arr = [ 1, 5, 7, -1, 5 ];
    let n = arr.length;
    let sum = 6;
    printPairs(arr, n, sum);
 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var arr = ["a","b","c","d","e","f"]
    var arr2 = []

    var reverseArrayInPlace = function(array){

      var arrLength = array.length
      for (i = 0; i < arrLength; i++) {
        arr2.push(array.pop())
        array.push(arr2.shift())
      }
    }

    reverseArrayInPlace(arr)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function areRotations( str1,  str2)
    {
        // There lengths must be same and str2 must be
        // a substring of str1 concatenated with str1. 
        return (str1.length == str2.length) &&
               ((str1 + str1).indexOf(str2) != -1);
    }
     
    // Driver method
 
        var str1 = "AACD";
        var str2 = "ACDA";
 
        if (areRotations(str1, str2))
            document.write("Strings are rotations of each other");
        else
            document.write("Strings are not rotations of each other");

    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const arr = ['d', 'd', 'e', 'e', 'e', 'k', 'j', 'j', 'h'];
const firstNonRepeating = arr => {
   let count = 0;
   for(let ind = 0; ind < arr.length-1; ind++){
      if(arr[ind] !== arr[ind+1]){
         if(!count){
            return ind;
         };
         count = 0;
      } else {
         count++;
      }
   };
   return -1;
};
console.log(firstNonRepeating(arr));



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function towerOfHanoi(n, from_rod, to_rod, aux_rod)
{
		if (n == 1)
		{
			document.write("Move disk 1 from rod " + from_rod +
			" to rod " + to_rod+"<br/>");
			return;
		}
		towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);
		document.write("Move disk " + n + " from rod " + from_rod +
		" to rod " + to_rod+"<br/>");
		towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
	}

	// Driver code
	var n = 4; // Number of disks
	towerOfHanoi(n, 'A', 'C', 'B'); // A, B and C are names of rods



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    function isOperator(x)
    {
  
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
        }
        return false;
    }
  
    // Convert postfix to Prefix expression
    function postToPre(post_exp)
    {
        let s = [];
  
        // length of expression
        let length = post_exp.length;
  
        // reading from right to left
        for (let i = 0; i < length; i++) {
  
            // check if symbol is operator
            if (isOperator(post_exp[i])) {
  
                // Pop two operands from stack
                let op1 = s[s.length - 1];
                s.pop();
                let op2 = s[s.length - 1];
                s.pop();
  
                // concat the operands and operator
                let temp = post_exp[i] + op2 + op1;
  
                // Push String temp back to stack
                s.push(temp);
            }
  
            // if symbol is an operand
            else {
  
                // Push the operand to the stack
                s.push(post_exp[i] + "");
            }
        }
  
        let ans = "";
        while (s.length > 0)
            ans += s.pop();
        return ans;
    }
     
    let post_exp = "ABC/-AK/L-*";
        
    // Function call
    document.write("Prefix : " + postToPre(post_exp));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function isOperator(x)
    {
        switch(x)
        {
            case '+':
            case '-':
            case '*':
            case '/':
                return true;
        }
        return false;
    }
 
    // Convert prefix to Infix expression
    function convert(str)
    {
        let stack = [];
 
        // Length of expression
        let l = str.length;
 
        // Reading from right to left
        for(let i = l - 1; i >= 0; i--)
        {
            let c = str[i];
 
            if (isOperator(c))
            {
                let op1 = stack[stack.length - 1];
                stack.pop()
                let op2 = stack[stack.length - 1];
                stack.pop()
 
                // Concat the operands and operator
                let temp = "(" + op1 + c + op2 + ")";
                stack.push(temp);
            }
            else
            {
 
                // To make character to string
                stack.push(c + "");
            }
        }
        return stack[stack.length - 1];
    }
     
    let exp = "*-A/BC-/AKL";
      
    document.write("Infix : " + convert(exp));
     

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



var expression = "[(])"

var stack = new Stack()

for( var i = 0 ; i < expression.length ; i++ ){
     if(expression.charAt(i) == "[" || expression.charAt(i) == "(" || expression.charAt(i) == "{"){
        stack.push(expression.charAt(i))
     }else{
         if( stack.length == 0 ){
             console.log("Not balanced")
             break;
         }else{
           var lastElement = stack.pop()
           if( lastElement == "{" &&  expression.charAt(i) == "}" || lastElement == "[" &&  expression.charAt(i) == "]" ||
           lastElement == "(" &&  expression.charAt(i) == ")"  ){

           }else{
               console.log("Not balanced")
               break;
           }

         }
     }

     if( i == expression.length - 1  ){
            if( stack.length == 0   ){
                console.log("Balanced")
            }else{
                console.log("NOt balanced")
            }
     }


}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




class Stack{
  constructor(){
    this.item=[]
    this.length=0
  this.push=function(element){
    this.item[this.length]=element
    this.length++
  }
  this.pop=function(){
    this.item.pop()
    this.length--
  }
  this.peek=function(){
    return this.item[this.length-1]
  }
  this.reverse=function(){
    var reversearray=[]
    for(var i=this.length-1;i>=0;i--){
      reversearray.push(this.item[i])
    }
    this.item=reversearray
    return this.item
  }
}
}
var stack = new Stack()
stack.push(5)
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)
console.log(stack.length)
console.log(stack.reverse())



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////












let s = [];
    let minEle;
  
    // Prints maximum element of MyStack
    function getMin()
    {
        if (s.length == 0)
            document.write("Stack is empty" + "</br>");
  
        // variable maxEle stores the maximum element
        // in the stack.
        else
            document.write("Minimum Element in " +
                        "the stack is: "+minEle + "</br>");
  
    }
  
    // Prints top element of MyStack
    function peek()
    {
        if (s.length == 0)
        {
              
            document.write("Stack is empty ");
            return;
        }
  
        let t = s[s.length - 1]; // Top element.
  
        document.write("Top Most Element is: ");
  
        
        if(t < minEle)
            document.write(minEle);
        else
            document.write(t);
    }
  
   
    function pop()
    {
        if (s.length == 0)
        {
            document.write("Stack is empty" + "</br>");
            return;
        }
  
        document.write("Top Most Element Removed: ");
        let t = s[s.length - 1];
        s.pop();
  
        
        if (t < minEle)
        {
            document.write(minEle + "</br>");
            minEle = 2 * minEle - t;
        }
  
        else
            document.write(t + "</br>");
    }
  
    
    function push(x)
    {
        
        if (s.length == 0)
        {
            minEle = x;
            s.push(x);
            document.write("Number Inserted: " + x + "</br>");
            return;
        }
  
        // If new number is less than minEle
        if (x < minEle)
        {
            s.push(2 * x - minEle);
            minEle = x;
        }
  
        else
            s.push(x);
  
        document.write("Number Inserted: " + x + "</br>");
    }
     
    push(3);
    push(5);
    getMin();
    push(7);
    push(19);
    getMin();
    pop();
    getMin();
    pop();
    peek();
     


     