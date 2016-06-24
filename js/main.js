$(document).ready(function() {
  var currentCalcField = $('#calcNum1'),
      currentTotal = 0,
      currentOperator = '+',
      visOn = false

    // OPERATIONAL BUTTONS
  $('#calcBtn').on('click', function() {
    var calcNum1 = Number($('#calcNum1').val())

    $('#calcNum1').val('')

    if (currentOperator === '+') {
      currentTotal = currentTotal + calcNum1
    }
    else if (currentOperator === '-') {
      currentTotal = currentTotal - calcNum1
    }
    else if (currentOperator === 'x') {
      currentTotal = currentTotal * calcNum1
    }
    else if (currentOperator === '/') {
      currentTotal = currentTotal / calcNum1
    }
      console.log(currentTotal)
    $('#calcAnswerOutput').html(currentTotal)
  })

    // VALUE BUTTONS
  $('#calcBtn0').on('click', function(){
    var calcBtnValue = 0

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn1').on('click', function(){
    var calcBtnValue = 1

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn2').on('click', function(){
    var calcBtnValue = 2

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn3').on('click', function(){
    var calcBtnValue = 3

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn4').on('click', function(){
    var calcBtnValue = 4

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn5').on('click', function(){
    var calcBtnValue = 5

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })

  $('#calcBtn6').on('click', function(){
    var calcBtnValue = 6

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn7').on('click', function(){
    var calcBtnValue = 7

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn8').on('click', function(){
    var calcBtnValue = 8

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtn9').on('click', function(){
    var calcBtnValue = 9

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })
  $('#calcBtnDec').on('click', function(){
    var calcBtnValue = '.'

    currentCalcField.val(currentCalcField.val() + calcBtnValue)
  })

    // ADD, SUBTRACT, ETC

  $('#calcBtnPlus').on('click', function(){
    var calcNum1 = $('#calcNum1')
      currentOperator = '+'
      currentTotal = currentTotal + Number(calcNum1.val())


      console.log(currentTotal)

    calcNum1.val('')
  })

  $('#calcBtnMinus').on('click', function(){
    var calcNum1 = $('#calcNum1')
      currentOperator = '-'
      currentTotal = currentTotal + Number(calcNum1.val())

      console.log(currentTotal)

    calcNum1.val('')
  })

  $('#calcBtnMult').on('click', function(){
    var calcNum1 = $('#calcNum1')
      currentOperator = 'x'
      currentTotal = currentTotal + Number(calcNum1.val())

      console.log(currentTotal)

    calcNum1.val('')
  })

  $('#calcBtnDiv').on('click', function(){
    var calcNum1 = $('#calcNum1')
      currentOperator = '/'
      currentTotal = currentTotal + Number(calcNum1.val())

      console.log(currentTotal)

    calcNum1.val('')
  })

  // CLEAR BUTTON
  $('#calcBtnClear').on('click',function(){
    var calcNum1 = $('#calcNum1')

        currentTotal = 0
        calcNum1.val('')
        $('#calcAnswerOutput').html('')
  })
})
