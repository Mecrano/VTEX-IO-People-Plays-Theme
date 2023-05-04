import React from 'react'
import styles from '../styles.css'

export default function Table(props: any) {

    const { titleTabla, measures } = props.dataTable

    const sizeColTitlteTable = () => {
        let maxArray = measures[0].sizes;

        for (let i = 1; i < measures.length; i++) {
            if (measures[i].sizes.length > maxArray.length) {
                maxArray = measures[i].sizes;
            }
        }

        return maxArray.length + 1;
    }

    return (
        <div className={styles.contentGuideSize}>
            <table className={styles.contentGuideSizeTable}>
                <thead>
                    <tr>
                        <th colSpan={sizeColTitlteTable()} className={styles.titleTableGuideSize}>{titleTabla.toUpperCase()}</th>
                    </tr>
                </thead>
                <tbody>
                    {measures.map((measure: any, index: number) => {
                        return (
                            <tr key={index}>
                                <th>{measure.title}</th>
                                {measure.sizes.map((size: string) => <td>{size}</td>)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
