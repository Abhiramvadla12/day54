document.getElementById('NOKKU').addEventListener('click',function (){
    const url = 'https://dummyjson.com/todos';
    let table = document.createElement("table");
                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");
                thead.appendChild(trHead);
                let theadData = ["id", "todo","completed",'userId'];
                theadData.forEach(data =>  {
                    let th = document.createElement("th");
                    th.innerText = data;
                    trHead.appendChild(th);
                });
                let tbody = document.createElement("tbody");
    fetch(url).then(response => response.json())
    .then((data )=> { 
        data['todos'].forEach(function (obj){
                let tr = document.createElement("tr");
                for (let key in obj) {
                    let td = document.createElement("td");
                        td.innerText = obj[key];
        
                    tr.appendChild(td);
                }
                tbody.appendChild(tr);  
        
        })
        
    })
    table.append(thead, tbody);
    document.body.appendChild(table);
    document.getElementById('NOKKU').style.display = 'none';   
})

    
    
