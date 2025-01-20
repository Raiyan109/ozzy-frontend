import React from "react";

const CircularProgressBar = ({ progress, total }: { progress: number, total: number }) => {
    const percentage = (progress / total) * 100;
    const strokeDasharray = 283; // Circumference of the circle (2 * Math.PI * r), where r=45 (radius of the circle)

    return (
        <div className="relative w-24 h-24">
            {/* SVG Circle */}
            <svg
                className="absolute top-0 left-0"
                width="100"
                height="96"
                viewBox="0 0 96 96"
            >
                {/* Background Circle */}
                <circle
                    cx="48"
                    cy="48"
                    r="45"
                    fill="none"
                    stroke="#BABABA"
                    strokeWidth="10"
                />
                {/* Progress Circle */}
                <circle
                    cx="48"
                    cy="48"
                    r="45"
                    fill="none"
                    stroke="#EF4D4D"
                    strokeWidth="10"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDasharray - (percentage / 100) * strokeDasharray}
                    strokeLinecap="round"
                    transform="rotate(-90 48 48)" // Rotate to start at the top
                />
            </svg>
            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center text-lg text-gray-800">
                {progress}/{total}g
            </div>
        </div>
    );
};

export default CircularProgressBar;
