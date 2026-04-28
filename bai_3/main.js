const mangso=[1,2,3,4,5,6,7,8,9];
function tinhtrungbinhcong(mangso){
    let tong=0;
    for(let i=0;i<mangso.length;i++){
        tong+=mangso[i];
    }
    return tong/mangso.length;      
}           
console.log(tinhtrungbinhcong(mangso));

let so;
so=prompt("Nhập số cần kiểm tra");
function kiemtrasonguyen(so){
    if(so%2==0){
        return "Đây là số chẵn";
    }else{
        return "Đây là số lẻ";
    }}
console.log(kiemtrasonguyen(so));

function timsolonnhattrongmang(mangso){
    let max=mangso[0];  
    for(let i=1;i<mangso.length;i++){
        if(mangso[i]>max){
            max=mangso[i];
        }   }
    return max;
}

const products=[
    {id:1, name:"Iphone 14 Pro Max",price:30000000, color:"Đen", stock:10},
    {id:2, name:"Samsung Galaxy S23 Ultra",price:25000000, color:"Trắng", stock:0},
    {id:3, name:"Xiaomi Mi 12 Pro",price:20000000, color:"Xanh", stock:15}
];
Object.freeze(products);

function kiemtrahangtonkho(products){
    let hangtonkho=[];
    for(let i=0;i<products.length;i++){ 
        if(products[i].stock>0){
            hangtonkho.push(products[i]);
        }   
    }    return hangtonkho;
}
console.log(kiemtrahangtonkho(products));

function currencyFormat(price){
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
function indanhsachsanpham(products){   
    for(let i=0;i<products.length;i++){
        console.log("Tên sản phẩm: "+products[i].name);
        console.log("Giá sản phẩm: "+products[i].currencyFormat(products[i].price));
        console.log("Màu sắc: "+products[i].color);
        console.log("Số lượng tồn kho: "+products[i].stock);
        if(products[i].stock===0){
            console.log("Sản phẩm đã hết hàng");
        }
        else{
            console.log("Sản phẩm còn hàng");
        }
        console.log("-----------------------------");
    }
}
indanhsachsanpham(products);


