import styled from "styled-components";

export const Button = styled.div`
  margin: 0 auto;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 8px;
  width: ${({big})=>(big? '20vw': 'auto')};
  background: ${({primary}) => (primary? '#1040d9' : 'transparent')};
  white-space: nowrap;
  padding: ${({big})=>(big? "16px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({fontBig})=>(fontBig ? "26px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  &:hover{
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary? '#24ac1f' : 'transparent')};
    color: ${({navburger}) => (navburger? '#24ac1f' : '#fff')}
  }
  @media screen and (max-width: 900px){
    width: ${({big})=>(big? '50vw': '30vw')};
    font-size: 2em;
    
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