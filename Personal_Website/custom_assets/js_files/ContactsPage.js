// begin

function TitleCase(myStr)
{
    return myStr.toLowerCase().split(' ')
        .map(name => name.charAt(0)
            .toUpperCase() + name.substring(1)).join(' ');
}

function ManageContact()
{
    // reference the num chars remaining msg and textarea element
    const textArea = document.getElementById("contacts-textarea");
    var numCharsRemaining = document.getElementById("charsremaining");
    var MAX_CHAR = 140;

    // text area managing
    textArea.addEventListener("input", () =>
    {

        // console.log("got input");
        console.log(textArea.value);

        // keep track of the text area input characters' length
        remainingChars = MAX_CHAR - textArea.value.length;
        const color = remainingChars <= 0 ? 'red' : null;


        numCharsRemaining.textContent = remainingChars + " remaining characters";
        numCharsRemaining.style.color = color;
    });

    // makes sure that the first and last name
    // are force capitalized
    var nameInput = document.getElementById("name");
    nameInput.addEventListener("input", () =>
    {
        nameInput.value = TitleCase(nameInput.value);
    });
}

// simiulate a main method from languages like java and C
function Main()
{
    ManageContact();
}






// runs the Main method
Main();
