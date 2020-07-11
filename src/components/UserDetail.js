import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function UserDetail({ user }) {
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const [english_name, setEnglish_name] = useState(user.english_name);
  const [desc, setDesc] = useState(user.desc);
  const [on, setOn] = useState(false);

  const onClick = () => {
    dispatch({
      type: "UP_USER",
      name: name,
      english_name: english_name,
      desc: desc,
      id: user.id,
    });
  };

  return (
    <>
      {on === false ? (
        <>
          <h1>{user.name} 님</h1>
          <div>영어이름 : {user.english_name}</div>
          <div>소개 : {user.desc}</div>
          <button>
            <Link to="/">홈으로</Link>
          </button>
          <button onClick={() => setOn(!on)}>수정하기</button>
        </>
      ) : (
        <>
          <p>
            이름 :{" "}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="이름을 입력해주세요."
            />
          </p>
          <p>
            별명 :{" "}
            <input
              value={english_name}
              onChange={(e) => setEnglish_name(e.target.value)}
              type="text"
              placeholder="별명을 입력해주세요."
            />
          </p>
          <p>
            나의 대한 설명 :{" "}
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="자기 자신을 설명하세요!"
            ></textarea>
          </p>
          <button onClick={() => onClick()}>수정</button>
        </>
      )}
    </>
  );
}

export default UserDetail;
