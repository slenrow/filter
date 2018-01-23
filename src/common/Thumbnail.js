import styled from 'styled-components';

const Thumbnail = styled.img.attrs({ src: props => props.src })`
    height: 140px;
`

export default Thumbnail;
