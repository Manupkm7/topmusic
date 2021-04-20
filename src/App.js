import {useState, useEffect} from 'react';
import Player from './components/Player';
  
  function App() {
    const [songs] = useState([{
      title: "Shy Away",
      artist: "Twenty One Pilots",
      img_src: "./images/shyaway.jpg",
      src: "./music/shy-away.mp3"
    },
    {
      title: "Stressed Out",
      artist: "Twenty One Pilots",
      img_src: "./images/stressedout.jpg",
      src: "./music/stressed-out.mp3"
    },
    {
      title: "My Blood",
      artist: "Twenty One Pilots",
      img_src: "./images/myblood.jpg",
      src: "./music/my-blood.mp3"
    },
    {
      title: "Trees",
      artist: "Twenty One Pilots",
      img_src: "./images/trees.jpg",
      src: "./music/trees.mp3"
    },
    {
      title: "Lovely",
      artist: "Twenty One Pilots",
      img_src: "./images/lovely.jpg",
      src: "./music/lovely.mp3"
    },
    {
      title: "Friend, Please",
      artist: "Twenty One Pilots",
      img_src: "./images/friendplease.jpg",
      src: "./music/friend-please.mp3"
    }
  ])
  
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
  
    useEffect(() => {
      setNextSongIndex(() => {
        if (currentSongIndex + 1 > songs.length - 1) {
          return 0;
        } else {
          return currentSongIndex + 1;
        }
      });
    }, [currentSongIndex]);
  
    return (
      <div className="App">
        <Player 
          currentSongIndex={currentSongIndex} 
          setCurrentSongIndex={setCurrentSongIndex} 
          nextSongIndex={nextSongIndex} 
          songs={songs}
        />
      </div>
    );
  }
  
  export default App;