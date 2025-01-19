import React from 'react'
import SubscriptionHero from './SubscriptionHero'
import Subscriptions from './Subscriptions'


const plans = [
    { id: 1, name: 'Workout Membership', price: 0, features: ['View Members Directory', 'View Members Profile', 'Send Private Messages', 'Add Media To Your Profile'] },
    { id: 2, name: 'Nutrition Membership ', price: 20, features: ['View Members Directory', 'View Members Profile', 'Send Private Messages', 'Add Media To Your Profile'] },
    { id: 3, name: 'Nutrition Membership', price: 60, features: ['Discuss your program', 'Track your progress by scheduling calls periodically', 'Accountability', ' life style coaching'] },
]

const Subscription = () => {
    return (
        <div>
            <SubscriptionHero />
            <Subscriptions plans={plans} />
        </div>
    )
}

export default Subscription
