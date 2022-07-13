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

            }
    }
}