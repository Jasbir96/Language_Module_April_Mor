//  chaining works in js 
 const computeAmount ={
    count:0,
    value:function(){
        console.log(this.count);
        return this ;
    },
    lacs:function(value){
        this.count=this.count+value*100000;
        return this;
    }
  };

 computeAmount.value() //0
 
 computeAmount.lacs(2).value();

 computeAmount.lacs(2).lacs(20).value() //22,00,000 

 computeAmount.lacs(15).lacs(20).lacs(7).value() //42,00,000









