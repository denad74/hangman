import React, {
  useEffect,
  useState
} from 'react';
  import axios from 'axios';
import './App.css';
import Figure from './Figure';
import Header from './Header';
import Word from './Word';
import WrongLetters from './WrongLetters';
import Popup from './Popup';
import Notification from './Notification';

// const wordArr = ['mrvica', 'jasenjin', 'birtija', 'winner'];



function App(props) {

   const fetchWord = async () => {
     const response = await axios.get('https://random-word-api.herokuapp.com/word?number=20').then(response => {
       const data = response.data
       console.log(response.data);
       setHangmanData({ ...hangmanData, selectedWord: data[Math.floor(Math.random() * data.length)] })

    })
  
    
   }
  
  useEffect(()=> {
    fetchWord()
},[])
  

 const [hangmanData, setHangmanData] = useState(
    {
      correctLetters: [],
      wrongLetters: [],
      selectedWord:'',
      message: false
    }
  );

 const [onPlay, setOnPlay] = useState(true);


  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = (event) => {
      const { selectedWord, wrongLetters, correctLetters } = hangmanData;
      const { key, keyCode } = event;
console.log(event);
      if (onPlay && keyCode >= 65 && keyCode <= 90) {

        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          console.log(selectedWord);
          if (!correctLetters.includes(letter)) {

            setHangmanData({ ...hangmanData, correctLetters: [...hangmanData.correctLetters, letter] });   
          } else {
            showMessage()
          }

        } else {
          if (!wrongLetters.includes(letter)) {
            console.log(selectedWord);
            setHangmanData({ ...hangmanData, wrongLetters: [...hangmanData.wrongLetters, letter] });
          } else {
            showMessage()
          }
        }
      }

    }
  
  useEffect(() => {
    
   window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown)
    
},[handleKeyDown])

   
 
  const showMessage = (setter) => {
    setHangmanData({...hangmanData, message: true})
    setTimeout(()=> {
        setHangmanData({...hangmanData, message: false})
    },200)
  }
  
  const playAgain = () => {
    setOnPlay(true)
    setHangmanData({
      selectedWord: '',
      correctLetters: hangmanData.correctLetters.splice(0, hangmanData.correctLetters.length),
      wrongLetters: hangmanData.wrongLetters.splice(0, hangmanData.wrongLetters.length),
    });
    fetchWord()
    
  }
 
  
 
  return (
    <>
      <Header />
      <div className='game-container'>
        <Figure
          wrongLetters={hangmanData.wrongLetters}
        />
        <WrongLetters
          wrongLetters={hangmanData.wrongLetters}
        />
        <Word
          selectedWord={hangmanData.selectedWord}
          correctLetters={hangmanData.correctLetters}
        />
      </div>
      <Popup
        correctLetters={hangmanData.correctLetters} wrongLetters={hangmanData.wrongLetters}
        selectedWord={hangmanData.selectedWord}
        setOnPlay={setOnPlay}
        playAgain={playAgain}
        
      />
        <Notification showMessage={ hangmanData.message}/>
    </> 
  );
}

export default App;
