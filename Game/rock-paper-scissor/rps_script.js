const choice=["Rock","Paper","Scissors"];
let user_point=0;
let computer_point=0;

function checkResult(user_choice){
    const random=Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    const computer_choice=choice[random];
    document.getElementById('user_choice').innerHTML=user_choice;
    document.getElementById('computer_choice').innerHTML=computer_choice;
    if(user_choice==computer_choice){
        document.getElementById('result').innerHTML='TIE';
    }
    else{
        switch(user_choice){
            case 'Rock':
                if(computer_choice=="Scissors"){
                    user_point++;
                    document.getElementById('result').innerHTML='You win';
                    document.getElementById('user_score').innerHTML=user_point;
                }
                else if(computer_choice=="Paper"){
                    computer_point++;
                    document.getElementById('result').innerHTML='Computer win';
                    document.getElementById('computer_score').innerHTML=computer_point;
                }
                break;
            case 'Paper':
                if(computer_choice=='Rock'){
                    user_point++;
                    document.getElementById('result').innerHTML='You win';
                    document.getElementById('user_score').innerHTML=user_point;
                }
                else if(computer_choice=='Scissors'){
                    computer_point++;
                    document.getElementById('result').innerHTML='Computer win';
                    document.getElementById('computer_score').innerHTML=computer_point;
                }
                break;
            case 'Scissors':
                if(computer_choice=='Rock'){
                    computer_point++;
                    document.getElementById('result').innerHTML='Computer win';
                    document.getElementById('computer_score').innerHTML=computer_point;
                }
                else if(computer_choice=='Paper'){
                    user_point++;
                    document.getElementById('result').innerHTML='You win';
                    document.getElementById('user_score').innerHTML=user_point;
                }
                break;
            }
    }
}

function reset(){
    document.getElementById('user_choice').innerHTML="";
    document.getElementById('computer_choice').innerHTML="";
    computer_point=0;
    user_point=0;
    document.getElementById('result').innerHTML="";
    document.getElementById('user_score').innerHTML=user_point;
    document.getElementById('computer_score').innerHTML=computer_point;
}

