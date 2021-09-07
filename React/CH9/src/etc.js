function tagged(...args) {
    console.log(args);
  }
  tagged`hello ${{ foo: "bar" }} ${() => "world"}`;
  import styled from "styled-components";
  
  const MyComponent = styled.div`
    font-size: 2rem;
  `;