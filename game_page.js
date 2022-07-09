player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("question").innerHTML = "Question turn - " + player1_name;
document.getElementById("answer").innerHTML = "Answer turn - " + player2_name;

document.getElementById("player1_score").innerHTML = " " + player1_score;
document.getElementById("player2_score").innerHTML = " " + player2_score;

function send() {

    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log(word);

    charAT1 = word.charAt(1);
    console.log(charAT1);

    length_divide = Math.floor(word.length / 2);
    charAT2 = word.charAt(length_divide);
    console.log(charAT2);

    length_minus = word.length - 1;
    charAT3 = word.charAt(length_minus);
    console.log(charAT3);

    remove_1 = word.replace(charAT1, "_");
    remove_2 = remove_1.replace(charAT2, "_");
    remove_3 = remove_2.replace(charAT3, "_");
    console.log(remove_3);

    question = "<h4 id='question_word'> Q. " + remove_3 + "</h4>";
    input = "<br>Answer: <input placeholder='Guess' class='form-control' type='text' id='answer_word'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";

    row = question + input + check_button;
    document.getElementById("empty_div").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2"

function check() {
    get_answer = document.getElementById("answer_word").value;
    answer = get_answer.toLowerCase();
    console.log(answer);

    if (answer == word)
    {

        if (answer_turn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
         {
                player2_score = player2_score + 1;
                document.getElementById("player2_score").innerHTML = player2_score;
       } 
    }
 
    if(question_turn == "player1"){

        question_turn = "player2";
        document.getElementById("question").innerHTML = "Question turn - " +player2_name;
    }
    else
    {
    question_turn = "player1";
    document.getElementById("question").innerHTML = "Question turn - " +player1_name;
    }

    if(answer_turn == "player1")
    {
     answer_turn = "player2";
     document.getElementById("answer").innerHTML = "Answer turn - " +player2_name;
    }
    else
    {
     answer_turn = "player1";
     document.getElementById("answer").innerHTML = "Answer turn - " +player1_name;
    }

    document.getElementById("empty_div").innerHTML = "";


}