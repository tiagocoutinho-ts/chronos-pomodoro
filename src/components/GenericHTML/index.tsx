import style from "./styles.module.css"

type GenericHTMLPros = {
    children: React.ReactNode
}

export default function GenericHTML({children}:GenericHTMLPros) {
    return <div className={style.genericHtml}>
        {children}
    </div>
}