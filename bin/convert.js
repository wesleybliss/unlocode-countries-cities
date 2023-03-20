#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const files = [
    '2022-2 UNLOCODE_CodeListPart1.csv',
    '2022-2 UNLOCODE_CodeListPart2.csv',
    '2022-2 UNLOCODE_CodeListPart3.csv',
]

const targets = {
    combined: path.join(__dirname, '../data/countries_and_cities.json'),
    countries: path.join(__dirname, '../data/countries.json'),
    cities: path.join(__dirname, '../data/cities.json'),
}

const cleanFields = fields => fields.map(it => {
    
    let res = it
    
    if (res.startsWith('"'))
        res = res.substring(1)
    
    if (res.endsWith('"'))
        res = res.substring(0, res.length - 1)
    
    res = res
        .replace(/[^\w\s\']|_/g, '')
        .replace(/\s+/g, ' ')
    
    return res
    
})

let combined = []
let countries = []
let cities = []

console.log('Parsing CSV...')

for (const file of files) {
    
    const source = path.resolve(__dirname, file)
    const data = fs.readFileSync(source, 'utf8')
    const lines = data.split('\n')
    
    for (const line of lines) {
        
        const [
            _,
            countryCode,
            countryCodeAlt,
            cityName,
            cityNameAlt,
            cityCode,
            __,
            ___,
            ____,
            coords,
        ] = cleanFields(line.split(','))
        
        /* console.log(line, {
            _,
            countryCode,
            countryCodeAlt,
            cityName,
            cityNameAlt,
            cityCode,
            __,
            ___,
            ____,
            coords,
        }) */
        
        if (!countryCodeAlt?.length) {
            
            combined.push({
                code: countryCode,
                name: cityName,
                cities: [],
            })
            
            continue
            
        }
        
        // console.log('combined so far', combined)
        
        combined[combined.length - 1].cities.push({
            code: cityCode,
            name: cityName,
            coords,
        })
        
    }
    
}

combined = combined.filter(it => it.name?.length && it.cities.length > 0)

combined.forEach(it => {
    
    countries.push({
        code: it.code,
        name: it.name,
    })
    
    cities = [...cities, ...it.cities.map(city => ({
        countryCode: it.code,
        countryName: it.name,
        ...city,
    }))]
    
})

console.log('Saving JSON...')

fs.writeFileSync(targets.combined, JSON.stringify(combined, null, 4), 'utf8')
fs.writeFileSync(targets.countries, JSON.stringify(countries, null, 4), 'utf8')
fs.writeFileSync(targets.cities, JSON.stringify(cities, null, 4), 'utf8')
