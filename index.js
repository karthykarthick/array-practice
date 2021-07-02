class MyArray{
  constructor(){
    this.data = {}
    this.length = 0;
  }

  get(index){
    var item = this.data[index];
    return item;
  }

  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop(index){
    var lastItem = this.data[this.length-1];
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
    for(let i = item; i < this.length-1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArr = new MyArray();
newArr.push('hi');
newArr.push('hello');
newArr.push('how');
newArr.push('are');
newArr.push('you');
// newArr.pop();
// newArr.pop();
newArr.delete(2);
newArr.delete(3);
newArr.delete(1);
newArr.delete(0);
console.log(newArr);