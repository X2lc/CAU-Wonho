const [number, setNumber] = useState(0);
// prevNumbers는 현재 number 값을 가리킵니다.
const onIncrease = useCallback(
  () => setNumber((prevNumber) => prevNumber + 1),
  []
);
const update = (draft) => {
  draft.value = 2;
};
const originalState = {
  value: 1,
  foo: "bar",
};
const nextState = update(originalState);
console.log(nextState); // { value: 2, foo: ‘bar‘ }