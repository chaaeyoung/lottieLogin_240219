// 로티파일 경로
const animationPath = './src/animation4.json';

// 애니메이션 div id 
const ani = document.getElementById('lottie-animation');

// 로티파일 설정 옵션
const aniOp = {
    container : ani, // 렌더링 요소
    randerer: 'svg', // 렌더링 방식
    loop : true, // 반복
    autoplay:true, // 자동재생
    path:animationPath // 로티파일 경로 지정
};
// 로티파일 로드 및 애니메이션 표시
const anim = lottie.loadAnimation(aniOp);
// .loadAnimation() 함수는 로티 제이슨 파일을 로드하고 애니메이션 랜더링할때 사용하는 함수

// 크기조절
// 자바스크립트 문법이라 css가 아니라 style로 씀
ani.style.width = '70%'; // 가로
ani.style.height = '70%'; // 세로