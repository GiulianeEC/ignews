import {useSession, signIn} from 'next-auth/react';
import styles from "./styles.module.scss";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import { useRouter } from "next/router";

interface SubscribleButtonProps{
    priceId: string;
}

export function SubscribleButton({priceId}:SubscribleButtonProps) {
    const { data: session } = useSession();
    const router = useRouter();

    async function handleSubscrible(){
        if(!session){
            signIn('githib')
            return;
        }
        if (session.activeSubscription) {
            router.push("/posts");
            return;
        }
        //criação da checkout session
        try{
            const response = await api.post('/subscribe')

            const{sessionId} = response.data;

            const stripe = await getStripeJs();

            await stripe.redirectToCheckout({sessionId})
        } catch(err){
            alert(err.message);
        }
    }

    return(
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscrible}
        >
        Subscrible now
        </button>
    );
}