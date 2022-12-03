import React from "react";

const ActivityBall = React.memo((props) => {
    const { data } = props;
    return (
        <div className='activity__balls' style={data ? {background: "#3Ac073"} : {background: '#E74444'} }/>
    )
})

export default ActivityBall;