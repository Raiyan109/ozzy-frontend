'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from 'next/navigation'

const Success = () => {
    const router = useRouter();
    const searchParams = useSearchParams()
    const query = searchParams.get('session_id')

    //   const { session_id } = router.query;
    const [sessionData, setSessionData] = useState(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSessionData = async () => {
            if (!query) return;

            try {
                const response = await fetch(`http://192.168.10.32:5002/api/v1/subscription/subscribe?session_id=${query}`);
                if (!response.ok) {
                    const errorData = await response.text();
                    throw new Error(errorData);
                }

                const data = await response.json();
                console.log(data);

                setSessionData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unknown error occurred.");
            }
        };

        fetchSessionData();
    }, [query]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!sessionData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="mt-56">
            <h1>Payment Successful</h1>
            <p>Thank you for your purchase!</p>
            <p>Session ID: {query}</p>
        </div>
    );
};

export default Success;
