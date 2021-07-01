class MyArray{

  constructor(){
    this.length = 0;
    this.data = {};
  }

 get(item){
  return this.data[item];
 }

 push(val){
   this.data[this.length] = val;
   this.length++;
   return this.length;
 }

 pop(){
   const lastItem = this.data[this.length-1];
   delete this.data[this.length-1];
   this.length--;
   return lastItem;
 }

 delete(item){
   const lastItem = this.data[this.length-1];
   this.shiftItems(item);
   return lastItem;
 }

 shiftItems(item){
   for(let i = item; i < this.length - 1; i++){
     this.data[i] = this.data[i + 1];
   }
     delete this.data[this.length - 1];
     this.length--;
 }
}

const newArr = new MyArray();
newArr.push('hello');
newArr.push('i think');
newArr.push('it will work');
newArr.push('i ');
// newArr.delete(1);
// newArr.delete(2);
newArr.delete();
console.log(newArr);