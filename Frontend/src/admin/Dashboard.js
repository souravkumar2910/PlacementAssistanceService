import React from 'react'
import DashboardCard from './common/DashboardCard';

const Dashboard = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <DashboardCard />
                    <DashboardCard />
                    {/* <DashboardCard /> */}
                </div>
            </div>
               
        </div>
    )
}

export default Dashboard