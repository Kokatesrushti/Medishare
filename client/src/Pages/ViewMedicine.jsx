import react,{useState, useEffect} from 'react'
import axios from 'axios';
import './ViewMedicine.jsx';
import CardMed from '../components/CardMed.jsx'


const ViewMedicine = () => {
    const [med, setMed]=useState('');
    useEffect(() => {
        axios.get('http://localhost:2000/api/viewmed')
            .then(res => {
                console.log(res.data.data);
                setMed(res.data.data);

            }).catch(error => {
                console.log(error);
            })
    }, [])
return(
<div className="ViewMed">
    {
        med && med.map(item=>(
            <CardMed key={item._id} name={item.name} mf_date={item.mf_date} exp_date={item.exp_date} price={item.price}
            illness={item.illness} 
            />
        ))
        
    }
</div>


)

}

export default ViewMedicine
