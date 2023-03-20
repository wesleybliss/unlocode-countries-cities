import countries from '../../data/countries'

export default function handler(req, res) {
    
    let data = [...countries]
    
    if (req.query.code)
        data = data.filter(it => it.code.includes(req.query.code.toUpperCase()))
    
    if (req.query.name)
        data = data.filter(it => it.name.toUpperCase().includes(req.query.name.toUpperCase()))
    
    res.status(200).json(data)
    
}
