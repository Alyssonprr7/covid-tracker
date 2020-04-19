import React, {useState, useEffect} from 'react'; 
import {fetchDailyData} from '../../API/index';
import {Line, Bar} from 'react-chartjs-2'
import styles from './Chart.module.css'
import RotatePhoneIcon from '../../images/rotate-phone-icon.png'



const Chart = ({data, country}) => {
    const[dailyData, setDailyData]= useState([])

    useEffect(()=> {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }


        fetchAPI();
    }, []);


    const lineChart = (
        dailyData.length!==0?(
            <Line 
                data={{
                    labels:dailyData.map(({date})=>new Date(date).toLocaleDateString().slice(0,5)),
                    datasets: [{    //Datasets são as informações que teremos
                        data: dailyData.map(({confirmed})=> confirmed),
                        label: "Infectados",
                        borderColor: "#3333ff",
                        fill:true
                    }, {
                        data: dailyData.map(({deaths})=> deaths),
                        label: "Mortos",
                        borderColor: "red",
                        backgroundColor: "rgba(255,0,0,0.5)",
                        fill:true

                    }]
                }}
            />
        ): null
    )


    const barChart = (
        data.confirmed?(
            <Bar 
            data={{
                labels:["Infectados", "Recuperados", "Mortos"],
                datasets: [{
                    label:"Pessoas",
                    backgroundColor:["rgba(0,0,255, 0.5)", "rgba(0,255,0,0.5)", "rgba(255,0,0,0.5)"],
                    data: [data.confirmed.value,data.recovered.value, data.deaths.value]
                }]

            }}
            options={{
                legend:{display:false},
                title: {display:true, text: `Estado atual do ${country}`}
            }}
            />
        ):null
    );

    return(
        <>
            <div className={styles.container}>
                {country ? barChart :lineChart}
            </div>
            {dailyData.length!==0 || data.confirmed ?(
                <div className={styles.rotate}>
                    <img className={styles.icon} src={RotatePhoneIcon} alt ="Logo de rotação de celular"/>
                    <p>Gire seu telefone para melhorar sua experiência</p>
                </div>
            ):null}
        </>
    )
}

export default Chart