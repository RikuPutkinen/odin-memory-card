import { useState } from "react";

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

export default function Body(props) {
  const [current, setCurrent] = useState(0);
  const [best, setBest] = useState(0);
  const [cards, setCards] = useState(
    [
      {
        src: './images/darkBlueCircle.svg',
        alt: 'Dark blue circle',
        id: '0',
        clicked: false
      },
      {
        src: './images/darkBlueHexagon.svg',
        alt: 'Dark blue hexagon',
        id: '1',
        clicked: false
      },
      {
        src: './images/darkBlueSquare.svg',
        alt: 'Dark blue square',
        id: '2',
        clicked: false
      },
      {
        src: './images/darkBlueTriangle.svg',
        alt: 'Dark blue triangle',
        id: '3',
        clicked: false
      },
      {
        src: './images/redCircle.svg',
        alt: 'Red circle',
        id: '4',
        clicked: false
      },
      {
        src: './images/redHexagon.svg',
        alt: 'Rex hexagon',
        id: '5',
        clicked: false
      },
      {
        src: './images/redSquare.svg',
        alt: 'Red square',
        id: '6',
        clicked: false
      },
      {
        src: './images/redTriangle.svg',
        alt: 'Red triangle',
        id: '7',
        clicked: false
      },
      {
        src: './images/yellowCircle.svg',
        alt: 'Yellow circle',
        id: '8',
        clicked: false
      },
      {
        src: './images/yellowHexagon.svg',
        alt: 'Yellow hexagon',
        id: '9',
        clicked: false
      },
      {
        src: './images/yellowSquare.svg',
        alt: 'Yellow square',
        id: '10',
        clicked: false
      },
      {
        src: './images/yellowTriangle.svg',
        alt: 'Yellow triangle',
        id: '11',
        clicked: false
      }
    ]
  )

  function handleClick(id) {
    let target = cards.find(card => card.id === id);

    if (target.clicked === true) reset();
    else {
      target.clicked = true;
      setCurrent(current => current + 1);
      setCards(
        shuffle(
          cards.map(card => {
            return card.id === id ? target : card;
          })
        )
      )
    }
  }

  function reset() {
    setBest(current);
    setCurrent(0);
    setCards(
      shuffle(cards.map(card => { return {...card, clicked: false}}))
    );
  }

  return (
    <div className="p-4">
      <p className="text-xl"><span className="font-bold">Current score:</span> {current}</p>
      <p className="text-xl"><span className="font-bold">Best score:</span> {best}</p>

      <div className="mt-4 grid grid-flow-col grid-rows-2 gap-4">
        {cards.map(card => {
          return (
            <button key={card.id} type="button" onClick={() => handleClick(card.id)} className="flex justify-center border-2 rounded-xl border-gray-400 p-2">
              <img src={card.src} alt={card.alt}></img>
            </button>
          )
        })}
      </div>

    </div>
  )
}