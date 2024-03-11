import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useState } from 'react';


import { updateAvatar} from '../../../../redux/profile/api';
import { selectProfile} from '../../../../redux/profile/selectors';
import sprite from 'assets/sprite-2.svg';
import {
  Avatar,
  Button,
  FormWrapper,
  IconBtn,
  Subtitle,
  SvgLogoUser,
  TitleName,
  Wrapper,
  Image
} from './UserImage.styled';

export const UserImage = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectProfile);
  const [localAvatar, setLocalAvatar] = useState(null);
  const avatarSrc = localAvatar || (user.bodyData && user.bodyData.avatar) || null;


  const avatarLogo = (
    <SvgLogoUser>
      <use href={avatarSrc ? avatarSrc : `${sprite}#icon-user`}></use>
    </SvgLogoUser>
  );

  

  const handleAvatarChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const avatarURL = URL.createObjectURL(file);
        setLocalAvatar(avatarURL);
  
        dispatch(updateAvatar(file))
          .then((response) => {
            if (updateAvatar.fulfilled.match(response)) {
              toast.success('File uploaded successfully');
            } else {
              toast.error('Error uploading file: Server response not successful');
            }
          })
          .catch((error) => {
            toast.error('Error uploading file:', error);
          })
          .finally(() => {
            setLocalAvatar(null);
          });
      } catch (error) {
        toast.error('Error creating URL for file:', error);
        setLocalAvatar(null);
      }
    }
  };
  

  return (
    <Wrapper>
      <div style={{ position: 'relative' }}>
        <Avatar>
        {avatarSrc && avatarSrc !== 'undefined' ? (
          <Image src={avatarSrc} alt="User Avatar" />
        ) : (
          avatarLogo
        )}
        </Avatar>
        <FormWrapper>
          <input
            type="file"
            id="file-input"
            name="file"
            style={{ display: 'none' }}
            onChange={handleAvatarChange}
            accept="image/*"
          />
          <label htmlFor="file-input">
            <Button>
              <IconBtn>
                <use href={`${sprite}#icon-check-mark`}></use>
              </IconBtn>
            </Button>
          </label>
        </FormWrapper>
      </div>
      <TitleName>{user.name}</TitleName>
      <Subtitle>User</Subtitle>
    </Wrapper>
  );
};
