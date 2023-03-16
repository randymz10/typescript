(() => {
    let avenger: any = 123;
    let exists;
    let power;

    avenger = 'Dr Strange';
    // console.log(avenger.charAt(0));
    console.log( (avenger as String).charAt(0));
    
    avenger = 150.23256548;
    console.log(avenger.toFixed(2));
    
    console.log(exists);
    console.log(power);
    
    
})();