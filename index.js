class Formatter {
  //add static methods here
  static capitalize(string){
    this.string = 'crocodile';
    return string.charAt( 0).toUpperCase() + string.slice ( 1 )
  }

  static sanitize(string) {
    return string.replace("ca$@#tching cold" + "Doin Dishes" + "Entert*ain(i{ng-Elphan^ts" + "!");
   
  }
};
