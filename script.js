const parseCode = (str) => {
  // your code here
	    let arr1 = str.split('0');
      let arr = [];
      for(let i = 0; i < arr1.length; i++ ){
        if(arr1[i] != ''){
            arr.push(arr1[i]);
        }
      }
      let obj = {
        firstName: arr[0],
        lastName: arr[1],
        id: arr[2]
      };
      
      return obj;
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
