var person = {
    ...
    FuncHi: function(name, age){
      console.log('你好，我是 ${name}，今年 ${age} 岁')
    },
    FuncBye: function(name, phone){
      console.log('再见，记得我叫 ${name} 我的电话是 ${phone}')
    }
    
	person.FuncHi(person.name, person.age)
	person.FuncBye(person.name, person.phone)
