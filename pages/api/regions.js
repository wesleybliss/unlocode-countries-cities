import regions from '../../data/countries_and_cities'

export default function handler(req, res) {
    
    res.status(200).json(regions.slice(0, 10))
    
}
