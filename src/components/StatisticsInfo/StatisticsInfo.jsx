import sprite from 'assets/sprite-2.svg';
import { StyledCalorieDataWrapper, StyledCaloriesNumber, StyledCaloriesSvg, StyledCaloriesText, } from './StatisticsInfo.styled';
import { StyledCaloriesWrapper, StyledStatisticsInfoWrapper, StyledVideoIconWrapper, StyledVideoNumber, } from './StatisticsInfo.styled';
import { StyledVideoSvg, StyledVideoSvgWrapper, StyledVideoText, StyledVideoWrapper, } from './StatisticsInfo.styled';

export const StatisticsInfo = () => {
    return (
      <StyledStatisticsInfoWrapper>
            
        <StyledVideoWrapper>
           <StyledVideoIconWrapper>
              <StyledVideoSvgWrapper>
                <StyledVideoSvg>
                  <use href={`${sprite}#triangle`} />
                </StyledVideoSvg>
              </StyledVideoSvgWrapper>
           </StyledVideoIconWrapper>
           <div>
             <StyledVideoNumber>350+</StyledVideoNumber>
             <StyledVideoText>Video tutorial</StyledVideoText>
           </div>
        </StyledVideoWrapper>
            
        <StyledCaloriesWrapper>
          <StyledCaloriesSvg>
            <use href={`${sprite}#run-man-circle`} />
          </StyledCaloriesSvg>
          <StyledCalorieDataWrapper>
            <StyledCaloriesNumber>500k</StyledCaloriesNumber>
            <StyledCaloriesText>cal</StyledCaloriesText>
          </StyledCalorieDataWrapper>
        </StyledCaloriesWrapper>  

      </StyledStatisticsInfoWrapper>
) }