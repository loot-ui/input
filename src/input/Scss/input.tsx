import * as React from 'react';
import Styles from './styles.module.scss';
export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type, className, ...props }, ref) => {
        return (
            <input className={Styles.input} type={type} ref={ref} {...props} />
        );
    }
);

export { Input };
