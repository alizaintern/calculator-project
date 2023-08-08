// // // function parsing(expression)
// // // {
// // //     const vari = expression.match(/(?:sin|cos|tan|sqrt|pi|e|\b[A-Za-z0-9.]{1,9}(?![\d.])\b|\b[-+/()]\b|(-?(?:\d+(?:\.\d)?|\.\d+|[+\-*/()])))?/g);

// // //     return vari;

// // // }
// // // function backspace(expression) {
   
// // //     const currentValue=expression;
// // //     // Regular expression to match "tan", "sin", "cos", "log", and any variable name (letters and digits)
// // //     const regex = expression.match(/\btan\b|\bsin\b|\bcos\b|\blog\b|\b[A-Za-z][A-Za-z0-9]*\b/g);
// // //     const len=regex.length;
// // //     console.log(regex+': '+len);
// // //    if(regex=='sin' || regex=='cos'||regex=='tan')
// // //    { 
// // //     currentValue.slice(0, -3);

// // //    }
// // //     // Update the display with the new value
// // //    console.log(currentValue);
// // //   }
// // // let a = "2 + -3.5 * (sqrt(16) - pi) / sin(45)";
// // // //console.log(parsing(a));
// // // backspace(a);

// // // // function tokenize(expression) {
// // // //     const tokens = [];
// // // //     let currentToken = '';

// // // //     for (let i = 0; i < expression.length; i++) {
// // // //         const char = expression[i];

// // // //         if (/\s/.test(char)) {
// // // //             continue; // Skip whitespace
// // // //         }

// // // //         if (/[+\-*/()^]/.test(char)) {
// // // //             if (currentToken) {
// // // //                 tokens.push(currentToken);
// // // //                 currentToken = '';
// // // //             }
// // // //             tokens.push(char);
// // // //         } else {
// // // //             currentToken += char;
// // // //         }
// // // //     }

// // // //     if (currentToken) {
// // // //         tokens.push(currentToken);
// // // //     }

// // // //     return tokens;
// // // // }

// // // // function parsing(expression) {
// // // //     const vari = tokenize(expression);
// // // //     return vari;
// // // // }

// // // // let a = "2 + -3.5 * (sqrt(16) - pi) / sin(45)";
// // // // console.log(parsing(a));
// // // // function tokenize(expression) {
// // // //     const tokens = [];
// // // //     let currentToken = '';
// // // //     let i = 0;

// // // //     while (i < expression.length) {
// // // //         const char = expression[i];

// // // //         if (/\s/.test(char)) {
// // // //             i++;
// // // //             continue; // Skip whitespace
// // // //         }

// // // //         if (/[+\-*/()^]/.test(char)) {
// // // //             if (currentToken) {
// // // //                 tokens.push(currentToken);
// // // //                 currentToken = '';
// // // //             }
// // // //             tokens.push(char);
// // // //             i++;
// // // //         } else if (/\d|\./.test(char)) {
// // // //             while (i < expression.length && /\d|\./.test(expression[i])) {
// // // //                 currentToken += expression[i];
// // // //                 i++;
// // // //             }
// // // //             tokens.push(currentToken);
// // // //             currentToken = '';
// // // //         } else {
// // // //             currentToken += char;
// // // //             i++;
// // // //         }
// // // //     }

// // // //     if (currentToken) {
// // // //         tokens.push(currentToken);
// // // //     }

// // // //     return tokens;
// // // // }

// // // // function parsing(expression) {
// // // //     const vari = tokenize(expression);
// // // //     return vari;
// // // // }

// // // // let a = "2 + -3.5 * (sqrt(16) - pi) / sin(45)";;
// // // // console.log(parsing(a));
// // // function backspace(exp) {
// // //     let display = exp;
// // //     let currentValue = exp[display.length-1];
// // //     let variables = currentValue.match(/(?:sin|cos|tan|sqrt|pi|e|\b[A-Za-z0-9.]{1,9}(?![\d.])\b|\b[-+/()]\b|(-?(?:\d+(?:\.\d)?|\.\d+|[+\-*/()])))?/g);
// // //     console.log(variables);
// // //     variables.pop(); // Remove the last element (cos, sin, tan, or any variable)
  
// // //     // Join the remaining elements and set the value of the input field
// // //     display = variables.join('');
// // //     console.log(variables);
// // //   }
// // // function backspace(exp) {
// // //     let currentValue = exp;
// // //     let variables = currentValue.match(/(?:sin|cos|tan|sqrt|pi|e|\b[A-Za-z0-9.]{1,9}(?![\d.])\b|\b[-+/()]\b|(-?(?:\d+(?:\.\d)?|\.\d+|[+\-*/()])))?/g);
// // //     console.log(variables);
// // //     variables.pop(); // Remove the last element (cos, sin, tan, or any variable)
// // //     variables.pop();
// // //     // Join the remaining elements and set the value of the input field
// // //     let display = variables.length > 0 ? variables.join('') : '';
// // //     console.log(variables);
// // //     return display;
// // // }

// // // let inputString = "2 + sin(30) - pi";
// // // let modifiedString = backspace(inputString);
// // // console.log(modifiedString); // Output: "2 + sin(30) -"
// // // function parseInputString(inputString) {
// // //     const specialFunctions = ["sin", "cos", "tan", "sqrt", "log", "e", "pi"];
// // //     const regex = /(\d+)|[+\-*/()]|[A-Za-z]+|\S/g;
// // //     const outputArray = [];
// // //     let match;
  
// // //     while ((match = regex.exec(inputString)) !== null) {
// // //       const token = match[0];
  
// // //       // Check if the token is a special function
// // //       if (specialFunctions.includes(token)) {
// // //         outputArray.push(token);
// // //       } else {
// // //         // Otherwise, treat the token as individual characters
// // //         for (const char of token) {
// // //           outputArray.push(char);
// // //         }
// // //       }
// // //     }
  
// // //     return outputArray;
// // //   }
  
// // //   // Example usage:
// // //   const inputString = "23+(24-(sqrt(90))";
// // //   const parsedArray = parseInputString(inputString);
// // //   console.log(parsedArray);
  
// // function backspace(inputString) {
// //     let specialCharacters = ['sin', 'cos', 'tan', 'log', 'sqrt', 'pi'];
// //     let currentValue = inputString.trim(); // To remove any leading/trailing whitespaces
// //     let last=currentValue.charAt(currentValue.length - 1);
// //     if (currentValue.length > 0) {
// //      // Get the last character
// //       console.log('last char is : '+last);
// //       if (specialCharacters.includes(last)) {
// //         currentValue = currentValue.slice(0, -last.length);
// //       } else {
// //         currentValue = currentValue.slice(0, -1);
// //       }
// //     }
  
// //     return currentValue;
// //   }
  
// //   // Example usage:
// //   const inputString = "cos";
// //   const result = backspace(inputString);
// //   console.log(result); // Output: "23 + sin(90"
  
// function removeUnaryPlus(expression) {
//   // Replace unary '+' operators with empty strings
//   const regex = /(^|\()(\+)(?=\d)/g;
//   return expression.replace(regex, '$1');
// }


// const expression = "+1+(+2)";
// const result = removeUnaryPlus(expression);
// console.log(result); // Output: "2 + 3 + 5"





function isValidExpression(expression) {
  const stack = [];
  const openingBrackets = ['(', '[', '{'];
  const closingBrackets = [')', ']', '}'];
  
  for (const char of expression) {
      if (openingBrackets.includes(char)) {
          stack.push(char);
      } else if (closingBrackets.includes(char)) {
          const lastOpeningBracket = stack.pop();
          const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
          
          if (lastOpeningBracket !== correspondingOpeningBracket) {
              return false; // Mismatched brackets
          }
      }
  }
  
  return stack.length === 0; // All brackets are properly balanced
}



function radiansToDegrees(radians) {
  return parseFloat(radians) * (180 / Math.PI);
}



function isOperator(token) {
  const operators = "+-*/";
  return operators.includes(token);
}
function isNumber(token) {
  return !isNaN(parseFloat(token)) && isFinite(token);
}

function changeExpression(tokens,dict)
{
let output=[];
let temp='';
let j;
for(let i=0;i<tokens.length;i++ )
{
  temp='';
  
    if (tokens[i] === 'Math.sin' || tokens[i] === 'Math.cos' || tokens[i] === 'Math.tan') 
    {
      if(tokens[i]=='Math.tan' && tokens[i+2]=='90')
      {
        return 'undefined ';
      }
      output.push(tokens[i]);
      j=parseInt(i)+2;
      
       
      temp=radiansToDegrees(tokens[j]);
      //temp=parseFloat(tokens[j]);
      temp ="("+temp+")";
      i=parseInt(j)+1;
      
    }
    else if(i<=j)
    {
      continue;
    }
  else if (isOperator(tokens[i]))
  {
    temp=tokens[i];
    //console.log(temp);

  }
  else if (isNumber(tokens[i]))
  {
    temp=tokens[i];
    //console.log(temp);
  }
  else if(dict.hasOwnProperty(tokens[i]))
  {
    temp=dict[tokens[i]];
    //console.log(temp);
  }
 
  output.push(temp);
}

 return output.join('');

}



let exp='tan(45)';
let dict={'w':20};
exp=exp.replace('sin','Math.sin');
exp=exp.replace('cos','Math.cos');
exp=exp.replace('tan','Math.tan');
exp=exp.replace('e','Math.E');
exp=exp.replace('pi','Math.PI');
if(!isValidExpression(exp)){
  console.log('not a valid expression ');
  return;
}
const tokens = exp.match(/(?:sin|cos|tan|sqrt|\b[A-Za-z0-9.]{1,9}(?![\d.])\b|\^|\b[+\-*/()]\b|e|pi|((?:\d+(?:\.\d)?|\.\d+|[+\-*/()])))?/g);
//console.log('Before changing' + tokens);
let changedExpression=changeExpression(tokens,dict);
if(changedExpression=='undfined')
{
  console.log('Undefined');
}
//console.log('After changing' + changedExpression);
const result=eval(changedExpression);
console.log(result);