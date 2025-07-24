const form = document.querySelector(".form");
const firstName = form.querySelector(".first_name_of_person");//remember to have a class in the input!!!

form.addEventListener("submit", function(evt){
    evt.preventDefault();
    console.log(firstName.value);//prints the first name of the person to the consol and .value acces the value of the name
    form.reset();//resets the input field so the next person who wants to enter their first name has a clean field
});

