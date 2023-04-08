(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
    //   console.log("Contructor Avenger llamado!");
    }

    protected getFullname() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {

    constructor(name: string, realName: string, public isMNutant: boolean) {
      super(name, realName);
    //   console.log("Constructor Xmen llamado");
    }

    get fullName() {
        return `${this.name} - ${this.realName}`;
    }

    set fullName(name:string) {
        if ( name.length < 3) {
            throw new Error("El nombre debe tener al menos 3 letras");
            
        }
        this.name = name;
    }

    getFullnameDesdeXmen() {
      console.log(super.getFullname() );
    }
  }

  const wolverine = new Xmen("Wolverine", "Logan", true);

//   console.log(wolverine.fullName);

//   wolverine.fullName = 'Randy';

//   console.log(wolverine.fullName);
  
//   wolverine.getFullnameDesdeXmen();
})();
