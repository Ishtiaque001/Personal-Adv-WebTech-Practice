function validateForm() { 
    const name = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();
    if (name == "" || lastName == "") {
        alert("Please fill in both fields.");
        return false;
    }
    

 if (name.length < 2 ||  lastName.length < 2) {
    alert("Please enter at least 2 characters for both fields.");
    return false;
}
return true;
}

