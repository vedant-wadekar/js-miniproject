function name(str) {
    // let vow =0;
    // for(let i=0;i<str.length;i++){
    //     if(str[i] === "a" || str[i] ==="e" || str[i] ==="i" || str[i] ==="o" || str[i] === "u"){
    //         vow++;
    //     }
    // }console.log(vow);
}
// usning arrow function
    let vow = (str) => {
        for(let i=0;i<str.length;i++){
        if(str[i] === "a" || str[i] ==="e" || str[i] ==="i" || str[i] ==="o" || str[i] === "u"){
            vow++;
        }
    }
    return vow;      
}
    
