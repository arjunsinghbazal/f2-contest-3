let tdata=[];
let addbtn = document.getElementById('btn');
let id = 1;
let tBody=document.querySelector("tbody");
addbtn.addEventListener("click", myfun );
function myfun(){
    let tr=document.createElement("tr");
    let tdata1=tr.appendChild(document.createElement('td'));
    let tdata2=tr.appendChild(document.createElement('td'));
    let tdata3=tr.appendChild(document.createElement('td'));
    let tdata4=tr.appendChild(document.createElement('td'));
    let tdata5=tr.appendChild(document.createElement('td'));
    let tdata6=tr.appendChild(document.createElement('td'));
    let tdata7=tr.appendChild(document.createElement('td'));
    let buton=document.createElement("button")
    buton.style.backgroundColor='black'
    buton.style.color='white'
    buton.style.padding='4px'
    buton.style.width="100%"
    buton.innerText="save";
    let inp2=document.createElement("input")
   inp2.type='text'
   inp2.required='true'
   
   inp2.classList.add('adjust')

   let inp3=document.createElement("input")
   inp3.type='text'
   inp3.required='true'
   inp3.classList.add('adjust')
   
   let inp4=document.createElement("input")
   inp4.type='text'
   inp4.required='true'
   inp4.classList.add('adjust')
   
   let inp5=document.createElement("input")
   inp5.type='number'
   inp5.required='true'
   inp5.classList.add('adjust')

   let inp6=document.createElement("input")
   inp6.type='email'
   inp6.classList.add('adjust')
   
   tdata1.innerHTML=id;
   tdata2.appendChild(inp2)
   tdata3.appendChild(inp3)
   tdata4.appendChild(inp4)
   tdata5.appendChild(inp5)
   tdata6.appendChild(inp6)
   tdata7.appendChild(buton)
   tBody.append(tr);
   function saved(){
    if(inp2.value=="" || inp3.value=="" || inp4.value=="" || inp5.value==""|| inp6.value==""){
        alert("Fill the required feilds")
    }
    else if (inp6.value.includes("@") == false) {
        alert("Valid Email required in Marked By")
    }
    else{
    inp2.readOnly='true' 
    inp3.readOnly='true'
    inp4.readOnly='true'
    inp5.readOnly='true'
    inp6.readOnly='true'
   
    let data= {id: td1.innerText, student_name: inp2.value, student_roll: inp3.value, subject: inp4.value, marks: inp5.value, markedBy: inp6.value};

    tdata.push(data);
    console.log("new:",data);

    console.log("array:",tdata);
    tdata7.innerHTML=null
    }
}
buton.addEventListener('click', saved)
  }
