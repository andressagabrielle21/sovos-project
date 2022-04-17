import styled from "@emotion/styled";

export const Container = styled.div`
    max-width: 600px;
    
`

export const Button = styled.button`
    color: #fff;
    height: 32px;
    font-weight: bold;
    padding: 10px;
    background-color: #015fff;
    border: none;
    border-radius: 4px;
    &:hover {
        transition: .8s;
        background-color: #015f10;
        box-shadow: 0 5px 16px rgba(0, 0, 0, .4);
    }
`

export const FormContent = styled.div `
    border: 2px solid #dbe0e5;
    border-radius: 4px;
    padding: 16px;
    margin: 13px 0;
    .firstTitle, .secondTitle, .thirdTitle {
        position: absolute;
        background-color: #F0F5F9;
        padding: 0 6px;
    }
    .firstTitle {
        top: 0.2rem;
    }
    .secondTitle {
        top: 36.5%;
    }
    .thirdTitle {
        top: 68.2%;
    }
    .formInput {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 8px 0;
        input {
            border: 1px solid #dbe0e5;
            border-radius: 4px;
            height: 32px;
            padding: 4px;
            &:focus-visible {
                box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
                outline-color: #015fff;
            }
        }
    }
    .form_error {
        color: red;
        font-size: 14px;
        margin: 2rem;
    }
`