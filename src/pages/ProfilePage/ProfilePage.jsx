import { UserCard } from '../../components/ProfileSettings/UserCard/UserCard';
import { UserForm } from '../../components/ProfileSettings/UserForm/UserForm';
import { PageWrapper } from './ProfilePage.styled';

export default function ProfilePage() {
    return (
        <PageWrapper>
            <UserCard />
            <UserForm />
        </PageWrapper>
  );
}
