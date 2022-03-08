import styled from "styled-components";

export const Button = styled.button`
border: 1px solid red;
border-radius: 10px;
background-color: white;
cursor: pointer;
font-size: 20px;
width: 100px;
height: 40px;
:not(:last-child) {
    margin-right: 10px;
}
:hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background: #f12711;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}
`