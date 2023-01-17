async function news(){
    const limit= 5;
    const response = await fetch(`https://brottsplatskartan.se/api/events/?location=boras&limit=${limit}`);
    const data =await response.json();

    console.log(data.data);
    
    
    let newsArticle = document.querySelector('.news-article')as HTMLHeadElement;
    newsArticle.innerHTML = ""
    data.data.map((obj) => {/* 
        let article = `${obj.}`; */
        newsArticle.innerHTML+= `<div><img src="${obj.image}" alt=""><br> Tid:${obj.content_teaser} <br> <button onclick="location.href='${obj.external_source_link}'" class="hej">läs mer</button></div>`;
        
    })
    return data;
    
};


news();