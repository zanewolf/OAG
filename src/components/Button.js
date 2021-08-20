import styled from "styled-components";

export const Button = styled.div`
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 8px;
  width: 20vw;
  background: ${({primary}) => (primary? '#1040d9' : '#000')};
  white-space: nowrap;
  padding: ${({big})=>(big? "16px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({fontBig})=>(fontBig ? "26px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover{
    transition: all 0-.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary? '#24ac1f' : '#20339a')};
  }
  @media screen and (max-width: 768px){
    width: 50%;
    
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