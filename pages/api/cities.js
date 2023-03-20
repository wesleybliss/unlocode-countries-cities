import cities from '../../data/cities'

export default function handler(req, res) {
    
    let data = [...cities]
    
    if (req.query.code)
        data = data.filter(it => it.code.includes(req.query.code.toUpperCase()))
    
    if (req.query.name)
        data = data.filter(it => it.name.toUpperCase().includes(req.query.name.toUpperCase()))
    
    if (req.query.countryCode)
        data = data.filter(it => it.countryCode.includes(req.query.countryCode.toUpperCase()))
    
    if (req.query.countryName)
        data = data.filter(it => it.countryName.toUpperCase().includes(req.query.countryName.toUpperCase()))
    
    res.status(200).json(data)
    
}
