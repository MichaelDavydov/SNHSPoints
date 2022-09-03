  const url ="https://docs.google.com/spreadsheets/d/1bPQBzX6MrLFHPIwsqV9Ipv_emW_Vg6UyPb-3w1ylWiE/gviz/tq?&gid=0";
	const main = document.querySelector("main");
  const searchTerm = document.getElementById('searchBar');
  const answerField = document.getElementById('p');
  const semsStatus = document.getElementById('status');

  namesList = fetch(url)
    .then(res=>res.text())
    .then(rep => {
      const data = JSON.parse(rep.substr(47).slice(0,-2));
      return data;
    });      

function search() {
  
  let searchID = searchTerm.value;
    
namesList.then(loop => {
        
  for (let i = 0; i <loop.table.rows[0].c[4].v + 1; i++){
        
     if(searchID == loop.table.rows[i].c[1].v) {
       
      let ptThresh = 100;
      //console.log(loop.table.rows[i].c[1].v);
       
       if(loop.table.rows[i].c[2].v >= 100)
       {
            let info = '<span style="color:white;">Name: </span>' + loop.table.rows[i].c[0].v
            + "<br><span style='color:white;'>Total Points: </span>" + loop.table.rows[i].c[2].v;
            let status = '<span style="color:gold;"> Your points are fufilled for this semester!</span>';
            answerField.innerHTML = info;
            semsStatus.innerHTML = status;
            semsStatus.style.fontFamily = 'Bebas Neue';
            semsStatus.style.fontSize = '35px';
            confetti({origin: { y : 0.3}});
       }else 
       {
            let info = "<span style='color:white;'>Name: </span>" + loop.table.rows[i].c[0].v
            + "<br><span style='color:white;'>Total Points: </span>" + loop.table.rows[i].c[2].v;
            let status = '<span style="color:grey;"> Sorry, your points are not fufilled for this semester yet.</span>';
            answerField.innerHTML = info;
            semsStatus.innerHTML = status;
            semsStatus.style.fontFamily = 'Albert Sans';
            semsStatus.style.fontSize = '25px';
       }
      
      break;
          
        }  
    }
  }).catch(err => {
  answerField.innerHTML = "This ID is not registered."
  semsStatus.innerHTML = "";
});

} 


    
  //NamesList.then(print => console.log(print));
  //NamesList.then(print => console.log(print.table.rows[0].c[1].v));
  

                                   