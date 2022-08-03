import React from 'react';

const Donate = () => {
    return (
        <div className="row">
            
                    <div className="card1">
                    <a ><img src={`${process.env.PUBLIC_URL}/img/Donation.jpeg`} alt="Donation" width="365"/></a>
                            <h4 className='text-center'><b>Donation</b></h4>
                    </div>
                    <div className="card1">
                    <a href="https://www.caritas.org.au/"><img src={`${process.env.PUBLIC_URL}/img/Caritas.jpeg`} alt="Caritas" width="365"/></a>
                            <h4 className='text-center'><b>Caritas</b></h4>
                    </div>

                    <div className="card1">
                    <a href="https://www.catholicmission.org.au/"><img src={`${process.env.PUBLIC_URL}/img/CatholicMission.jpeg`} alt="Catholic Mission" width="365"/></a>
                            <h4 className='text-center'><b>Catholic Mission</b></h4>
                    </div>

                    <div className="card1">
                    <a href="https://lifelink.com.au/"><img src={`${process.env.PUBLIC_URL}/img/LifeLink.jpeg`} alt="LifeLink" width="365"/></a> 
                            <h4 className='text-center'><b>LifeLink</b></h4>
                    </div>
                    <div className="card1">
                    <a href="https://www.marymackilloptoday.org.au/how-you-can-help/?gclid=EAIaIQobChMIwomFoJCi-QIV2ZFmAh35NgwSEAAYAyAAEgI1vfD_BwE"><img src={`${process.env.PUBLIC_URL}/img/MaryMacKillop.jpeg`} alt="MaryMacKillop" width="365"/></a>
                            <h4 className='text-center'><b>Mary Mac Killop</b></h4>
                    </div>
                    <div className="card1">
                    <a href="https://aidtochurch.org/"><img src={`${process.env.PUBLIC_URL}/img/ACN.jpeg`} alt="ACN" width="365"/></a> 
                            <h4 className='text-center'><b>ACN Australia</b></h4>
                    </div>

            </div>

    )

}
export default Donate