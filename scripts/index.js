//store the products array in localstorage as "products"

function Product(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

let arr=[];
function submitProducts(e){
    e.preventDefault();

    let form= document.getElementById("products");
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    let image=form.image.value;

    let P = new Product(type,desc,price,image)
    arr.push(P);
    // console.log(arr);
    localStorage.setItem("products",JSON.stringify(arr));
    
    

                                              


}