let reg_obj = {
    gender:"gender",
    email:"email",
    password:"pass",
    firstname:"first",
    lastname:"last",
    dob:"birth",
    country:"country" // Objects with dummy values
}

document.querySelector("#join_us").addEventListener("click",(event) => // if clicked on sign up button 
{
    event.preventDefault()  /// preventing default behavior of refresh

    let email =  document.querySelector("#email").value //Getting all entered values
    let password =  document.querySelector("#password").value
    let first =  document.querySelector("#first").value
    let last =  document.querySelector("#last").value
    let birth =  document.querySelector("#birth").value
    let country =  document.querySelector("#country").value

    if(email == "" || password == "" || first == "" || last == "" || birth == "") // if empty or not filled any field
    {
        alert(`Please fill all fields` ) // alert to fill all 
    
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
        document.querySelector("#first").value = "";
        document.querySelector("#last").value = "";
        document.querySelector("#birth").value = ""; // making empty again
    }
    else // if filled all
    {
        reg_obj["email"] = email
        reg_obj["password"] = password
        reg_obj["firstname"] = first
        reg_obj["lastname"] = last
        reg_obj["dob"] = birth
        reg_obj["country"] = country // Putting details to object

        localStorage.setItem("reg_data",JSON.stringify(reg_obj)) // setting items to local storage

        window.location.href = "/Sign In/sign_in.html"; // next page
    }
})

document.querySelector("#male").addEventListener("click",() => // gender button styles upon click
{
    reg_obj["gender"] = event.target.textContent

    event.target.style.cssText = 
    `background:black;
    color:white;`

    document.querySelector("#female").style.cssText = 
    `background:white;
    color:grey;`
})
document.querySelector("#female").addEventListener("click",() =>
{
    reg_obj["gender"] = event.target.textContent

    event.target.style.cssText = 
    `background:black;
    color:white;`;
    console.log(reg_obj)

    document.querySelector("#male").style.cssText = 
    `background:white;
    color:grey;`
})