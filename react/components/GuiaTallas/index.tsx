import React, { useState } from "react"
import { Dropdown } from 'vtex.styleguide'
import Table from "./components/Table"
import styles from './styles.css'
import {dataSizes, options} from './dataSizes'

const GuideSize = () => {

    const [brand, setBrand] = useState('')
    const [dataBrand, setDataBrand] = useState([])    

    const handleReferenceSizeBrand = (value:any) => {
        const result:any = dataSizes.filter( elem => elem.brand.toLowerCase() === value.toLowerCase())
        
        setBrand(value)
        setDataBrand(result)
    }

    return (
        <div className={styles.containerElementsGuideSize}>
            <Dropdown
                label="Selecciona una marca"
                size="large"
                options={options}
                value={brand}
                onChange={(_: any, value: any) => handleReferenceSizeBrand(value)}
            />

            {/* @ts-ignore */}
            {dataBrand && dataBrand[0].person.map((person:any)=>{
                return <Table dataTable={person} />
            })}
        </div>
    )
}

export default GuideSize
