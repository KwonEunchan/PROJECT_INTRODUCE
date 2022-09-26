export default function School(){
  window.addEventListener('scroll',(e)=>{
    const schoolPageLeft = document.querySelector('.schoolPageLeft')
    const schoolPageRight = document.querySelector('.schoolPageRight');

    if(window.scrollY>274){
      schoolPageLeft.style.animationName = `schoolPageShowLeft`
      schoolPageRight.style.animationName = `schoolPageShowRight`
    }
    else{
      schoolPageLeft.style.animationName = null
      schoolPageLeft.style.left = `-30vw`
      schoolPageRight.style.animationName = null
      schoolPageRight.style.right = `-30vw`
      
    }
  })

  return(
    <div className="school">
      <div className="schoolIntro">
        <div className="schoolIntroImg"></div>
        <h1>남다른 교육 과정</h1>
        <h5>{`4년제 컴퓨터공학과 전공 과정에서 개발 역량을 쌓았을 뿐 아니라\n특성화고에서의 직업 체험을 통해 올바른 직장 예절을 배웠습니다. `}</h5>
      </div>
      <div className="schoolPage schoolPageLeft">
    
      </div>
      <div className="schoolPage schoolPageRight">
        
      </div>
    </div>
  )
}