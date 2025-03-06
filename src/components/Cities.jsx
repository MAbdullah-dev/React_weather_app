import React from 'react'
import sunclocud from "../assets/svg/suncloud.svg"

const Cities = () => {
    return (
        <div className="cities">
            <h5 className="title mt-2 mb-3">other cities</h5>
            <div className="row g-4">
                <div className="col-md-6">
                    <div className="city-card rounded-5 p-4">
                        <p className='m-0'>14°<span>H23° L10°</span></p>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-8 city-name">
                                <span>USA</span>
                            </div>
                            <div className="col-4">
                                <img src={sunclocud} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="city-card rounded-5 p-4">
                        <p className='m-0'>27°<span>H23° L10°</span></p>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-8 city-name">
                                <span>Dubai - UAE</span>
                            </div>
                            <div className="col-4">
                                <img src={sunclocud} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="city-card rounded-5 p-4">
                        <p className='m-0'>16°<span>H23° L10°</span></p>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-8 city-name">
                                <span>China Nuevo</span>
                            </div>
                            <div className="col-4">
                                <img src={sunclocud} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="city-card rounded-5 p-4">
                        <p className='m-0'>26°<span>H23° L10°</span></p>
                        <div className="row align-items-center justify-content-center">
                            <div className="col-8 city-name">
                                <span>Canada</span>
                            </div>
                            <div className="col-4">
                                <img src={sunclocud} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cities