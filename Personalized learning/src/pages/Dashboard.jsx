import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import AIChat from '../components/AIChat';
import './Dashboard.css';

const Dashboard = () => {
    const location = useLocation();
    const userAnswers = location.state?.answers || {};

    return (
        <div className="dashboard-page">
            <Header />

            <div className="dashboard-container">
                {/* Decorative background shapes */}
                <div className="decorative-shapes">
                    <div className="shape shape-1">△</div>
                    <div className="shape shape-2">○</div>
                    <div className="shape shape-3">□</div>
                    <div className="shape shape-4">◇</div>
                    <div className="shape shape-5">▽</div>
                    <div className="shape shape-6">○</div>
                </div>

                {/* AI Learning Assistant - Main Focus */}
                <div className="ai-chat-centered">
                    <AIChat userAnswers={userAnswers} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
