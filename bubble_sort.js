let array = [80, 24, 65, 78, 90, 100];

for (let i = 0; i < array.length; i++) {
  
  for (let j = 0; j < array.length - 1; j++) {
  
    if (array[j] > array[j +1]) {
      const next = array[j +1];

      array[j + 1] = array[j];
      array[j] = next;
    }

    break;
  }
}

console.log(array);
