import { DailyInfoItem } from "./DailyInfo/DailyInfoItem";
import { DailyWrapper, UserCardWrapper } from "./UserCard.styled";
import { UserImage } from "./UserImage/UserImage";
import { WarningMessage } from "./WarningMessage/WarningMessage";


export const UserCard = () => {

  return (
    <UserCardWrapper>
        <UserImage/>
        <DailyWrapper>
            <DailyInfoItem svg='fork-knife' text="Daily calorie intake" number="0"/>
            <DailyInfoItem style={{ flex: '1.1' }} svg='dumbbell' text="Daily physical activity" number="0 min"/>
        </DailyWrapper>
        <WarningMessage/>
    </UserCardWrapper>

  );
};
