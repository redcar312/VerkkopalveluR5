import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function Admin({url}) {
    const [categories, setCategories] = useState([])
    const [option, setOption] = useState('');
    const [categoryName, setCategoryName] = useState('');

    useEffect(() => {
        axios.get(url + 'products/categories.php')
          .then((response)=> {
            const json = response.data;
            setCategories(json);
          }).catch(error => {
            if (error.response === undefined) {
              alert(error);
                } else {
                  alert(error.response.data.error);
                }
          })
      }, [])

    function sendCategory() {

        axios.post(url + 'products/addcategory.php', {
            category:categoryName
        }).then(res => res.text)
        .catch(e => console.log(e));
    }

    function removeCategory() {

        axios.post(url + 'products/removecategory.php', {
            option:option
        }).then(res => res.text)
        .catch(e => console.log(e));
    }

    return (
        <div className='container'>
            <h2>Lisää tuotekategoria:</h2>
            <div className='form-group adminForm'>
                <form onSubmit={sendCategory}>
                    <label>
                        Kategorian nimi:
                    </label>
                    <input className='form-control' onChange={e => setCategoryName(e.target.value)} />
                    <button className="btn btn-warning addbutton">Lisää tuotekategoria</button>
                </form>
            </div>
            <h2>Poista tuotekategoria</h2>
            <div className='form-group adminForm'>
                <form>
                    <label>
                        Valitse kategoria:
                    </label>
                    <select className="form-select" onChange={e => setOption(e.target.value)}>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </select>
                    <button className="btn btn-danger addbutton" onClick={removeCategory}>Poista</button>
                </form>
            </div>
        </div>
    )
}
