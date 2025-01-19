import MakePlan from "@/components/makeWorkoutPlan/MakePlan"
import Video from 'next-video'
import Snow from '../../../../../videos/snow.mp4.mp4'


const MakePlanPage = () => {
    return (
        <div>
            {/* <Video src={Snow} /> */}
            <MakePlan />
        </div>
    )
}

export default MakePlanPage
