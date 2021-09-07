:local .wrapper {
    /* 스타일 */
    }
    :local {
    .wrapper {
      /* 스타일 */
    }
    } 
function tagged(...args) {
  console.log(args);
}
tagged`hello ${{ foo: "bar" }} ${() => "world"}`;