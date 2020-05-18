//import React from 'react';
import Accessibility from 'accessibility/src/main';

const labels = {
  menuTitle: 'Menu de accesibilidad',
  increaseText: 'Aumentar el tamaño del texto',
  decreaseText: 'Disminuir el tamaño del texto',
  increaseTextSpacing: 'Incrementar espacio del texto',
  decreaseTextSpacing: 'Decrementar espacio del texto',
  invertColors: 'Colores invertidos',
  grayHues: 'Tonos grises',
  readingGuide: 'Guía de lectura',
  textToSpeech: ' Texto a voz',
  speechToText: 'Dictado a texto',
};
var options = {
  labels: labels,
  session: {
    persistent: false,
  },

  icon: {
    useEmojis: false,
    circular: true,
    img: 'accessibility',
  },
};
options.textToSpeechLang = 'es-ES'; // or any other language
options.speechToTextLang = 'es-ES'; // or any other language
options.modules = { bigCursor: false, underlineLinks: false };

export const load = () => {
  new Accessibility(options);
};
