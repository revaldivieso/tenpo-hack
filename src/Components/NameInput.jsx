import React from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
};

const EmailInput = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div>
      <label htmlFor="text-input">Ingresa tu nombre</label>
      <br />
      <input
        name="text-input"
        type="text"
        label="Introduce tu nombre"
        placeholder="click aca"
        onClick={resetTranscript}
        value={transcript}
      ></input>
    </div>
  );
};

EmailInput.propTypes = propTypes;

export default SpeechRecognition(EmailInput);
