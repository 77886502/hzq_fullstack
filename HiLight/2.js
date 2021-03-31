function Parent2() {
    this.name = 'parent2';
    this.play = [1, 2, 3];
    
  }
  function Child2() {
    this.type = 'child2';
  }
  Child2.prototype = new Parent2();

  var s1 = new Child2();
  var s2 = new Child2();
  console.log(s1,s2);
  console.log(Child2.prototype);