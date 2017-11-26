import React from 'react';
import WeatherListItem from "./WeatherListItem";

class WeatherList extends React.Component {
    render() {
        const { days } = this.props;

        return(
            <div className="weather-list flex-parent">
                {days.map(day =>
                    <WeatherListItem key={day.dt} day={day}/>
                )};
            </div>
        );
    }
}

export default WeatherList;