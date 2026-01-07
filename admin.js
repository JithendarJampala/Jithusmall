        import {db} from "./firebase.js";
        import { getDatabase, get,set, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
        
        
       
        // const data ={
        //   Ground :["g1","g2","g3","g4"],
        //   First :["f1","f2","f3","f4"],
        //   Second :["s1","s2","s3","s4"],
        //   Third : ["t1","t2","t3","t4"],
        //   Fourth : ["four1","four2","four3","four4"]
        // }

        const floor = document.getElementById("floors");

        // floor.addEventListener("change",()=>{
        //   const stall = document.getElementById("malls");
        //   stall.style.display="block";
        //   stall.innerHTML="<select id='malls'></select>"
        //   let i=1;
        //   document.getElementById("msg").innerText=` Hello ${stall.value}`;
        //   // data[floor.value].forEach(e=>{
        //   //   const op = document.createElement("option");
        //   //   op.value=i++;
        //   //   op.textContent=e;
        //   //   stall.appendChild(op);
        //   // })
        // })

        const mall = document.getElementById("malls");
        mall.addEventListener("click",()=>{
          document.getElementById('input').style.display="block";
          // document.getElementById("msg2").innerText=`The id can be ${floor.value}-stall-${mall.value}`
          // const stallCount =document.getElementById(` ${floor.value}-stall-${mall.value}`).value;
          // document.getElementById("box").innerText=`Stall value is  ${stallCount}`;
        })

        document.getElementById("sub-btn").addEventListener("click",
          ()=>{
              let waitingTime="12 Minutes";
              waitingTime = document.getElementById("input").value;
              let rfloor = floor.value.toLowerCase();
              let i= document.getElementById("malls").value;
              set(ref(db,`/${rfloor}/${i}`),waitingTime+" Minutes")
             console.log("Hello")

        })
