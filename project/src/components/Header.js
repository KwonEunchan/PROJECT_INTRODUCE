import logo from '../me.jpg'

export default function Header(){
  return(
    <div className="header"> 
      <div className="profile"></div>
      <ul>
        <li>소개</li>
        <li>경험</li>
        <li>스킬</li>
        <li>프로젝트</li>
      </ul>
    </div>
  )
}