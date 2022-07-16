// function originScene() {
//     document.getElementById("choiceImg").src = "./assets/images/originChoice.png";
// }

var selection = 0;

function choiceStory(select) {

    switch(selection) {
        case 0:
            selection = 1;
            document.getElementById("choiceImg").src = "./assets/images/originChoice.png";
            break;
        case 1:
            if (select == 1) {
                selection = 2;
                document.getElementById("choiceImg").src = "./assets/images/choice_2.png";
            }
            else {
                selection = 3;
                document.getElementById("choiceImg").src = "./assets/images/choice_3.png";
            }
            break;
        case 2:
            if (select == 1) {
                selection = 4;
                document.getElementById("choiceImg").src = "./assets/images/choice_4.png";
            }
            else {
                selection = 5;
                document.getElementById("choiceImg").src = "./assets/images/choice_5.png";
            }
            break;
        case 3:
            if (select == 1) {
                selection = 6;
                document.getElementById("choiceImg").src = "./assets/images/choice_6.png";
            }
            else {
                selection = 7
                document.getElementById("choiceImg").src = "./assets/images/choice_7.png";

            }
                break;
            case 4:
                if (select == 1) {
                    selection = 8;
                    document.getElementById("choiceImg").src = "./assets/images/choice_8.png";
                }
                else {
                    selection = 7
                }
                break;
    }
}