import React from "react";
import styles from "./CardCiudad.module.css"
import {Link} from "react-router-dom"

interface Props {
    id: number,
    image: string,
    shortName: string,
    // fullName: string,
    // populatity: number
}

export function CardCiudad (props: Props) {
    return(<div className={styles.container}>
        <h4>{props.shortName}</h4>
        <img className={styles.image} src={props.image} />
        <Link to={`/MainPage/${props.id}`}>Saber más</Link>
    </div>)
}