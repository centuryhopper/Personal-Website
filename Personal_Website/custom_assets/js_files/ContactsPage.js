// begin

function ManageContact()
{
    // reference the num chars remaining msg and textarea element
    const textArea = document.getElementById("contacts-textarea");
    var numCharsRemaining = document.getElementById("charsremaining");
    var MAX_CHAR = 140;

    // text area managing
    textArea.addEventListener("input", () => {

        // console.log("got input");
        console.log(textArea.value);

        // keep track of the text area input characters' length
        remainingChars = MAX_CHAR - textArea.value.length;
        const color = remainingChars <= 0 ? 'red' : null;


        numCharsRemaining.textContent = remainingChars + " remaining characters";
        numCharsRemaining.style.color = color;
    });

    // todo make sure that the first and last name
    // todo are force capitalized
}

// simiulate a main method from languages like java and C
function Main()
{
    ManageContact();
}





// runs the Main method
Main();





