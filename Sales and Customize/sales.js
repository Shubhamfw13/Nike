function getdata(product,location) // funtion to add data to particular element, Data of products and final location to add
{
    location.innerHTML = ""; // Making empty so that does creates products box multiple times
    product.forEach(elem => { // For loops , one by one product
             
        let product_box = document.createElement("div"); // Box per product
        // Product Show Page on click
        product_box.addEventListener("click",(event) => { // If clicked on any product box

            let obj = { // adding all details of clicked product
                titleprod: elem.name,
                imageprod: elem.image,
                desprod: elem.description,
                catprod: elem.category,
                priceprod: elem.price
            };
    
            localStorage.setItem("product", JSON.stringify(obj)); // Setting to local storage
    
            window.location.href = "product_show.html"; // Moving Next page
        });

        let image_box = document.createElement("div"); // Image box
        image_box.setAttribute("id","image_box");

        let image = document.createElement("img"); 
        image.src = elem.image; // Adding image link

        let content_box = document.createElement("div");
        content_box.setAttribute("id","content_box"); // contents box(name,price,categaries)

        let name = document.createElement("h5"); 
        name.textContent = elem.name;

        let category = document.createElement("p");
        category.textContent = elem.category;

        let price = document.createElement("p");
        price.textContent = elem.price;

        image_box.append(image); //Appending image to image box
        content_box.append(name,category,price); // appending name, price, category to content box
        product_box.append(image_box,content_box); // Image box and content box
        location.append(product_box); // Final location that is Box of all products
    })
}
// --------------- FILTER SCTION NEXT PART --------------------------------------
function filter_cat(data,main,location,name) // products data(to filter),main means filter box,
{                                           // location means category and button box container,name (catoegory)
    let section = document.createElement("div");
    section.style.cssText = ` 
    display:flex;
    height:35px;
    border:1px ridge;
    padding-top:2%;`; // Styles to Particular section (category and button)

    let button = document.createElement("button"); // Button 

    button.style.cssText = 
    `margin:0% 4% 0% 5%;
    height:20px;
    width:20px;
    border-radius:5px;
    background:white;
    border:1px solid black`; // Button styles
    let sec_name = document.createElement("span");
    sec_name.textContent = name; // adding category name.

    button.addEventListener("click",() => // Upon clicking on filter button
    {
        event.target.style.background = "black";  // color changes to black
 
        setTimeout(function(){  // background of button changes after 0.8 sec to white(normal)
            button.style.background = "white"; 
        },800)

       let products = data.filter(function(elem) // FILTER UPON CLICK
        {
            let word = event.target.nextSibling.textContent; // Next sibling means 67 line
            let include = elem.category; // element category that is Men's shoes, Women's shirts, Kids etc.
            let has = include.includes(word); // checking if include has word of word 79 line

            if( has == true) // if true
            {
                return include; // returns all true products(if men , returns all mens)
            }
        })
        let place = document.querySelector("#sale_products"); // Calling product box again to store filtered products
        getdata(products,place); // calling aget data, to put filtered products

    })

    section.append(button,sec_name); // appending button and category name

    location.append(section); // appending to filter category box
    main.append(location); // to filter box
}

export {getdata,filter_cat};