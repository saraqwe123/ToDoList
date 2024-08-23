import styles from "./Footer.module.css"

export default function Footer(pessoa) {
    let {autor} = pessoa
    let ano = new Date().getMilliseconds()
    return (
        <>
        <div className={styles.Footer}>
           React - {autor} - {ano}
        </div>
        </>
    )
}
