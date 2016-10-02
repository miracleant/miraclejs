function ajax(){
    var request = new XMLHttpRequest();
    var username=document.getElementById("mj-reg-username").value;
    alert(username);
    request.open("GET","ajax.php?name="+document.getElementById("mj-reg-username").value);
    request.send();
    request.onreadystatechange=function(){
        if(request.readyState===4){
            if(request.status===200){
                document.getElementById("searchResult").innerHTML=request.responseText;
            }else{
                alert("error: "+request.status);
            }
        }
    }
}
