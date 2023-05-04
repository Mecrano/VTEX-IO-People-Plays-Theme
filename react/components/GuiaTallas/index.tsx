import React, { useState } from "react"
import { Dropdown } from 'vtex.styleguide'
import Table from "./components/Table"
import styles from './styles.css'
//import dataSizes from './dataSizes'

const dataSizes = [
    {
        brand: "Adidas",
        person: [
            {
                type: "Hombre",
                titleTabla: "Guia de tallas calzado hombre",
                measures: [
                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["24,5", "25", "26", "26,5", "27", "27,5", "28", "28,5", "29", "29,5", "30"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["37", "38", "38,5", "39", "40", "41", "41,5", "42", "43", "43,5", "44",]
                    },
                    {
                        title: "USA",
                        sizes: ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11,5", "12"]
                    }

                ]
            },
            {
                type: "Mujer",
                titleTabla: "Guia de tallas calzado mujer",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["22", "22,5", "23", "23,5", "24", "24,5", "25", "25,5", "26", "26,5", "27"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["35", "35.5", "36", "36,5", "37", "37,5", "38", "38,5", "39", "39,5", "40"]
                    },
                    {
                        title: "USA",
                        sizes: ["5", "5,5", "6", "6,5", "7", "7,5", "8", "8,5", "9", "9,5", "10"]
                    }

                ]
            },
            {
                type: "Junior",
                titleTabla: "Guia de tallas calzado junior",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["18.0", "18.5", "19", "19,5", "20", "21", "21,5", "22", "22,5", "23", "23,5", "24", "25"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["28", "29-30", "30-31", "31-32", "33-34", "34.5", "35", "35.5", "36", "36.5", "37", "37.5", "38"]
                    },
                    {
                        title: "USA",
                        sizes: ["12.0", "13.0", "1.0", "2.0", "3.0", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7.0"]
                    }

                ]
            },
            {
                type: "Bebe",
                titleTabla: "Guia de tallas calzado bebé",
                measures: [
                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["12", "13", "14", "14,8", "15,3", "16"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["20-21", "22", "23", "24", "25", "26"]
                    },
                    {
                        title: "USA",
                        sizes: ["5", "6", "7", "8", "9", "10"]
                    }

                ]
            }
        ]
    },
    {
        brand: "Nike",
        person: [
            {
                type: "Hombre",
                titleTabla: "Guia de tallas calzado hombre",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["24,5", "25", "26", "26,5", "27", "27,5", "28", "28,5", "29", "29,5", "30"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["37", "38", "38,5", "39", "40", "41", "41,5", "42", "43", "43,5", "44"]
                    },
                    {
                        title: "USA",
                        sizes: ["7", "7,5", "8", "8,5", "9", "9,5", "10", "10,5", "11", "11,5", "12"]
                    }

                ]
            },
            {
                type: "Mujer",
                titleTabla: "Guia de tallas calzado mujer",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["22", "22,5", "23", "23,5", "24", "24,5", "25", "25,5", "26", "26,5", "27"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["34,5", "35", "36", "36,5", "37", "37,5", "38", "38,5", "39", "39,5", "40"]
                    },
                    {
                        title: "USA",
                        sizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"]
                    }

                ]
            },
            {
                type: "Junior",
                titleTabla: "Guia de tallas calzado junior",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["18", "18.5", "19", "19.5", "20", "21", "21.5", "22", "22.5", "23", "23.5", "24", "25"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["28", "29-30", "30-31", "31-32", "33-34", "34.5", "35", "35.5", "36", "36.5", "37", "37.5", "38"]
                    },
                    {
                        title: "USA",
                        sizes: ["12.0", "13.0", "1.0", "2.0", "3.0", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7.0"]
                    }

                ]
            }
        ]
    },
    {
        brand: "Reebok",
        person: [
            {
                type: "Hombre",
                titleTabla: "Guia de tallas calzado hombre",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["24,5", "25", "26", "26, 5", "27", "27, 5", "28", "28, 5", "29", "29, 5", "30"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["37", "38", "38, 5", "39", "40", "41", "41, 5", "42", "43", "43, 5", "44"]
                    },
                    {
                        title: "USA",
                        sizes: ["7", "7, 5", "8", "8, 5", "9", "9, 5", "10", "10, 5", "11", "11, 5", "12"]
                    }

                ]
            },
            {
                type: "Mujer",
                titleTabla: "Guia de tallas calzado mujer",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["22", "22, 5", "23", "23, 5", "24", "24,5", "25", "25, 5", "26", "26, 5", "27"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["34, 5", "35", "36", "36, 5", "37", "37, 5", "38", "38, 5", "39", "39, 5", "40"]
                    },
                    {
                        title: "USA",
                        sizes: ["5", "5, 5", "6", "6, 5", "7", "7, 5", "8", "8, 5", "9", "9, 5", "10"]
                    }

                ]
            },
            {
                type: "Junior",
                titleTabla: "Guia de tallas calzado junior",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["18", "18.5", "19", "19.5", "20", "21", "21.5", "22", "22.5", "23", "23.5", "24", "25"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["28", "29 - 30", "30 - 31", "31 - 32", "33 - 34", "34.5", "35", "35.5", "36", "36.5", "37", "37.5", "38"]
                    },

                    {
                        title: "USA",
                        sizes: ["12.0", "13.0", "1.0", "2.0", "3.0", "3.5", "4", "4.5", "5", "5.5", "6", "6.5", "7.0"]
                    }

                ]
            },
            {
                type: "Bebe",
                titleTabla: "Guia de tallas calzado bebé",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["12", "13", "14", "14, 8", "15, 3", "16"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["20 - 21", "22", "23", "24", "25", "26"]
                    },
                    {
                        title: "USA",
                        sizes: ["5", "6", "7", "8", "9", "10"]
                    }

                ]
            }
        ]
    },
    {
        brand: "Skechers",
        person: [
            {
                type: "Hombre",
                titleTabla: "Guia de tallas calzado hombre",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["24,5", "25", "26", "26, 5", "27", "27, 5", "28", "28, 5", "29", "29, 5", "30"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["37", "38", "38, 5", "39", "40", "41", "41, 5", "42", "43", "43, 5", "44"]
                    },
                    {
                        title: "USA",
                        sizes: ["7", "7, 5", "8", "8, 5", "9", "9, 5", "10", "10, 5", "11", "11, 5", "12"]
                    }

                ]
            },
            {
                type: "Mujer",
                titleTabla: "Guia de tallas calzado mujer",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["22", "22, 5", "23", "23, 5", "24", "24,5", "25", "25, 5", "26", "26, 5", "27"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["34, 5", "35", "36", "36, 5", "37", "37, 5", "38", "38, 5", "39", "39, 5", "40"]
                    },
                    {
                        title: "USA",
                        sizes: ["5", "5, 5", "6", "6, 5", "7", "7, 5", "8", "8, 5", "9", "9, 5", "10"]
                    }

                ]
            },
            {
                type: "Junior",
                titleTabla: "Guia de tallas calzado junior",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["17.5", "18.0", "18.5", "19", "19, 5", "20", "21", "21, 5"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["27", "28", "29 - 30", "31 - 32", "33", "34", "34.5", "35"]
                    },
                    {
                        title: "USA",
                        sizes: ["11.0", "12.0", "13.0", "1.0", "2.0", "3.0", "3, 5", "4"]
                    }

                ]
            },
            {
                type: "Bebe",
                titleTabla: "Guia de tallas calzado bebé",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["12", "13", "14", "14, 8", "15, 3", "16"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["20 - 21", "22", "23", "24", "25", "26"]
                    },
                    {
                        title: "USA",
                        sizes: ["5", "6", "7", "8", "9", "10"]
                    }

                ]
            }
        ]
    },
    {
        brand: "Fila",
        person: [
            {
                type: "Hombre",
                titleTabla: "Guia de tallas calzado hombre",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["24,5", "25", "26", "26,5", "27", "27,5", "28", "28,5", "29,5", "30"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["37", "37,5", "38", "39", "40", "41", "41,5", "42", "43,5", "44"]
                    },
                    {
                        title: "USA",
                        sizes: ["7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12", "13.0"]
                    }

                ]
            },
            {
                type: "Mujer",
                titleTabla: "Guia de tallas calzado mujer",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["22", "22,5", "23", "23,5", "24", "24,5", "25", "25,5", "26"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["34,5", "35", "36", "36,5", "37", "37,5", "38", "38,5", "39"]
                    },
                    {
                        title: "USA",
                        sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"]
                    }

                ]
            },
            {
                type: "Junior",
                titleTabla: "Guia de tallas calzado junior",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["18.0", "18.5", "19", "19,5", "20", "21", "21,5", "22", "22,5", "23", "23,5"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["28", "29", "30", "31", "32", "32,5", "33", "33,5", "34", "34,5", "35"]
                    },
                    {
                        title: "USA",
                        sizes: ["12.0", "13.0", "1.0", "2.0", "3.0", "3,5", "4", "4,5", "5", "5,5", "6"]
                    }

                ]
            }
        ]
    },
    {
        brand: "Lotto",
        person: [
            {
                type: "Hombre",
                titleTabla: "Guia de tallas calzado hombre",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["24", "24,5", "25", "26", "26,5", "27", "27,5", "28", "28,5", "29,5", "30"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["36.5", "37", "37.5", "38", "39", "40", "41", "41,5", "42", "43,5", "44"]
                    },
                    {
                        title: "USA",
                        sizes: ["07.0", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12", "13.0"]
                    }

                ]
            },
            {
                type: "Mujer",
                titleTabla: "Guia de tallas calzado mujer",
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["22", "22,5", "23", "23,5", "24", "24,5", "25", "25,5", "26", "26,5", "27"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["34,5", "35", "36", "36,5", "37", "37,5", "38", "38,5", "39", "39,5", "40"]
                    },
                    {
                        title: "USA",
                        sizes: ["5", "5,5", "6", "6,5", "7", "7,5", "8", "8,5", "9", "9,5", "10"]
                    }

                ]
            },
            {
                type: "Junior",
                titleTabla: "Guia de tallas calzado junior",
                measures: [
                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["18.0", "18.5", "19", "19,5", "20", "21", "21,5", "22", "22,5", "23", "23,5"]
                    },
                    {
                        title: "COLOMBIA",
                        sizes: ["28", "29", "30", "31", "32", "32,5", "33", "33,5", "34", "34,5", "35"]
                    },
                    {
                        title: "USA",
                        sizes: ["12.0", "13.0", "1.0", "2.0", "3.0", "3,5", "4", "4,5", "5", "5,5", "6"]
                    }

                ]
            }
        ]
    },
    {
        brand: "Ropa",
        person: [
            {
                type: "Hombre",
                titleTabla: "Tallaje pantalon hombre",
                measures: [

                    {
                        title: "TALLA",
                        sizes: ["XS", "S", "M", "L", "XL"]
                    },
                    {
                        title: "1. CINTURA",
                        sizes: ["71 - 75 cm", "76 - 82 cm", "83 - 90 cm", "91 - 99 cm", "100 - 109 cm"]
                    },
                    {
                        title: "2. CADERA",
                        sizes: ["82 - 86 cm", "87 - 93 cm", "94 - 101 cm", "102 - 110 cm", "111 - 119 cm"]
                    },
                    {
                        title: "3. TIRO DE LA ENTREPIERNA",
                        sizes: ["81 cm", "81.5 cm", "82 cm", "82.5 cm", "83cm"]
                    }

                ]
            },
            {
                type: "Hombre",
                titleTabla: "Tallaje camisa o chaqueta hombre",
                measures: [

                    {
                        title: "ETIQUETA",
                        sizes: ["XS", "S", "M", "L", "XL"]
                    },
                    {
                        title: "PECHO",
                        sizes: ["83 - 86 cm", "87 - 92 cm", "93 - 100 cm", "101 - 108 cm", "109 - 118 cm"]
                    },
                    {
                        title: "CINTURA",
                        sizes: ["71 - 74 cm", "75 - 80 cm", "81 - 88 cm", "89 - 96 cm", "97 - 106 cm"]
                    },
                    {
                        title: "CADERA",
                        sizes: ["82 - 85 cm", "86 - 91 cm", "92 - 99 cm", "100 - 107 cm", "108 - 116 cm"]
                    }

                ]
            },
            {
                type: "Mujer",
                titleTabla: "Tallaje camisa o chaqueta mujer",
                measures: [

                    {
                        title: "TALLA",
                        sizes: ["XXS / 26-28", "XS / 30-32", "S / 34-36", "M / 38-40", "L / 42-44", "XL / 46-48"]
                    },
                    {
                        title: "PECHO",
                        sizes: ["73 - 76cm", "77 - 82cm", "83 - 88cm", "89 - 94cm", "95 - 101cm", "102 - 109cm"]
                    },
                    {
                        title: "CINTURA",
                        sizes: ["57 - 60cm", "61 - 66cm", "67 - 72cm", "73 - 78cm", "79 - 85cm", "86 - 94cm"]
                    },
                    {
                        title: "CADERA",
                        sizes: ["82 - 85cm", "86 - 91cm", "92 - 97cm", "98 - 103cm", "104 - 110cm", "111 - 117cm"]
                    }

                ]
            },
            {
                type: "Mujer",
                titleTabla: "Tallaje pantalon mujer",
                measures: [

                    {
                        title: "TALLA",
                        sizes: ["XS / 30-32", "S / 34-36", "M / 38-40", "L / 42-44", "XL / 46-48"]
                    },
                    {
                        title: "CINTURA",
                        sizes: ["61 - 66cm", "67 - 72cm", "73 - 78cm", "79 - 85cm", "86 - 94cm"]
                    },
                    {
                        title: "CADERA",
                        sizes: ["86 - 91cm", "92 - 97cm", "98 - 103cm", "104 - 110cm", "111 - 117cm"]
                    },
                    {
                        title: "TIRO",
                        sizes: ["78cm", "78.5cm", "79cm", "79.5cm", "80cm"]
                    }

                ]
            },
            {
                type: "Mujer",
                titleTabla: "Tallaje ropa niño",
                measures: [

                    {
                        title: "TALLA",
                        sizes: ["8", "10", "12", "14", "16"]
                    },
                    {
                        title: "ALTURA",
                        sizes: ["123 - 128 cm", "129 - 134 cm", "135 - 140 cm", "141 - 146 cm", "147 - 152 cm"]
                    },
                    {
                        title: "PECHO",
                        sizes: ["64 cm", "67.5 cm", "71 cm", "74.5 cm", "78 cm"]
                    },
                    {
                        title: "CINTURA",
                        sizes: ["59 cm", "61.5 cm", "63.5 cm", "66 cm", "68 cm"]
                    },
                    {
                        title: "CADERA",
                        sizes: ["68 cm", "71 cm", "74.5 cm", "77.5 cm", "81 cm"]
                    },
                    {
                        title: "TIRO",
                        sizes: ["59.5 cm", "62 cm", "65 cm", "68 cm", "70.5 cm"]
                    }

                ]
            }
        ]
    }
]

const GuideSize = () => {

    const [brand, setBrand] = useState('')
    const [dataBrand, setDataBrand] = useState([])

    const options = [
        { value: 'adidas', label: 'Adidas' },
        { value: 'nike', label: 'Nike' },
        { value: 'reebok', label: 'Reebok' },
        { value: 'fila', label: 'Fila' },
        { value: 'lotto', label: 'Lotto' },
        { value: 'ropa', label: 'Ropa' },
    ]

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
                //@ts-ignore
                onChange={(_: any, value: any) => handleReferenceSizeBrand(value)}
            />

            {/* @ts-ignore */}
            {brand && dataBrand && dataBrand[0].person.map((person:any)=>{
                return <Table dataTable={person} />
            })}
        </div>
    )
}

export default GuideSize
