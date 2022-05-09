import styled from 'styled-components';

const Scroll=styled.div`   
    position: sticky;
    padding-bottom: 25px;
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  overflow-y: scroll;
  &::-webkit-scrollbar{
    width: 5px;
}
 &::-webkit-scrollbar-track{
    background-color: #f1f1f1;
}
&::-webkit-scrollbar-thumb{
    background-color: #c1c1c1;
}
   
    `

export default Scroll;