import { UserCard } from '../../components/ProfileSettings/UserCard/UserCard';
import { UserForm } from '../../components/ProfileSettings/UserForm/UserForm';
import { PageWrapper } from './ProfilePage.styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserInfo } from '../../redux/profile/profileSlice'
import { toast } from 'react-toastify';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const [dataLoaded, setDataLoaded] = useState(false);



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          const response = await axios.get('/users/current', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const userData = response.data;
          dispatch(addUserInfo(userData));
          setDataLoaded(true);
        } else {
          toast.error('Token not available. Unable to fetch user data.');
        }
      } catch (error) {
        toast.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [dispatch, token]);
  if (!dataLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <PageWrapper>
      <UserCard />
      <UserForm />
    </PageWrapper>
  );
}
