import styled from 'styled-components'
import defaultBcg from '../images/room-1.jpeg'

const styledHero = styled.header`
   min-height : 60vh;
    background : url(${props =>props.img ?  props.img : default}) center/cover no-repeat;
    display : flex;
    align-items : center;
    justify-content : center;
`

export default styledHero;
