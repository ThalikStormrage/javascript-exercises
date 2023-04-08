const removeFromArray = function(array, ...remove) {
    const removeArray = Array.from(remove);
     for (i = 0; i < removeArray.length; i++) {
      let removeElement = removeArray[i];
      const index = array.indexOf(removeElement);
      if (index > -1) {
        array.splice(index, 1);
      }
     }
    return array;
   }

// Do not edit below this line
module.exports = removeFromArray;
