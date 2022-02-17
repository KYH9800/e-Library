// immer가 internet exproler에서 지원이 안되서 해당 파일을 통해 함수를 만들고 켜준다
import { enableES5, produce } from 'immer'; // immer의 produce 함수를 확장한다(직접 만든다)

export default (...args) => {
  enableES5(); // enableES5 해준 뒤에
  return produce(...args); // produce 실행
};
