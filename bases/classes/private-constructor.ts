(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy apocalipsis el único");
      }

      return Apocalipsis.instance;
    }

    changeName( newName: string ){
        this.name = newName;
    }
  }

  const apocalipsis1 = Apocalipsis.callApocalipsis();
  // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el único');
  // console.log(apocalipsis);

  console.log(apocalipsis1);
  apocalipsis1.changeName('Randy');
  console.log(apocalipsis1);
  
  
})();
