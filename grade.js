function percentage(){
    var ob=(document.getElementById("obt").value)
    var tot=(document.getElementById("total").value)
    result=ob/tot*100+("%")
    document.getElementById("per").innerHTML=result
}