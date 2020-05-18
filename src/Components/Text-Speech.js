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
  underlineLinks: 'Subrayar enlaces',
  bigCursor: 'cursor grande',
  readingGuide: 'Guía de lectura',
  textToSpeech: ' Texto a voz',
  speechToText: 'Dictado a texto',
};
var options = { labels: labels };
options.textToSpeechLang = 'es-EN'; // or any other language
options.speechToTextLang = 'es-EN'; // or any other language

export const load = () => {
  new Accessibility(options);
};
