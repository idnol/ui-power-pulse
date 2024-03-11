import { DailyInfoItem } from "./DailyInfo/DailyInfoItem";
import { DailyWrapper, UserCardWrapper,LogOutItemWrapper } from "./UserCard.styled";
import { UserImage } from "./UserImage/UserImage";
import { WarningMessage } from "./WarningMessage/WarningMessage";
import {LogOut} from '../../parts/LogOut/LogOut'
import { useSelector } from 'react-redux';
import {selectProfile} from '../../../redux/profile/selectors.js'

export const UserCard = () => {
    const profileData = useSelector(selectProfile);
    const calories = profileData.dailyCalorie;
    const activity =profileData.dailyExerciseTime;

    return (
    <UserCardWrapper>
        <UserImage/>
        <DailyWrapper>
            <DailyInfoItem svg='fork-knife' text="Daily calorie intake" number={calories}/>
            <DailyInfoItem style={{ flex: '1.1' }} svg='dumbbell' text="Daily physical activity" number={activity} min/>
        </DailyWrapper>
        <WarningMessage/>
      <LogOutItemWrapper>
        <LogOut/>
      </LogOutItemWrapper>
    </UserCardWrapper>

  );
};
