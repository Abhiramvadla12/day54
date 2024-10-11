document.getElementById('NOKKU').addEventListener('click',function (){
    const URL = 'https://fakestoreapi.com/products';
    let table = document.createElement("table");
                let thead = document.createElement("thead");
                let trHead = document.createElement("tr");
                thead.appendChild(trHead);
                let theadData = ["id", "title", "price", "description", "category", "image", "rating"];
                theadData.forEach(data =>  {
                    let th = document.createElement("th");
                    th.innerText = data;
                    trHead.appendChild(th);
                });
                let tbody = document.createElement("tbody");
    fetch(URL)
    .then(response=>response.json())
        .then(data =>data.forEach(obj => {
                    let tr = document.createElement("tr");
                    for (let key in obj) {
                        let td = document.createElement("td");
                        if (key === 'image') {
                            let img = document.createElement("img");
                            img.setAttribute("src", obj[key]);
                            td.appendChild(img);
                        }
                        else if (key === "rating") {
                            td.innerText = `${obj[key].rate} (${obj[key].count})`;
                        }
                        else {
                            td.innerText = obj[key];
                        }
            
                        tr.appendChild(td);
                    }
                    tbody.appendChild(tr);  
            })
        )
        table.append(thead, tbody);
        document.body.appendChild(table);
        document.getElementById('NOKKU').style.display = 'none';
})

    
    
