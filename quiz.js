(function() 
 {
  var allQuestions = [{
    question: "The great Victoria Desert is located in",
    options: ["Canada"," West Africa", "Australia", "North America"],
    answer: 2
  }, {
    question: "The leading state in producing paper is",
    options: ["Bihar", "West Bengal", "Kerala", "Orissa"],
    answer: 1
  }, {
    question: "The office of the UN General Assembly is in",
    options: ["Vienna", "Zurich", "Paris","New York"],
    answer: 3
  },{
    question: "'OS' computer abbreviation usually means ?",
    options: ["Order of Significance", "Open Software", "Operating System", "Optical Sensor"],
    answer: 2
  }, {
    question: "Entomology is the science that studies",
    options: ["Insects", "The history of scientific terms", " The formation of rocks", "Behavior of human beings"],
    answer: 0
  },{
    question: "Joule is the unit of",
    options: ["Energy", "Force", "Distance", "Pressure"],
    answer: 0
  },{
     question: "The main source of water pollution is :",
    options: ["Air Pollutants", "Sewage System", "Rain Water", "Well Water"],
    answer: 1
   },{
    question: "The world smallest country is",
    options: ["India", "Iran", "Maldives", "Vatican City"],
    answer: 3
   },{
    question: "Layer of atmosphere in which Ozone layer lies is",
    options: ["Atmosphere", "Mesosphere", "Stratosphere", "Troposphere"],
    answer: 2
   },{
    question:"India has largest deposits of ____ in the world.",
    options: ["Gold", "Iron", "Diamond", "Mica"],
    answer: 3
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();