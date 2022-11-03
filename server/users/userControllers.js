import { getUsersData, addNewSubscriberData, becomeFollowerData, unFollowData, removeSubscriberData } from "./userDataLayers.js";

export const getUsers = async (req, res) => {
    const data = await getUsersData()
    res.json({ status: 'success', data })
}
export const addNewSubscriber = async (req, res) => {
  
    const data = await addNewSubscriberData(req.body.subscriber, req.body.userId);
    res.json({ status: 'success', data })

}
export const removeSubscriber = async (req, res) => {
   
    const data = await removeSubscriberData(req.body.index, req.body.userId);
    res.json({ status: 'success', data })

}
export const becomeFollower = async (req, res) => {

    const data = await becomeFollowerData(req.body.userId);
    res.json({ status: 'success', data })

}
export const unFollow = async (req, res) => {

    const data = await unFollowData(req.body.userId);
    res.json({ status: 'success', data })

}

