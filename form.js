







let btn=document.getElementById("btn")
btn.style.backgroundColor="blue"
btn.style.height='35px'
btn.style.width="10%"
btn.style.color="#fff"
btn.style.borderRadius = "10px"
btn.style.border="0px"
btn.style.border="0px"
btn.addEventListener("click", function(){
    first=document.getElementById("firstname").value
    last=document.getElementById("lastname").value
    address=document.getElementById("adds").value
    pincodes=document.getElementById("pincode").value
    gender=document.getElementById("gen").value

    console.log(first)
    console.log(last)
    console.log(address)
    console.log(pincodes)
    console.log(gender)

    
        let array=[];
        var chkbox;
   let checkbox1= document.querySelectorAll('input[type=checkbox]:checked');
    // for(let i in checkbox1){
    //     console.log(i.value)
    // }
    for(let i=0;i<checkbox1.length;i++){
    chkbox= checkbox1[i].value;
           console.log(chkbox)
           array.push(chkbox)

    
    }

    state=document.getElementById("state").value
    country=document.getElementById("country").value
    console.log(state)
    console.log(country)
 })