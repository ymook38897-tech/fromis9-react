import {useState} from "react";
import Header from "./Header";

const members = [
  {
  id: 1,
  name: "이나경",
  position: "리드보컬"
},
{
  id: 2,
  name: "박지원",
  position: "메인보컬"
},
{
  id: 3,
  name: "송하영",
  position: "리드보컬"
}
]

function App() {
const [isOpen, setIsOpen] = useState(false);
const [search, setSearch] = useState("");
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState("")

const filteredMembers = members.filter((member) =>
member.name.includes(search)
)
function loadMembers() {
  setIsLoading(true)
  setError("")

  setTimeout(() => {
    const isSuccess = Math.random() > 0.5

    if (isSuccess) {
      setIsLoading(false)
    } else {
      setError("멤버 정보를 불러오지 못했습니다.")
      setIsLoading(false)
    }
  }, 2000)
}

  return (
    <div>
      <Header title="프로미스나인 이나경" />

      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "프로필 닫기" : "프로필 열기"}
      </button>

      {isOpen && (
        <div>
          <h2>이나경프로필</h2>
          <p>이름: 이나경</p>
          <p>생년월일: 2000년 6월 1일</p>
          <p>프로필: 프로미스나인 리드보컬</p>
        </div>
      )}
<input
        type="text"
        placeholder="멤버 이름 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
<button onClick={loadMembers}>
  멤버불러오기
</button>
    <h2>멤버 목록</h2>

<div>
{isLoading ? (
  <p> 로딩 중....</p>
) : error ?(
  <p>{error}</p>
) : filteredMembers.length === 0? (
  <p> 검색 결과가 없습니다.</p>
) : (
        filteredMembers.map((member) => (
          <div key={member.id}>
          <h3>{member.name}</h3>
          <p>{member.position}</p>
        </div>
        ))
      )}
    </div>
    </div>
  )
}

export default App