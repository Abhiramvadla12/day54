document.getElementById('NOKKU').addEventListener('click',function (){
    const url = 'https://randomuser.me/api/';
    let div = document.createElement('div');
    div.id = 'div';
    fetch(url).then(response => response.json()).then((data )=> { 
        data['results'].forEach((element) => {
            for(i in element){
                if(i == 'name'||i=="login"||i=="dob"||i=="registered"||i=="id"||i=="picture"){
                    for(j in element[i]){
                        let p = document.createElement('p');
                        p.innerHTML = `${j}:${element[i][j]}`;
                        div.appendChild(p);
                        console.log(`${j}:${element[i][j]}`);
                    }
                }
                else if(i == "location"){
                    for(k in element[i]){
                        if(k=='street'||k=='coordinates'||k=='timezone'){
                            for(s in element[i][k]){
                                let p = document.createElement('p');
                                p.innerHTML = `${s}:${element[i][k][s]}`
                                div.appendChild(p);
                                console.log(`${s}:${element[i][k][s]}`);
                            }
                        }
                        else{
                             let p = document.createElement('p');
                            p.innerHTML = `${k}:${element[i][k]}`;
                            div.appendChild(p);
                            console.log(`${k}:${element[i][k]}`)
                        }
                    }
                }
                else{
                     let p = document.createElement('p');
                    p.innerHTML =`${i}:${element[i]}`;
                    div.appendChild(p);
                    console.log(`${i}:${element[i]}`);
                }                
                
               
            }
        })
    })
    document.body.appendChild(div);
    document.getElementById('NOKKU').style.display = 'none';   
})

    
    


    
    
