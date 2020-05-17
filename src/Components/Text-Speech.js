//import React from 'react';
import Accessibility from 'accessibility/src/main';

const labels = {
  menuTitle: 'Menu de accesibilidad',
  increaseText: 'aumentar el tamaño del texto',
  decreaseText: ' disminuir el tamaño del texto',
  increaseTextSpacing: 'incrementar espacio del texto',
  decreaseTextSpacing: 'decrementar espacio del texto',
  invertColors: 'Colores invertidos',
  grayHues: 'tonos grises',
  underlineLinks: ' subrayar enlaces',
  bigCursor: 'cursor grande',
  readingGuide: 'guía de lectura',
  textToSpeech: ' texto a voz',
  speechToText: 'dictado a texto',
};
var options = { labels: labels };
options.textToSpeechLang = 'es-EN'; // or any other language
options.speechToTextLang = 'es-EN'; // or any other language

export const load = () => {
  new Accessibility(options);
};
