import {
  ExercisesListContainer,
  ExercisesList,
  ExercisesListItem,
  ExercisesItemTitle,
  WorkoutNameContainer,
  WorkoutNameIcon,
  WorkoutName,
  WorkoutStatsList,
  WorkoutStatsItem,
  WorkoutStatsSpan,
  ExercisesButton,
  ExercisesButtonBox,
  ExercisesButtonText,
  ExercisesButtonIcon,
} from './ExercisesPageList.styled';

export const Exercises = () => {
  const data = [
    {
      workoutname: 'Air bike',
      burnedcalories: 312,
      bodyparts: 'Waist',
      target: 'Abs',
    },
    {
      workoutname: '3/4 sit-up',
      burnedcalories: 220,
      bodyparts: 'Waist',
      target: 'Abs',
    },
    {
      workoutname: '45° side ben',
      burnedcalories: 323,
      bodyparts: 'Waist',
      target: 'Abs',
    },
    {
      workoutname: 'Barbell reverse preacher curl',
      burnedcalories: 312,
      bodyparts: 'Waist',
      target: 'Biceps',
    },
    {
      workoutname: 'Barbell rollerout',
      burnedcalories: 87,
      bodyparts: 'Waist',
      target: 'Abs',
    },
    {
      workoutname: 'Barbell side split squat v. 2',
      burnedcalories: 60,
      bodyparts: 'Waist',
      target: 'Abs',
    },
    {
      workoutname: 'Bottoms-up',
      burnedcalories: 234,
      bodyparts: 'Waist',
      target: 'Abs',
    },
  ];

  return (
    <ExercisesListContainer>
      <ExercisesList>
        {data.map((item, index) => (
          <ExercisesListItem key={index}>
            <ExercisesItemTitle>workout</ExercisesItemTitle>
            <WorkoutNameContainer>
              <WorkoutNameIcon>
                <use href="../../../public/img/sprait.svg#run-man-circle"></use>
              </WorkoutNameIcon>
              <WorkoutName>{item.workoutname}</WorkoutName>
            </WorkoutNameContainer>
            <WorkoutStatsList>
              <WorkoutStatsItem>
                Burned calories:
                <WorkoutStatsSpan>{item.burnedcalories}</WorkoutStatsSpan>
              </WorkoutStatsItem>
              <WorkoutStatsItem>
                Body part: <WorkoutStatsSpan>{item.bodyparts}</WorkoutStatsSpan>
              </WorkoutStatsItem>
              <WorkoutStatsItem>
                Target: <WorkoutStatsSpan>{item.target}</WorkoutStatsSpan>
              </WorkoutStatsItem>
            </WorkoutStatsList>
            <ExercisesButton type="button">
              <ExercisesButtonBox>
                <ExercisesButtonText>Start</ExercisesButtonText>
                <ExercisesButtonIcon>
                  <use href="../../../public/img/sprait.svg#arrow"></use>
                </ExercisesButtonIcon>
              </ExercisesButtonBox>
            </ExercisesButton>
          </ExercisesListItem>
        ))}
      </ExercisesList>
    </ExercisesListContainer>
  );
};
