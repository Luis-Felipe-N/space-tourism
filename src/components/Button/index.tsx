import styles from './styles.module.scss'
interface IButtonProps {
    children: any;
}

export function Button({children, ...props}: IButtonProps) {
    return (
        <button className={styles.button} {...props}>{children}</button>
    )
}