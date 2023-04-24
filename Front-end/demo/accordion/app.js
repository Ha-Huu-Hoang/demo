let list = document.querySelectorAll('.list .item');
list.forEach(item =>{
    item.addEventListener('click',function(even){
       if(item.classList.contains('active')){
        if(even.target.classList.contains('dropdown')){
            item.classList.remove('active');
        }
       }else{
        item.classList.add('active');
       }
    })
})