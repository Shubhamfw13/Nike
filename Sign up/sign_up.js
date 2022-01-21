let reg_obj = {
    gender:"gender",
    email:"email",
    password:"pass",
    firstname:"first",
    lastname:"last",
    dob:"birth",
    country:"country"
}

document.querySelector("#join_us").addEventListener("click",(event) =>
{
    event.preventDefault() 

    let email =  document.querySelector("#email").value
    let password =  document.querySelector("#password").value
    let first =  document.querySelector("#first").value
    let last =  document.querySelector("#last").value
    let birth =  document.querySelector("#birth").value
    let country =  document.querySelector("#country").value

    if(email == "" || password == "" || first == "" || last == "" || birth == "")
    {
        alert(`Please fill all fields` )
    
        document.querySelector("#email").value = "";
        document.querySelector("#password").value = "";
        document.querySelector("#first").value = "";
        document.querySelector("#last").value = "";
        document.querySelector("#birth").value = "";
    }
    else
    {
        reg_obj["email"] = email
        reg_obj["password"] = password
        reg_obj["firstname"] = first
        reg_obj["lastname"] = last
        reg_obj["dob"] = birth
        reg_obj["country"] = country

        localStorage.setItem("reg_data",JSON.stringify(reg_obj))

        window.location.href = "./sign_in.html";
    }



})

document.querySelector("#male").addEventListener("click",() =>
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