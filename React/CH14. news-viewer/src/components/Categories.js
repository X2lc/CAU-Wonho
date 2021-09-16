import React from 'react';
import styled from 'styled-components';
import styled, { css } from 'styled-components';


const categories = [
@@ -63,16 +63,33 @@ const Category = styled.div`
  }
${props =>
        props.active && css`
  font-weight: 600;
  border-bottom: 2px solid #22b8cf;
  color: #22b8cf;
  &:hover {
    color: #3bc9db;
  }
`}
& + & {
    margin-left: 1rem;
  }
`;
const Categories = () => {
const Categories = ({ onSelect, category }) => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category key={c.name}>{c.text}</Category>
                <Category
                    key={c.name}
                    active={category === c.name}
                    onClick={() => onSelect(c.name)}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};
export default Categories;