import { UserCard } from '../../components/ProfileSettings/UserCard/UserCard';
import { UserForm } from '../../components/ProfileSettings/UserForm/UserForm';
import { PageWrapper } from './ProfilePage.styled';
import { Wrapper } from '../WelcomePage/WelcomePage.styled.js';

export default function ProfilePage() {
    return (
      <section>
        <div className="container">
          <div className="row">
            <Wrapper>
              <PageWrapper>
                <UserCard />
                <UserForm />
              </PageWrapper>
            </Wrapper>
          </div>
        </div>
      </section>

  );
}
