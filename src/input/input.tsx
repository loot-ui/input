import * as React from 'react';
import styled from 'styled-components';

const SInput = styled.input`
    display: flex;
    height: 2.875rem;
    width: 100%;
    border-radius: 0.313rem;
    border: 1px solid #d9d9d9;
    background-color: transparent;
    padding: 0.938rem 1rem;
    font-size: 0.875rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out;

    &:file {
        border: none;
        background-color: transparent;
        font-size: 0.875rem;
        font-weight: 500;
    }

    &::placeholder {
        color: #d9d9d9;
    }

    &:focus-visible {
        outline: none;
        border-color: #0254b3;
    }

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
        color: #d9d9d9;
    }
`;

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type, ...props }, ref) => {
        return <SInput type={type} ref={ref} {...props} />;
    }
);

export { Input };
