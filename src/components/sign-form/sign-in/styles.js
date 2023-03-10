import { css } from '@emotion/react'; 

export const wrapper = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
`;

export const signForm = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20px;
`;

export const smallInfo = () => css`
    font-size : 10px;
    max-width: 300px;
    font-weight: 400;
    text-align: center;
    padding: 0 5px;
`;

export const offscreen = () => css`
    display: none;
`;

export const errmsg = () => css`
    color: red;
`;

export const line = () => css`
    text-decoration: underline;
`;

export const link = () => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-weight: 900;
`;

export const inputContainer = () => css`
    position: relative;
    padding-bottom: 15px;
    width: 100%;
    max-width: 300px;
`; 