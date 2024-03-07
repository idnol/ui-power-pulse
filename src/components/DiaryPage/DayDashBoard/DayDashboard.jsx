import {
  DashboardContainer,
  DashboardList,
  DashboardItem,
  DashboardItemBox,
  DashboardIcon,
  DashboardItemTitle,
  DashboardItemNumber,
  AttentionBox,
  AttentionIcon,
  AttentionText,
} from './DayDashboard.styled';

import sprite from 'assets/sprite-2.svg';

import { DayDashboardData } from './DayDashboardData';

export const DayDashboard = () => {
  const data = DayDashboardData();

  console.log(data[5]);

  return (
    <DashboardContainer>
      <DashboardList>
        {data.map((item, index) => (
          <DashboardItem
            className={item.background}
            key={index}
            count={item.count}
          >
            <DashboardItemBox>
              <DashboardIcon>
                <use href={item.icon} />
              </DashboardIcon>
              <DashboardItemTitle className={item.textColor}>
                {item.title}
              </DashboardItemTitle>
            </DashboardItemBox>
            <DashboardItemNumber>
              {item.count} {item.countType === 'time' ? 'min' : ''}
            </DashboardItemNumber>
          </DashboardItem>
        ))}
      </DashboardList>
      <AttentionBox>
        <AttentionIcon>
          {/* <use href="../../../../public/img/sprait.svg#attention-icon"></use> */}
          <use href={`${sprite}#attention-icon`}></use>
        </AttentionIcon>
        <AttentionText>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </AttentionText>
      </AttentionBox>
    </DashboardContainer>
  );
};
