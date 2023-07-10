var first = document.querySelector(".first");
var second = document.querySelector(".second");
var third = document.querySelector(".third");
var fourth = document.querySelector(".fourth");
var fifth = document.querySelector(".fifth")
var inner1 = document.querySelector(".inner1")
var inner2 = document.querySelector(".inner2")
var inner3 = document.querySelector(".inner3")
var inner4 = document.querySelector(".inner4")
var inner5 = document.querySelector(".inner5")
var current_content = document.querySelector(".first")

var program1 = document.querySelector(".program1")
var program2 = document.querySelector(".program2")
var program3 = document.querySelector(".program3")
var program4 = document.querySelector(".program4")
var program5 = document.querySelector(".program5")
var program6 = document.querySelector(".program6")
var program7 = document.querySelector(".program7")
var trigonometry = document.querySelector(".trigonometry")
var algebra = document.querySelector(".algebra")
var geometry = document.querySelector(".geometry")
var right_content = document.querySelector(".right-content")

var btn=document.querySelector(".btn")
var sidebar=document.querySelector(".sidebar")

btn.addEventListener("click",function(){
    sidebar.classList.toggle("sidebar-toggle")
})

first.addEventListener("click", function () {
    inner1.classList.toggle("inner-toggle")
})
second.addEventListener("click", function () {
    inner2.classList.toggle("inner-toggle")
})
third.addEventListener("click", function () {
    inner3.classList.toggle("inner-toggle")
})
fourth.addEventListener("click", function () {
    inner4.classList.toggle("inner-toggle")
})
fifth.addEventListener("click", function () {
    inner5.classList.toggle("inner-toggle")
})


program1.addEventListener("click", function () {
    right_content.innerHTML = `<div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/irqbmMNs2Bo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>           
    </div>
            
    <div class="cis">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KJgsSFOSQv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_MF8L7ZxwRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
    
    <div class="cis">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VSEnzzjAm0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/0Sg6QHmlFJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/JAy56OH58Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>      
            `
})
program2.addEventListener("click", function () {
    // console.log(inner3.length);
    right_content.innerHTML = `<div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oi1ffu6lBXE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
            
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Umm1ZQ5ltZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
    </div>
    
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/irqbmMNs2Bo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/mUQZ1qmKlLY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EAR7De6Goz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
      
    </div>      
            `
})
program3.addEventListener("click", function () {
    right_content.innerHTML = `<div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UmnCZ7-9yDY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
            
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/A74TOX803D0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BGTx91t8q50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rV_3Lewxx6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/VZg5r9i90z0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/z44rbeDYB8o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>      
            `
})
program4.addEventListener("click", function () {
    right_content.innerHTML = `<div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vLqTf2b6GZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
    </div>
    
    <div class="cis">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gfDE2a7MKjA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_uQrJ0TkZlc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/LHBE6Q9XlzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
   
     
            `
})
program5.addEventListener("click", function () {
    right_content.innerHTML = `<div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/HcOc7P5BMi4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
            
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/BsDoLVMnmZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
    </div>
    
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QXPWs00RD3A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/k7ELO356Npo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-G7bJVAIiEI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/THp_EowtJ0M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>      
            `
})
program6.addEventListener("click", function () {
    right_content.innerHTML = `<div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ESnrn1kAD4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
            
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Edsxf_NBFrw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/WyxzAU3p8CE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EUtlj7xdO1o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/K1naz9wBwKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

     
     `
})
program7.addEventListener("click", function () {
    right_content.innerHTML = `<div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/KGkiIBTq0y0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
            
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hKB-YGF14SY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/lGmRnu--iU8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hQ9_27otvCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

     
     `
})
geometry.addEventListener("click", function () {
    right_content.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/hIHT4wAVc08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
})
trigonometry.addEventListener("click", function () {
    right_content.innerHTML = ' <iframe width="560" height="315" src="https://www.youtube.com/embed/nbuyle1CsSM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
})
algebra.addEventListener("click", function () {
    right_content.innerHTML = `<div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/r-5mPR63q6k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
            
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4mFZVUsgY_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
    
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/E9cq65m4RBM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yheQ3W4o5Ew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

     `

})
current_content.addEventListener("click", function () {
    right_content.innerHTML = `<div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vZSL96-iIu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
            
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/wPv_rIR-y60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SZtFCs1JYZA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eZsK5en5AMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/slrPtOb4IUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Zqlz9SfLPx4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
     
     `

})

second.addEventListener("click", function () {
    right_content.innerHTML = `<div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/83r2EApApeA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
            
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IXA-XX39rF8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/J0Cwofn3FMA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/fAuG6XefcPM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="cis">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/j_fY5UchkTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
     `

})
