// DOM

const event = document.querySelector(".event");
const calc = document.querySelector(".calc");
const operators =Array.from(document.querySelectorAll("#operator"))
const numbers = Array.from(document.querySelectorAll(".button"));
const enter = document.querySelector(".buttonEnter");
const float = document.querySelector(".buttonFloat")
const backspacer = document.querySelector("#C");
const allClear = document.querySelector("#AC");
const allButtons = Array.from(document.querySelectorAll("button"));
let numbersArray=[]
let operatorsArray=[]


const keyNumber = window.addEventListener("keydown",numberDown)
function numberDown(e){
let digits =numbers.map(item=>parseInt(item.innerText))
let isNumber = digits.find(item=>item==e.key)
if(isNumber!= undefined){
    const buttonToPress = numbers.filter(item=>parseInt(item.innerText) == isNumber)
    event.innerText += isNumber;
    }
  }
  document.activeElement.blur()
const numberEvent =numbers.map(number=>number.addEventListener("click",displayNumber))
function displayNumber(number){
    allButtons.map(item=>item.blur())
   numb = number.path[0].innerText;
    event.innerText += numb;
    allButtons.map(item=>item.blur())
}

const keyOperator = window.addEventListener("keydown",operatorDown)
    function operatorDown(e){
    let operator = operators.map(item=>item.innerText);
    let isOperator = operator.find(item=>item==e.key);
    if(isOperator!=undefined){
        number = parseFloat(event.innerText);
        operator= isOperator
        if(isNaN(number)){}
        else{numbersArray.push(number);
        if(event.innerText != ""){
        if(numbersArray.length===2){
            let result = operate(operatorsArray,numbersArray);
            operatorsArray=[];
            operatorsArray.push(operator);
            calc.innerText= result+operator;
            event.innerText =""; }
        else{
            operatorsArray.push(operator);
            calc.innerText = number+operator;
            event.innerText ="";
            }}}}}

const operatorsEvent = operators.map(operator=>operator.addEventListener("click",displayOperation))
function displayOperation(operator){
    allButtons.map(item=>item.blur())
        number = parseFloat(event.innerText);
        operator= operator.path[0].innerText;
        if(isNaN(number)){allButtons.map(item=>item.blur())}
        else{
        numbersArray.push(number);
        allButtons.map(item=>item.blur())
        if(event.innerText != ""){
            allButtons.map(item=>item.blur())
        if(numbersArray.length===2){
            let result = operate(operatorsArray,numbersArray);
            operatorsArray=[];
            operatorsArray.push(operator);
            calc.innerText= result+operator;
            event.innerText ="";
            allButtons.map(item=>item.blur())
        }
        else{
            operatorsArray.push(operator);
            calc.innerText = number+operator;
            event.innerText ="";
            allButtons.map(item=>item.blur())
            }}}}


const keyEnter = window.addEventListener("keydown",EnterDown)
    function EnterDown(e){
    let keyDown= parseInt(e.keyCode)
    if(keyDown==13||keyDown===32){execute()}}

const enterEvent = enter.addEventListener("click", execute)
  function execute(){
    allButtons.map(item=>item.blur())
    number=parseFloat(event.innerText);
    if(isNaN(number)){}
    else if(numbersArray.length==1){
    numbersArray.push(number);
    calc.innerText+= number + " =";
    event.innerText= operate(operatorsArray,numbersArray);
    clear()}}

const keyFloat = window.addEventListener("keydown",FloatDown)
function FloatDown(e){
let keyDown= parseInt(e.keyCode)
if(keyDown==190||keyDown===188){event.innerText+="."}}
const floatEvent = float.addEventListener("click",()=>{
 allButtons.map(item=>item.blur())
 event.innerText+="."})

const keyAllClear = window.addEventListener("keydown",EscapeDown)
function EscapeDown(e){
let keyDown= parseInt(e.keyCode)
if(keyDown==27){clearAll()}}

const allClearEvent = allClear.addEventListener("click", clearAll);
function clearAll(){
    allButtons.map(item=>item.blur())
    clear()
    event.innerText="";
    calc.innerText="";
}

const keyBackspacer= window.addEventListener("keydown",BackspacerDown)
function BackspacerDown(e){
let keyDown= parseInt(e.keyCode)
allButtons.map(item=>item.blur())
if(keyDown==8){
    if(event.innerText != ""){
    let n = event.innerText.length-1;
    let slice = event.innerText.slice(0,n);
    event.innerText= slice;}}}

const backspacerEvent=backspacer.addEventListener("click", Backspacer())
function Backspacer(){
    allButtons.map(item=>item.blur())
    if(event.innerText != ""){
    let n = event.innerText.length-1;
    let slice = event.innerText.slice(0,n);
    event.innerText= slice;}}
//CSS





// Math Operations 
function add(a,b){
    let add = a+b;
    return add;
}

function subtract(a,b){
    let sub=a-b;
    return sub;
}

function multiply(a,b){
    let mul = a*b;
    return mul;
}

function divide(a,b){
    let div = a/b;
    return div;
}

function operate(operation,numbers){
    
    const result = operation.reduce((operation,currValue)=>{
    
    if(currValue=="+"){operation = add(numbers.shift(),numbers.shift()); 
                        numbers.unshift(operation)
                        return operation}
    if(currValue=="-"){operation = subtract(numbers.shift(),numbers.shift());
                        numbers.unshift(operation);
                        return operation
                        }
    if(currValue=="*"){operation = multiply(numbers.shift(),numbers.shift());
                        numbers.unshift(operation);
                        return operation
                        }
    if(currValue=="/"){operation = divide(numbers.shift(),numbers.shift());
                        numbers.unshift(operation);
                        return operation
                        }
                        
    },0)
    return result
}
    
function clear(){
    operatorsArray = [];
    numbersArray =[]
}

function backspace (){

}
