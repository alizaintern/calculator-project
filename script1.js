const variablesDict = {};

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
  
 
function backspace()
{
  const display=document.getElementById('display');

  let currentValue=display.value;
  let variables=currentValue.match(/(?:sin|cos|tan|log|sqrt|pi|e|\b[a-zA-Z_][a-zA-Z0-9_]*\b|\d|\S)/g);
  variables.pop();
  currentValue=variables.join('');
  display.value=currentValue;
}


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
  
  if( stack.length === 0)
  {
    return true;
  } 
  else{
    return false;
  }
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

function changeExpression(tokens)
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
      
       
      const radians = (parseFloat(tokens[j]) * (Math.PI / 180));
      temp=radians;
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
  else if( variablesDict.hasOwnProperty(tokens[i]))
  {
    temp= variablesDict[tokens[i]];
    //console.log(temp);
  }
 else{
  temp=tokens[i];
 }
  output.push(temp);
}

 return output.join('');

}

function calculate(){

let exp=document.getElementById('display').value;

if(!isValidExpression(exp)){
  const result='Invalid input ';
  document.getElementById('answer').value=result;
}
exp=exp.replace('sin','Math.sin');
exp=exp.replace('cos','Math.cos');
exp=exp.replace('tan','Math.tan');
exp=exp.replace('e','Math.E');
exp=exp.replace('sqrt','Math.sqrt');
exp=exp.replace('pi','Math.PI');
exp=exp.replace('log','Math.Log');
const tokens = exp.match(/(?:Math\.sin|Math\.cos|Math\.tan|Math\.sqrt|Math\.log|\b[A-Za-z0-9.]{1,9}(?![\d.])\b|\^|\b[+\-*/()]\b|Math\.e|Math\.pi|((?:\d+(?:\.\d)?|\.\d+|[+\-*/()])))?/g);

let changedExpression=changeExpression(tokens);
if(changedExpression==='undfined')
{
  document.getElementById('answer').value='Undefined';
}

const result=eval(changedExpression).toFixed(4);
document.getElementById('answer').value=result;
}