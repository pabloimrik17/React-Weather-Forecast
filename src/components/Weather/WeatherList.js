import React from 'react';
import WeatherListItem from "./WeatherListItem";

// Functional Component way (only render function) + Ecma 6
const WeatherList = ({days, onDayClicked}) =>
    <div className="weather-list flex-parent">
        {days.map((day, index) =>
            <WeatherListItem
                key={day.dt}
                day={day}
                onDayClicked={onDayClicked}
                index={index}
            />
        )};
    </div>;

export default WeatherList;