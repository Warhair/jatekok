class TicTacToeModel {
    #lista = [];
    #index;
    #lepesszam;
    #allapot;
    constructor() {
      //ez jellemzi a programunk aktuális állapotát
      this.#allapot = "X";
      this.#lepesszam = 0;
      this.#lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
      //kattintások száma 9-et elérte, akkor vége a játéknak
      //győzelem figyelés
    }
    get lista(){
        return this.#lista;
    }
  
    setAllapot(index) {
      if (this.#allapot === "X") {
        this.#allapot = "O";
      } else {
        this.#allapot = "X";
      }
      this.#lista[index] = this.#allapot;
      console.log(this.#lista);
      this.#lepesszam++;
    }
  
    getErtek() {
      return this.#allapot;
    }
    getVegeVanE() {
     let vEll= this.#vizszintesGyozelem();
      if (vEll.indexOf("OOO") > -1) {
        return "O nyert";
      } else if (vEll.indexOf("XXX") > -1) {
        return "X nyert";
      } else if (this.#lepesszam === 9) {
        return "Döntetlen!";
      }
      return "tovabb";
    }
    #vizszintesGyozelem() {
      /**
       * végigmegyünk a listán, és sztringet képezünk az elemekből,
       *  úgy, hogy minden harmadik után beteszünk egy @
       */
      let vEll = "";
      for (let i = 0; i < 9; i++) {
        vEll += this.#lista[i];
        if (i % 3 === 2) {
          vEll += "@";
        }
      }
      vEll += "@";
      console.log(vEll);
      console.log(vEll.indexOf("OOO"), vEll.indexOf("XXX"));
      return vEll;
    }
    #getVizszintes(){
        let ellX="";
        this.#lista.forEach((element,index) => {
            ellX+=element;
            if (index%3===2){
                ellX+="@";
            }
        });
       
        return ellX;
    }
    #getFuggoleges(){
        let ellY="";
        for (let index = 0; index < 3; index++) {
            ellY+=this.#lista[index]+this.#lista[index+3]+this.#lista[index+6];
            
            ellY+="@";
        }
       console.log(ellY)
        return ellY;
    }

    #getAtlo(){
        let ell=this.#lista[0]+this.#lista[4]+this.#lista[8]+"@";
         ell+=this.#lista[2]+this.#lista[4]+this.#lista[6];
        console.log(ell);
         return ell;
    }

    ellenerozes(){
        let ell=this.#getVizszintes()+"@"+this.#getAtlo()+"@"+this.#getFuggoleges();
        let allapot="";
        if (ell.indexOf("XXX")>=0) {
            allapot="X"
        }else if (ell.indexOf("OOO")>=0) {
            allapot="O"
        }
        if (allapot==="" && ell.indexOf(" ")===-1){
            allapot="Döntetlen"
        } 
       // console.log(allapot)
        return allapot;
    }
  }
  export default TicTacToeModel;