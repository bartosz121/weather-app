import styled from "styled-components";

const FooterContainer = styled.div`
    text-align: center;
    color: white;
    font-weight: 600;

    div {
        margin-top: 10px;
    }
    
    .paint {
        color: #eb6e4b;
        a, a:focus, a:active {
            text-decoration: none;
            color: inherit;

            &:hover {
                color: #e94c21;
            }
        }
    }

`

export default FooterContainer;