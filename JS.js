var checkbox_toggle=document.getElementById('light-dark');
const body=document.querySelector("body"),
toggle=body.querySelector(".logo"),
sidebar=body.querySelector(".sidebar"),
searchBtn=body.querySelector(".search-box"),
modeSwitch=body.querySelector(".toggle-switch"),
modeText=body.querySelector(".mode-text"),
banner=body.querySelector(".banner"),
footer=body.querySelector(".footer"),
trending=body.querySelector(".top_trending");

checkbox_toggle.addEventListener('change',function(){
    //thêm class drak cho body
    document.body.classList.toggle('dark');//toggle :kiểm tra class đó có không ,nếu chưa có thì thêm còn không có thì xóa.
    // document.trending.classList.querySelector("dark1");
        if(body.classList.contains('dark')){
            modeText.innerText="Dark Mode"
        }else{
            modeText.innerText="Light Mode"
        }
});

toggle.addEventListener("click",()=>{
    sidebar.classList.toggle("close");
    banner.classList.toggle("close1");
    trending.classList.toggle("close2");
    footer.classList.toggle("close3");
});



function lick_left() {
var list = document.getElementById("list_1");

    list.scrollLeft += 100;

  }

  function lick_right() {
var list = document.getElementById("list_1");

    list.scrollLeft -= 100;
  }