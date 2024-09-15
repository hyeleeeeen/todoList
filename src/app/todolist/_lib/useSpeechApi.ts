import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

interface SpeechApi {
  transcript: string;
  listening: boolean;
  toggleListening: () => void;
  resetTranscript: () => void; // 반환값이 없는 함수
}

export default function useSpeechApi(): SpeechApi {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const toggleListening = () => {
    if (!SpeechRecognition) {
      console.error('Speech Recognition is not supported in this browser.');
      return;
    } // 지원하지않는 브라우저일 경우 에러메세지 송출 

    if (listening) {
      SpeechRecognition.stopListening(); // 음성인식 중지
    } else if (!listening) {
      SpeechRecognition.startListening({ language: 'ko-KR', continuous: true }); // 음성인식 시작
    }
  }

  return { transcript, listening, toggleListening, resetTranscript };
};

// transcript : 현재까지 음성 인식된 결과. 음성 -> 텍스트
// listening : 현재 음성 인식의 활성화 여부를 나타내는 boolean 값
// resetTranscript: 현재까지 음성 인식된 결과 초기화