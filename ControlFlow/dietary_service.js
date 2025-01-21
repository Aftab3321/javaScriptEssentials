var dietaryForm = document.getElementById("dietaryCheckForm");

dietaryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let role = document.getElementById("role").value;
    if (role == "") {
        alert("Please Select Your Role");
    } else if (role == "emp") {
        alert("You are authorized to have access to Dietary Service");
    } else if (role == "enrolled_mem") {
        alert("You are authorized and have one-on-one interaction with a dietician");
    } else if (role == "sub") {
        alert("You have a partial access to dietary services only");
    } else if (role == "non_sub") {
        alert("You need to be atleast a subscriber to avail this facility");
    } else {
        alert("Please Select Your Role");
    }
})