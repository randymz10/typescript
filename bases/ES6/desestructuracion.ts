(() => {
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avenger = {
        nick: 'Samuel L. Jackson',
        iroman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    const { poder, vision } = avenger;
    console.log( poder.toFixed(2), vision.toUpperCase() );
    
    const printAvenger = ({ ironman, ...resto}: Avengers ) => {
        
        // console.log(ironman. ...resto);
        
    }

    // printAvenger( avenger );

    const avengerArr = ['Cap. América', 'Ironman', 'Hulk'];

    const [ capitan, ironman ] = avengerArr;
    console.log({ironman, capitan});
    
})()