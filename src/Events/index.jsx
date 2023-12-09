import React from 'react';

const Events = () => {
  const handleClick = (event) => {
    console.log('Клик на кнопке:', event)
  }

  const handleInputChange = (event) => {
    console.log('Изменение значения в текстовом поле:', event)
  }

  const handleMouseOver = (event) => {
    console.log('Наведение мыши на элемент:', event)
  }

  const handleMouseOut = (event) => {
    console.log('Увод мыши с элемента:', event)
  }

  const handleResize = (event) => {
    console.log('Изменение размеров окна:', event)
  }

  const handleKeyDown = (event) => {
    console.log('Нажата клавиша:', event)
  }

  const handleContextMenu = (event) => {
    console.log('Контекстное меню:', event)
    event.preventDefault()
  }

  const handleSelectStart = (event) => {
    console.log('Начало выделения текста:', event)
  }

  const handleCopy = (event) => {
    console.log('Копирование текста:', event)
  }

  const handlePaste = (event) => {
    console.log('Вставка текста:', event)
  }

  return (
    <div>
      <button onClick={handleClick}>Нажми меня</button>
      <input type="text" onChange={handleInputChange} placeholder="Текстовое поле" />
      <div
        style={{ width: '100px', height: '100px', backgroundColor: 'lightblue' }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      ></div>
      <span
        style={{
          display: 'block',
          backgroundColor: 'lightgreen',
          padding: '10px',
        }}
        onClick={handleResize}
      >
        Изменение размеров окна
      </span>
      <div
        style={{
          display: 'block',
          backgroundColor: 'lightcoral',
          padding: '10px',
        }}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        Нажатие клавиши (нажмите на этот блок и нажмите клавиши)
      </div>
      <div
        onContextMenu={handleContextMenu}
        style={{
          display: 'block',
          backgroundColor: 'lightskyblue',
          padding: '10px',
        }}
      >
        Контекстное меню (щелкните правой кнопкой мыши)
      </div>
      <p
        onSelectStart={handleSelectStart}
        style={{
          backgroundColor: 'lightgoldenrodyellow',
          padding: '10px',
        }}
      >
        Начало выделения текста (попробуйте выделить этот текст)
      </p>
      <div
        onCopy={handleCopy}
        style={{
          display: 'block',
          backgroundColor: 'lightpink',
          padding: '10px',
        }}
      >
        Копирование текста (выделите текст и используйте сочетание клавиш Ctrl+C)
      </div>
      <div
        onPaste={handlePaste}
        style={{
          display: 'block',
          backgroundColor: 'lightseagreen',
          padding: '10px',
        }}
      >
        Вставка текста (используйте сочетание клавиш Ctrl+V)
      </div>
    </div>
  );
};

export default Events;
