import { useEffect, useState } from "react"

export default function Intro(){
  const introText = "항상 발전하는 개발자, 권은찬입니다."
  const [introTextState,setIntroTextState] = useState([])
  let ptr = -20
  
  useEffect(() => {
    const copy = []
    const introTextTyping = setInterval(() => {
        if (ptr >= introText.length) {
            clearInterval(introTextTyping)
        } else {
            copy.push(introText[ptr])
            setIntroTextState(copy.join(""))
            ptr++
        }
    }, 100)
}, []);

  return(
    <div className="intro">
      <h1 className="introText1"><span>자신감</span> 가득</h1>
      <h1 className="introText1"><span>열정</span> 한가득</h1>
      <h1 className="introText2">{introTextState}</h1>
    </div> 
  )
}