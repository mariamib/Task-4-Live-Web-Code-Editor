document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";
const save_codes = (html,css,js)=>{
    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("js", js);
}
const retrieve = ()=>{
    if (localStorage.getItem('html') !== null) {
        document.getElementById("htmlCode").value = localStorage.getItem('html');
    }
    if(localStorage.getItem('css') !== null)
        document.getElementById("cssCode").value = localStorage.getItem('css');
    if(localStorage.getItem('js') !== null)
        document.getElementById("jsCode").value = localStorage.getItem('js');
    showPreview();
}
retrieve();

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    save_codes(htmlCode,cssCode,jsCode);
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
