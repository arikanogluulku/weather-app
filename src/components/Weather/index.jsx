import React from 'react'
import Day from '../Day'
function Index({ weather }) {
    const days = weather;
    console.log("Days", days)
    const daysItems = days.map((item, index) => <Day key={index} day={item} />);
    return (
        <>
            {
                typeof weather != "undefined" && (
                    <div className="weather">
                        <div className="days-container">
                            {
                                daysItems
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Index
