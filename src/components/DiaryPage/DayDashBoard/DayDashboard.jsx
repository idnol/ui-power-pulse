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

export const DayDashboard = () => {
  const dashboardItems = [
    {
      icon: '../../../../public/img/sprait.svg#calorie-intake',
      title: 'Daily calorie intake',
      count: 2200,
      countType: 'cal',
      background: 'accent',
      textColor: 'whiteTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#physical-activity',
      title: 'Daily physical activity',
      count: 110,
      countType: 'time',
      background: 'accent',
      textColor: 'whiteTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#calories-consumed',
      title: 'Сalories consumed',
      count: 707,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#calories-burned',
      title: 'Сalories burned',
      count: 855,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#calories-remaining',
      title: 'Calories remaining',
      count: -100,
      countType: 'cal',
      background: 'default',
      textColor: 'greyTextColor',
    },
    {
      icon: '../../../../public/img/sprait.svg#sports-remaining',
      title: 'Sports remaining',
      count: 85,
      countType: 'time',
      background: 'default',
      textColor: 'greyTextColor',
    },
  ];

  return (
    <DashboardContainer>
      <DashboardList>
        {dashboardItems.map((item, index) => (
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
          <use href="../../../../public/img/sprait.svg#attention-icon"></use>
        </AttentionIcon>
        <AttentionText>
          Record all your meals in the calorie diary every day. This will help
          you be aware of your nutrition and make informed choices.
        </AttentionText>
      </AttentionBox>
    </DashboardContainer>
  );
};
