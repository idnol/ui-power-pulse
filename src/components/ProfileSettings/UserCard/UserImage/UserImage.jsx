import { useState } from 'react';
// import axios from 'axios';
import sprite from '../../../../../public/img/sprait.svg';
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
  const [avatar, setAvatar] = useState(null);

  const avatarLogo = (
    <SvgLogoUser>
      <use href={avatar ? avatar : `${sprite}#icon-user`}></use>
    </SvgLogoUser>
  );
  const handleAvatarChange = async (event) => {
    const file = event.target.files[0];
  
    if (file) {
      try {
        // const formData = new FormData();
        // formData.append('file', file);
  
        // await axios.post('/api/profile', formData, {
        //   headers: {
        //     'Content-Type': 'multipart/form-data',
        //   },
        // });
  
        const objectURL = await readFileAsync(file);
        setAvatar(objectURL);
        console.log('File uploaded successfully');
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <Wrapper>
      <div style={{ position: 'relative' }}>
        <Avatar>
          {avatar ? (
            <Image src={avatar} alt="User Avatar" />
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
      <TitleName>Anna Rybachok</TitleName>
      <Subtitle>User</Subtitle>
    </Wrapper>
  );
};
