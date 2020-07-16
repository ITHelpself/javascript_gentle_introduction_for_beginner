function correctName(name){
    var split = name.split(" ");
    let newName = "";
    for(var element of split){
       newName += element.slice(0,1).toUpperCase() + element.slice(1).toLowerCase() + " ";
    }
    return newName;
}