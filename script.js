var characterAmountRange = document.getElementById('characterAmountRange')
var characterAmountNumber = document.getElementById('characterAmountNumber')
var includeUppercaseElement = document.getElementById('includeUppercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var form = document.getElementById('passwordGeneratorForm')
var displayPass = document.getElementById('passwordDisplay')

var upperCase = LowToHigh(65, 90)
var lowerCase = LowToHigh(97, 122)
var numCodes= LowToHigh(48, 57)
var symCodes = LowToHigh(33, 47).concat(
  LowToHigh(58, 64)
).concat(
  LowToHigh(91, 96)
).concat(
  LowToHigh(123, 126)
)

characterAmountNumber.addEventListener('input', syncCharacter)
characterAmountRange.addEventListener('input', syncCharacter)

form.addEventListener('submit', e => {
  e.preventDefault()
  var characterAmount = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSymbols = includeSymbolsElement.checked
  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  displayPass.innerText = password
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lowerCase
  if (includeUppercase) charCodes = charCodes.concat(upperCase)
  if (includeSymbols) charCodes = charCodes.concat(symCodes)
  if (includeNumbers) charCodes = charCodes.concat(numCodes)
  
  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function LowToHigh(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacter(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}