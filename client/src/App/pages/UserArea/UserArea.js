import React, {useEffect} from 'react';
import UserAreaTemplate from "./UserAreaTemplate";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "../../../Common/utils/hooks/useRouter.hook";
import {getSubscribeCollectionAction, getUserAction} from "../../../Redux/actions/action";


const UserArea = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {user} = useSelector((state) => state.userAreaPageReducer)
    const {subscribe} = useSelector((state) => state.subscribeReducer)
    const {subscriptions, subscribers} = useSelector((state) => state.authReducer)

    const userId = router.match.params.id

    useEffect(() => {
        dispatch(getUserAction(userId))
    }, [])

    useEffect(() => {
        dispatch(getSubscribeCollectionAction(subscriptions))
    }, [])

    console.log('subscribers', subscribers)

    if(!user) {
        return (
            <div>
                LOADER
            </div>
        )
    }
    return (
        <>
            <UserAreaTemplate mySubscriptions={subscriptions} user={user}/>
        </>
    );
};

export default UserArea;