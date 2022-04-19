export function checkWin(correct, wrong, word) {
  

    let status;
  if (correct) {
    status = 'win';
  } else {
    status = "";
  }
 
  // Check for win
   [...word].forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
       ;
    }
  });
  
  // Check for lose
    if(wrong.length === 6){ status = 'lose';
    return status}
  
     let statusWin = 'win';
    
  
      [...word].map(letter => {
        if (!correct.includes(letter)) {
          statusWin = ""
          
        }
          
      });
  if (wrong.length === 6) {
    statusWin = 'lose';
  }
   
    return statusWin;
  
  
  }
    
  
  

