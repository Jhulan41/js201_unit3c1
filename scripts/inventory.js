

let arr= JSON.parse(localStorage.getItem("products")) || [];

function showdata(data){
    document.getElementById("all_products").innerHTML=null;
   

    data.map(function(element,index){

     

        let div = document.createElement("div");
        let image=document.createElement("img");
        image.id="image";
        image.src=element.image;
        let p1=   document.createElement("p");
        p1.innerText=element.type;
        let p2=   document.createElement("p");
        p2.innerText=element.desc;
        let p3=   document.createElement("p");
        p3.innerText=element.price;



        let removeBtn = document.createElement("button");
        removeBtn.id = "remove_product";
        removeBtn.textContent="Remove Product"
        removeBtn.addEventListener("click", function(){
            removeproduct(index);
        });

        div.append(image,p1,p2,p3,removeBtn)
        document.getElementById("all_products").append(div);
       
        


    })
}

showdata(arr);


function removeproduct(index){

    arr.splice(index,1);
    localStorage.setItem("products",JSON.stringify(arr));
    showdata(arr);
}

