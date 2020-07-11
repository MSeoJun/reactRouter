## Reducer

```
case "ADD_USER":
      userAPI.getAdd(action.name, action.nick, action.desc);
      return state;
    case "ADD_USER_SUCCESS":
      return {
        ...state,
        users: {
          loading: false,
          data: action.data,
          error: null,
        },
      };
    case "DEL_USER":
      userAPI.getDel(action.id);
      return {
        ...state,
        users: {
          loading: false,
          data: null,
          error: null,
        },
      };
    case "UP_USER":
      userAPI.getUp(action.id, action.name, action.english_name, action.desc);
      return {
        ...state,
        users: {
          loading: false,
          data: null,
          error: null,
        },
      };
```

### src / api / user.js

```
// 유저 등록
export const getAdd = async (name, nick, desc) => {
  await axios.post("http://localhost:4000/users", {
    name: name,
    english_name: nick,
    desc: desc,
  });
};

// 유저 삭제
export const getDel = async (id) => {
  await axios.delete(`http://localhost:4000/users/${id}`);
};

// 유저 정보 수정
export const getUp = async (id, name, english_name, desc) => {
  await axios.patch(`http://localhost:4000/users/${id}`, {
    name: name,
    english_name: english_name,
    desc: desc,
  });
};
```
### src / modules / user.js

```
export function* usersSaga() {
  yield takeEvery(GET_USERS, actionSaga(userAPI.getUsers, GET_USERS_SUCCESS, GET_USERS_ERROR));
  yield takeEvery(GET_USERS, getUsersSaga);
  yield takeEvery(GET_USER_DETAIL, getUserDetailSaga);
  yield takeEvery("ADD_USER", AddSaga);
  yield takeEvery("DEL_USER", AddSaga);
  yield takeEvery("UP_USER", AddSaga);
}

function* AddSaga() {
  try {
    // yield call 로 api 호출시 파라미터는 두번째 인자로 넘겨주면 된다.
    const user = yield call(userAPI.getUsers);
    yield put({
      type: "ADD_USER_SUCCESS",
      data: user,
    });
  } catch (err) {
    yield put({
      type: "ERROR",
  })  
}
```
