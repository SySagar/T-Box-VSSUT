fetch('https://t-box-backend.onrender.com/get-blog')
    .then(response => response.json())
    .then(qt =>{
        const text = qt.snippet;
        const topic = qt.title;
        const ele= document.getElementById('Element')
        ele.innerHTML=text
        const title= document.getElementById('Title')
        title.innerHTML=topic

        console.log(qt);
   
    })