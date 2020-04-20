import React, {useState, useEffect} from 'react'; 
import {NativeSelect, FormControl} from '@material-ui/core';

import {fetchCountries} from '../../API/index'

const CountryPicker = ({handleCountryChange}) => {
    
    const [fetchedCountries, setFetchedCountries] = useState([])


    useEffect(()=> {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())

        }


        fetchAPI();
    }, [setFetchedCountries]);


    return(
        fetchedCountries.length!==0 ?(
        <FormControl>
            <NativeSelect onChange={(e)=> {handleCountryChange(e.target.value)}}>
                <option value = "">Global</option>
                {fetchedCountries.map((country, i)=> <option value ={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>): null
    )
}

export default CountryPicker