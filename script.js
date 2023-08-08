const variablesDict = {};
//const myobj={};
function saveVariable() {
  const variableNameInput = document.getElementById('variableName');
  const variableValueInput = document.getElementById('variableValue');

  const variableName = variableNameInput.value;
  const variableValue = parseFloat(variableValueInput.value);

  if (!isNaN(variableValue)) {
    variablesDict[variableName] = variableValue;
    variableNameInput.value = ''; // Clear the input fields after saving
    variableValueInput.value = '';
    
  } else {
    alert('Invalid variable value. Please enter a valid number.');
  }
}


function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
  }

  
  function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    const answer = document.getElementById('answer');
    answer.value = '';
  }

  function precedence(operator) {
    if (operator === '+' || operator === '-') 
      return 1;
  
    if (operator === '*' || operator === '/') 
      return 2;
  
    if (operator === 'sin' || operator === 'cos' || operator === 'tan' || operator === 'sqrt') 
      return 3;
  
    if (operator === '^') 
      return 4;
    
    return 0;
  }
  
  function isOperator(token) {
    return ['+', '-', '*', '/', 'sin', 'cos', 'tan', 'sqrt','^'].includes(token);
  }
  
  function evaluateOperator(operator, operand1, operand2) {
    switch (operator) {
      case '+':
        if (operand1 === null) { // Unary +
            return Number(operand2).toFixed(4);
          }
        return (Number(operand1) + Number(operand2)).toFixed(4);
  
      case '-':
        return (Number(operand1) - Number(operand2)).toFixed(4);
  
      case '*':
        return (Number(operand1) * Number(operand2)).toFixed(4);
  
      case '/':
        if(operand2 == 0)
        {
          return "Math Error";
        }
        return (Number(operand1) / Number(operand2)).toFixed(4);
  
      case '^':
          return Math.pow(Number(operand1), Number(operand2));
  
      case 'sin':
        return Math.sin(Number(operand2) * (Math.PI / 180)).toFixed(4);
  
      case 'cos':
        return Math.cos(Number(operand2) * (Math.PI / 180)).toFixed(4);
  
      case 'tan':
        if(operand2 == 90)
        {
          return "Undefined";
        }
        return Math.tan(Number(operand2) * (Math.PI / 180)).toFixed(4);
  
      case 'sqrt':
        return Math.sqrt(Number(operand2)).toFixed(2);
  
      default:
        throw new Error('Unsupported operator: ' + operator);
    }
  }

  function infixToPostfix() {
  const textInput = document.getElementById('display');
  const textInput1 = document.getElementById('answer');
  const expression = textInput.value; 
  const output = [];
  const operatorStack = [];
  let openParenthesesCount = 0; // Counter for open parentheses

  const tokens = expression.match(/(?:sin|cos|tan|sqrt|\b[A-Za-z0-9.]{1,9}(?![\d.])\b|\^|\b[+\-*/()]\b|e|pi|((?:\d+(?:\.\d)?|\.\d+|[+\-*/()])))?/g);
  const w1 = Array.from(tokens);
  const w = w1.filter(Boolean);

  // Check for invalid input with operator as the last token
  if (w[w.length - 1] === "+" || w[w.length - 1] === "-" || w[w.length - 1] === "*" || w[w.length - 1] === "/" || w[w.length - 1] === "^") {
    const ans = document.getElementById('answer');
    ans.value = "Invalid Input";
    return;
  }

  // Check for invalid input with an opening parenthesis as the last token
  if (w[w.length - 1] === "(") {
    const ans = document.getElementById('answer');
    ans.value = "Invalid Input";
    return;
  }

  for (var i = 0; i < w.length; i++) {
    var j = 0;

    if (w[i] === ")" && (w[j + i - 1] === "+" || w[j + i - 1] === "-" || w[j + i - 1] === "*" || w[j + i - 1] === "/" || w[j + i - 1] === "^")) {
      const ans = document.getElementById('answer');
      ans.value = "Invalid Input";
      return;
    }

    if (w[i] === "(" && (w[j + i + 1] === "*" || w[j + i + 1] === "/" || w[j + i + 1] === "^")) {
      const ans = document.getElementById('answer');
      ans.value = "Invalid Input";
      return;
    }

    else if ((w[i] === "+" || w[i] === "-" || w[i] === "*" || w[i] === "/" || w[i] === "^") && (w[j + i - 1] === "+" || w[j + i - 1] === "-" || w[j + i - 1] === "*" || w[j + i - 1] === "/" || w[j + i - 1] === "^")) {
      const ans = document.getElementById('answer');
      ans.value = "Invalid Input";
      return;
    }

    else if (w[i] === ")" && w[j + i - 1] === "(") {
      const ans = document.getElementById('answer');
      ans.value = "Invalid Input";
      return;
    }

    // Count the number of open parentheses
    if (w[i] === "(") {
      openParenthesesCount++;
    } else if (w[i] === ")") {
      // Check if there's a close parenthesis without a corresponding open parenthesis
      if (openParenthesesCount === 0) {
        const ans = document.getElementById('answer');
        ans.value = "Invalid Input";
        return;
      }
      openParenthesesCount--;
    }
  }

  // Check if there are unclosed open parentheses
  if (openParenthesesCount > 0) {
    const ans = document.getElementById('answer');
    ans.value = "Invalid Input";
    return;
  }
    for (var token of tokens) {
      for(var key in variablesDict)
      {
        if(token == key)
        {
          token = variablesDict[key];
        }
      }
  
      if(token == "pi")
      {
        token = 3.1415;
      }
      if(token == "e")
      {
        token = 2.7182;
      }
  
      if (!isNaN(parseFloat(token)))
      {
        output.push(parseFloat(token)); 
      }
         
      else if (token === '(') 
      {
        operatorStack.push(token);
      }
  
      else if (token === ')') 
      {
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
          output.push(operatorStack.pop());
        }
        operatorStack.pop(); 
      }
      
      else if (isOperator(token)) 
      {
        while (
          operatorStack.length > 0 &&
          precedence(operatorStack[operatorStack.length - 1]) >= precedence(token)
        ) 
        {
          output.push(operatorStack.pop());
        }
        operatorStack.push(token);
      } 
    }
  
    while (operatorStack.length > 0)
    {
      output.push(operatorStack.pop());
    }
  
    const tokensi = output.join(" ");
    const expression1 = tokensi.split(/\s+/);
    return expression1;
  }

  
  function evaluatePostfix(postfix) {
    const stack = [];
  
    for (const token of postfix) 
    {
      if (!isNaN(parseFloat(token))) 
      {
        stack.push(token); 
      } 
  
      else if (isOperator(token)) 
      {
        if (token !== 'sin' && token !== 'cos' && token !== 'tan' && token !== 'sqrt') 
        {
          if( stack.length == 1 && token == "-")
          {
              var operand1 = stack.pop();
              stack.push(-operand1);
          }
  
          else
          {
          const operand2 = stack.pop();
          var operand1 = stack.pop();
          const result = evaluateOperator(token, operand1, operand2);
          stack.push(result);
          }
        }
  
        else 
        {
          const operand2 = stack.pop();
          const result = evaluateOperator(token, null, operand2);
          stack.push(result);
        }
      }
    }
    const ans = document.getElementById('answer');
    ans.value = stack.pop();
    return ans.value;
    //document.getElementById('answer').value=ans.value ;
  }

  function backspace()
{
  const display=document.getElementById('display');

  let currentValue=display.value;
  let variables=currentValue.match(/(?:sin|cos|tan|log|sqrt|pi|e|\b[a-zA-Z_][a-zA-Z0-9_]*\b|\d|\S)/g);
  variables.pop();
  currentValue=variables.join('');
  display.value=currentValue;
}


function calculate() {
  const expressionInput = document.getElementById('display');
  const expression = expressionInput.value; // Extract the expression from the input field

  // if (expression.includes('sin') || expression.includes('cos') || expression.includes('tan')) {
  //   const postfix = infixToPostfix(expression); // Pass the expression to infixToPostfix()
  //   const result = evaluatePostfix(postfix); // Assuming you have a function to evaluate postfix expressions
  //   document.getElementById('answer').value = result;
  // // } else {
  //   const ans = eval(expression);
  //   document.getElementById('answer').value = ans;
  // }
  const postfix = infixToPostfix(expression); // Pass the expression to infixToPostfix()
  const result = evaluatePostfix(postfix); // Assuming you have a function to evaluate postfix expressions
  document.getElementById('answer').value = result;
}
