function TheFilter(){
    var input, filter, table, tr, td, i, name,wonders;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableuhh");    
    tr = table.getElementsByTagName("tr");

    for( i = 0 ; i < tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        td1 = tr[i].getElementsByTagName("td")[1];
        if (td) {
             name = td.textContent || td.innerText;
             wonders = td1.textContent || td1.innerText;
            if(name.toUpperCase().indexOf(filter) > -1 || wonders.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display ="";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }
}


