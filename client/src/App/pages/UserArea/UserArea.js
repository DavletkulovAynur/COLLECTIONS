import React, {useEffect} from 'react';
import UserAreaTemplate from "./UserAreaTemplate";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "../../../Common/utils/hooks/useRouter.hook";
import {
    getSubscribeCollectionAction,
    getUserAction,
    subscribeOnUserAction,
    unSubscribeOnUserAction
} from "../../../Store/actions/action";


const UserArea = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const {user} = useSelector((state) => state.userAreaPageReducer)

    const {subscriptions} = useSelector((state) => state.authReducer)
    const {allCollection} = useSelector(state => state.collectionReducer)

    const userId = router.match.params.id
    const userCollection = allCollection.filter(item => item.owner === userId)

    useEffect(() => {
        dispatch(getUserAction(userId))
    }, [])

    useEffect(() => {
        dispatch(getSubscribeCollectionAction(subscriptions))
    }, [])

    const subscribeOnUser = () => {
        dispatch(subscribeOnUserAction(userId))
    }

    const unSubscribeOnUser = () => {
        dispatch(unSubscribeOnUserAction(userId))
    }

    if(!user) {
        return (
            <div>
                LOADER
            </div>
        )
    }

    return (
        <>
            <UserAreaTemplate subscribeOnUser={subscribeOnUser}
                              unSubscribeOnUser={unSubscribeOnUser}
                              userCollection={userCollection}
                              mySubscriptions={subscriptions}
                              user={user}/>
        </>
    );
};

export default UserArea;