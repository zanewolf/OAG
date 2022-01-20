import styled from "styled-components";

export const Button = styled.div`
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 8px;
  white-space: nowrap;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary? '#24ac1f' : 'white')};
  }
`



// import styled from "styled-components";
// import {Link} from 'gatsby'
//
//
// export default const Button = styled.button`
//   white-space: nowrap;
//   padding: 16px 40px;
//   color: #fff;
//   outline: none;
//   border: none;
//   min-width: 10vw;
//   cursor: pointer;
//   transition: 0.3s;
//   border-radius: 10%;
//   /*&:hover{*/
//   /* background: #209c20;*/
//   /*}*/
// `