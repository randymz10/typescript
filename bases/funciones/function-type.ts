(() => {
    
    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo está salvado`;

    let myFunction: (y: number, z:number) => number;

    // myFunction = 10;
    // console.log(myFunction);

    myFunction = addNumbers;
    console.log( myFunction( 1, 2));
    
    // myFunction = greet;
    // console.log( myFunction( 'Randy' ));

    // myFunction = saveTheWorld;
    // console.log( myFunction());

})()