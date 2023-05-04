import React, { useState } from "react"
import { Dropdown } from 'vtex.styleguide'
//import dataSizes from './dataSizes'

const dataSizes = [
    {
        brand: "Adidas",
        person: [
            {
                type: "Hombre",
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
                measures: [

                    {
                        title: "MEDIDA DE PIE (cm)",
                        sizes: ["24,", "", "25", "26", "26, 5", "27", "27, 5", "28", "28, 5", "29", "29, 5", "30"]
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
    }
]

const GuideSize = () => {

    const [brands, setBrands] = useState('')

    const options = [
        { value: 'adidas', label: 'Adidas' },
        { value: 'nike', label: 'Nike' },
        { value: 'reebok', label: 'Reebok' },
        { value: 'fila', label: 'Fila' },
        { value: 'lotto', label: 'Lotto' },
        { value: 'ropa', label: 'Ropa' },
    ]

    const handleReferenceSizeBrand = (value:any) => {
        
        setBrands(value)
        const result = dataSizes.filter( elem => elem.brand.toLowerCase() === value.toLowerCase())
        console.log(result, "--->", value)
    }

    console.log(brands, "--->ESTADO")

    return (
        <div>
            <Dropdown
                label="Selecciona una marca"
                size="large"
                options={options}
                value={brands}
                //@ts-ignore
                onChange={(_: any, value: any) => handleReferenceSizeBrand(value)}
            />
        </div>
    )
}

export default GuideSize
