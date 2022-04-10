let cont= document.getElementById("container");
window.addEventListener("load",function(){
  defltdata()
  })
const defltdata=async()=>{
  try{
    let ser="most popular in india"
    let res2 =await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBMDzFeF_BxcgWqONc-WzMnfMHcT17dDPM&q=${ser}&type=video&maxResults=20`)
    let dta=await res2.json();
    console.log(dta)
    dtadis(dta.items)
  }
  catch(err){
    console.log(err)
  }
}

const dtadis=(list) =>{
  cont.innerHTML="";
  console.log(list)
  list.forEach((vid)=>{
    const{
      snippet:{thumbnails:{medium:{url}},title},id:{videoId}
    } =vid
 
  console.log(url,title,videoId)
    let card= document.createElement("div");
    card.addEventListener("click",function(){
      mainmove(videoId)
    })
    card.setAttribute("id","incard")
    let iframe=document.createElement("img");
    iframe.src=url;
  
  let pcont=document.createElement("div");
  let p1= document.createElement("P");
  p1.textContent=title;
  pcont.append(p1)
    card.append(iframe,pcont);
    cont.append(card)
  });
}




    const getdata =async()=>{
        
        try{
            let input=document.getElementById("servid").value;
            console.log(input)
            let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBMDzFeF_BxcgWqONc-WzMnfMHcT17dDPM&q=${input}&type=video&maxResults=20`)
       
        let data = await res.json();
        console.log(data)
        let list=data.items
        displaydata(list);
        }
        catch(err){
            console.log(err)
        }
    }
    const displaydata=(list) =>{
        cont.innerHTML="";
        console.log(list)
        list.forEach((vid)=>{
          const{
            snippet:{thumbnails:{medium:{url}},title},id:{videoId}
          } =vid
       
        console.log(url,title,videoId)
          let card= document.createElement("div");
          card.addEventListener("click",function(){
            mainmove(videoId)
          })
          card.setAttribute("id","incard")
          let iframe=document.createElement("img");
          iframe.src=url;
        
        let pcont=document.createElement("div");
        let p1= document.createElement("P");
        p1.textContent=title;
        pcont.append(p1)
          card.append(iframe,pcont);
          cont.append(card)
        });
    }
      

    function mainmove(v){
      let id=v;
      localStorage.setItem("VID",JSON.stringify(id));
      window.location.href="play.html"
    }
   
   
   

    