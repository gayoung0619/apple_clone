// 즉시호출 화살표함수
(() => {

    let yOffset = 0; //window.pageYOffset 값을 담은 변수
    let prevScrollHeight = 0; //현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
    let currentScene = 0; //현재 활성화된(눈 앞에 보고았는)씬(scroll-section)

    const sceneInfo = [
        {
            //0
            type: 'sticky',
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight : 0,
            objs:{
                container: document.querySelector('#scroll-section-0')
            }
        },
        {
            //1
            type: 'normal',
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight : 0,
            objs:{
                container: document.querySelector('#scroll-section-1')
            }
        },
        {
            //2
            type: 'sticky',
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight : 0,
            objs:{
                container: document.querySelector('#scroll-section-2')
            }
        },
        {
            //3
            type: 'sticky',
            heightNum: 5, //브라우저 높이의 5배로 scrollHeight 세팅
            scrollHeight : 0,
            objs:{
                container: document.querySelector('#scroll-section-3')
            }
        }
    ];

    function setLayout(){
        // 각 스크롤 섹션의 높이 세팅
        for(let i = 0; i < sceneInfo.length; i++){
            sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px` //스크롤바가 작아질것임
        }
    }

    function scrollLoop () {
        // 스크롤할떄마다 값이 기하급수적으로 늘어나는데 이를 막기 위해 값을 초기화 시켜주기
        prevScrollHeight = 0;
        for(let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }
        if(yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight){
            currentScene++;
        }
        if(yOffset < prevScrollHeight){
            currentScene--;
        }
        console.log(currentScene);

    }
    window.addEventListener('resize', setLayout);
    window.addEventListener('scroll', () => {
        yOffset = window.pageYOffset;
        scrollLoop();
    })

    setLayout();

})();