import { useDispatch } from 'react-redux';
import { deleteUserById, addNewUser, UserId } from '../store/users/slice';


export const useUserActions = () => {
    const dispatch = useDispatch();

    const handleAddUser = ({name,email,github}) => {
        dispatch(addNewUser({name, email, github}));
    }


    const handleRemoveUser = (id: UserId) => {
        dispatch(deleteUserById(id));
    };

  return {handleAddUser, handleRemoveUser}
}