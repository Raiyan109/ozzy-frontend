
const data = [
    {
        day: "Day 1", workout: "Strength Training (Upper Body)", details: [
            {
                warmUp: 'Jumping jacks/light jogging, dynamic stretches (5-1',
                workout: ' Bench press, pull-ups, dumbbell shoulder press, bicep curls, tricep dips, push-ups (3 sets of 8-12 reps each) Cool-down: Stretch chest, shoulders, and arms (5 mins) '
            }
        ]
    },
    {
        day: "Day 2", workout: "Cardio (Endurance & Speed)", details: [
            {
                warmUp: 'Jumping jacks/light jogging, dynamic stretches (5-1',
                workout: ' Bench press, pull-ups, dumbbell shoulder press, bicep curls, tricep dips, push-ups (3 sets of 8-12 reps each) Cool-down: Stretch chest, shoulders, and arms (5 mins) '
            }
        ]
    },
    { day: "Day 3", workout: "Rest or Active Recovery", details: "Light yoga, walking, or stretching (30-45 mins)" },
    {
        day: "Day 4", workout: "Shoulders", details: [
            {
                warmUp: 'Jumping jacks/light jogging, dynamic stretches (5-1',
                workout: ' Bench press, pull-ups, dumbbell shoulder press, bicep curls, tricep dips, push-ups (3 sets of 8-12 reps each) Cool-down: Stretch chest, shoulders, and arms (5 mins) '
            }
        ]
    },
    {
        day: "Day 5", workout: "Cardio", details: [
            {
                warmUp: 'Jumping jacks/light jogging, dynamic stretches (5-1',
                workout: ' Bench press, pull-ups, dumbbell shoulder press, bicep curls, tricep dips, push-ups (3 sets of 8-12 reps each) Cool-down: Stretch chest, shoulders, and arms (5 mins) '
            }
        ]
    },
    {
        day: "Day 6", workout: "Core", details: [
            {
                warmUp: 'Jumping jacks/light jogging, dynamic stretches (5-1',
                workout: ' Bench press, pull-ups, dumbbell shoulder press, bicep curls, tricep dips, push-ups (3 sets of 8-12 reps each) Cool-down: Stretch chest, shoulders, and arms (5 mins) '
            }
        ]
    },
    { day: "Day 7", workout: "Rest", details: "Active Recovery, Stretching, Yoga" }
];

const GeneratedPlan = () => {
    return (
        <div className="p-4 mt-20 mx-auto max-w-[1200px]">
            <table className="w-full border-collapse border border-[#545454]">
                <thead className="bg-[#B0C0D2]">
                    <tr>
                        <th className="border border-[#545454] p-2 text-center font-normal text-[#545454]">Day</th>
                        <th className="border border-[#545454] p-2 text-center font-normal text-[#545454]">Workout</th>
                        <th className="border border-[#545454] p-2 text-center font-normal text-[#545454]">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        // odd:bg-white even:bg-gray-100
                        <tr key={index} className="">
                            <td className="border border-[#545454] p-2 text-[#545454]">{item.day}</td>
                            <td className="border border-[#545454] p-2 text-[#545454]">{item.workout}</td>
                            <td className="border border-[#545454] p-2">
                                {Array.isArray(item.details) ? (
                                    <ul className="list-disc list-inside space-y-1">
                                        {item.details.map((detail, idx) => (
                                            <li key={idx} className="text-[#545454]">
                                                <strong>Warm-Up:</strong> {detail.warmUp}
                                                <br />
                                                <strong>Workout:</strong> {detail.workout}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-[#545454]">{item.details}</p>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-[#545454]">Additional Tips:</h2>
                <ul className="list-disc list-inside mt-2 text-[#545454] mb-4">
                    <li>Diet: Focus on lean protein, complex carbs, and healthy fats. Stay hydrated.</li>
                    <li>Progression: Gradually increase weights and track running performance.</li>
                    <li>Consistency: Stick to the plan for 4 weeks and reassess.</li>
                </ul>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex gap-6 mt-4">
                        <button className="border border-[#545454] text-[#545454] px-12 py-2 rounded-full shadow hover:bg-[#545454] hover:text-white">
                            Easier
                        </button>
                        <button className="border border-[#545454] text-[#545454] px-12 py-2 rounded-full shadow hover:bg-[#545454] hover:text-white">
                            Harder
                        </button>
                    </div>
                    <button className="w-fit px-24 bg-[#345C8C] mt-4 py-2 rounded-full text-white font-semibold mb-2 hover:bg-white hover:text-[#345C8C] border border-[#345C8C]">
                        Confirm Routine
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GeneratedPlan
