import React from 'react'; 
import styles from './Cards.module.css'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup'
import cx from 'classnames'

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed){
        return 'Loading...'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="space-around">
                <Grid item component={Card} xs={12} md={2}  className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infectados</Typography>
                        <Typography variant = "h5">
                            <CountUp start= {0} end={confirmed.value} duration={1.5} separator=","  //Separador dos valores
                            />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant='body2'> Casos ativos de COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xs={12} md={2} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recuperados</Typography>
                        <Typography variant = "h5">
                            <CountUp start= {0} end={recovered.value} duration={1.5} separator=","  //Separador dos valores
                            />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant='body2'> Pessoas recuperadas da COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xs={12} md={2} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Mortes</Typography>
                        <Typography variant = "h5">
                            <CountUp start= {0} end={deaths.value} duration={1.5} separator=","  //Separador dos valores
                            />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant='body2'> Mortes pela COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}  xs={12} md={2} className={cx(styles.card, styles.letality)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Letalidade</Typography>
                        <Typography variant = "h5">
                        <CountUp start= {0.1} end={Number(((deaths.value/confirmed.value)*100).toFixed(2))} decimals={2}  duration={2.5}  //Separador dos valores
                            />
                            %
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toLocaleDateString()}</Typography>
                        <Typography variant='body2'> Letalidade da COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    )
}

export default Cards