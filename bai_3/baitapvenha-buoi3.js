//Bài 1
let ten="Phạm Hùng Sơn";
let tuoi=20;
console.log("Tên: "+ten,"Tuổi: "+tuoi);

//Bài 2: Tính tổng 2 sô
let a=5;
let b=10;
function tinhTong(a,b){ 
    return a+b;
}   
console.log("Tổng của "+a+" và "+b+" là: "+tinhTong(a,b));

//Bài 3: Kiểm tra 1 số chẵn hay lẻ
function kiemTraSoChanLe(so){
    if(so%2==0){
        return "Đây là số chẵn";
    }else{
        return "Đây là số lẻ";
    }       
}
let so=7;
console.log(so+" là: "+kiemTraSoChanLe(so));

//Bải 4: Tìm số max trong mảng
const mangso=[1,2,3,4,5,6,7,8,9];
function timSoLonNhat(mangso){
    let max=mangso[0];      
    for(let i=1;i<mangso.length;i++){
        if(mangso[i]>max){
            max=mangso[i];
        }   
    }   return max; 
}
console.log("Số lớn nhất trong mảng là: "+timSoLonNhat(mangso));
//Bải 5: Tính tổng các phần tử trong mảng

function tinhTongMang(mangso){
    let tong=0;
    for(let i=0;i<mangso.length;i++){
        tong+=mangso[i];
    }
    return tong;      
}       
console.log("Tổng các phần tử trong mảng là: "+tinhTongMang(mangso));   

//Bài 6: Đếm số phần tử lớn hơn 10 trong mảng
function demSoLonHon10(mangso){
    let count =0;
    for(let i=0;i<mangso.length;i++){
        if(mangso[i]>10){
            count++;        }
    }
    return count;
}
console.log("Số phần tử lớn hơn 10 trong mảng là: "+demSoLonHon10(mangso));
//Bài 7: Viết hàm đảo ngược chuỗi
function daoNguocChuoi(str){
    let reversed="";
    for(let i=str.length-1;i>=0;i--){
        reversed+=str[i];
    }
    return reversed;
}
console.log("Chuỗi đảo ngược là: "+daoNguocChuoi("Hello World"));       

//Bài 8: lọc số dương từ mảng hỗn hợp
function locSoDuong(mangso){
    let soDuong=[];
    for(let i=0;i<mangso.length;i++){
        if(mangso[i]>0){
            soDuong.push(mangso[i]);
        }   
    }    return soDuong;
}   
const mangHonHop=[-1,2,-3,4,-5,6];
console.log("Các số dương trong mảng là: "+locSoDuong(mangHonHop));

//Bai 9: Đếm số lần xuất hiện của một ký tự trong chuỗi
function demKyTu(str, kyTu){
    let count=0;
    for(let i=0;i<str.length;i++){
        if(str[i]===kyTu){
            count++;
        }   
    }   return count;
}       
console.log("Số lần xuất hiện của ký tự 'o' trong chuỗi là: "+demKyTu("Hello World", "o"));
//Bài 10: Quản lý danh sách sinh viên: thêm, sửa, xoá sinh viên trong danh sách.
    let danhSachSinhVien=[
        {id:1, name:"Phạm Hùng Sơn", age:20},
        {id:2, name:"Nguyễn Văn A", age:22},
        {id:3, name:"Trần Thị B", age:21}
    ];
function themSinhVien(danhSachSinhVien, sinhVien){
    danhSachSinhVien.push(sinhVien);
}   
function suaSinhVien(danhSachSinhVien, id, sinhVienMoi){
    for(let i=0;i<danhSachSinhVien.length;i++){
        if(danhSachSinhVien[i].id===id){
            danhSachSinhVien[i]=sinhVienMoi;
            break;
        }   
    }}   
function xoaSinhVien(danhSachSinhVien, id){
    for(let i=0;i<danhSachSinhVien.length;i++){
        if(danhSachSinhVien[i].id===id){
            danhSachSinhVien.splice(i,1);
            break;
        }   
    }   
}   
console.log("Danh sách sinh viên ban đầu: ", danhSachSinhVien);
themSinhVien(danhSachSinhVien, {id:4, name:"Lê Văn C", age:23});
console.log("Danh sách sinh viên sau khi thêm: ", danhSachSinhVien);
suaSinhVien(danhSachSinhVien, 2, {id:2, name:"Nguyễn Văn A", age:23});
console.log("Danh sách sinh viên sau khi sửa: ", danhSachSinhVien);
xoaSinhVien(danhSachSinhVien, 1);
console.log("Danh sách sinh viên sau khi xoá: ", danhSachSinhVien);

