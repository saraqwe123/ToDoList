import styles from "./Main.module.css"

export default function Main(pessoa) {
    const {children} = pessoa
    return (
        <>
        <div className={styles.Main}>
            {children}
        </div>
        </>
    )
}