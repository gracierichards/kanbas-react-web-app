import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
export const deleteAssignment = async (assignmentID: string) => {
    console.log("In client.deleteAssignment. Sending axios delete request with URL " + `${ASSIGNMENTS_API}/${assignmentID}`);
    const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentID}`);
    return response.data;
};
export const updateAssignment = async (assignment: any) => {
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return data;
};