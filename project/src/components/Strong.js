export default function School(){
  const title = ['조직형 인재','복합형 인재','성장형 인재']
  const sub = [`논리적인 근거로 팀을 이끌면서도\n 올바른 피드백은 수용하는 자세`,
  `웹 개발 전반에 걸친 지식을 보유하여\n 협업 환경에서 매우 유리한 인재`,
  `기초는 탄탄히, 신기술은 적극 수용하며\n 문제 해결을 위해 끝없이 발전하는 자세`
]

window.addEventListener('scroll',(e)=>{
  const strs = document.querySelectorAll('.myStr')
  if(window.scrollY>10){
    strs.forEach((str)=>{
      str.style.animationName = `strongShow`
    })
  }
  else{
    strs.forEach((str)=>{
      str.style.animationName = null
      str.style.opacity = `0`
    })
  }
})
  return(
    <div className="strong">
      <h1>저를 소개합니다</h1>
      
      <div className="myStrBox">
        {
          title.map((t,index)=>{
            return(
              <div className="myStr">
                <div className='myStrImg'></div>
                <h2>{t}</h2>
                <h5>{sub[index]}</h5>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}