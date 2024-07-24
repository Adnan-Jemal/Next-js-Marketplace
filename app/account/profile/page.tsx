import DeleteAccount from "@/components/account/profile/DeleteAccount";
import ProfileForm from "@/components/account/profile/ProfileForm";
import ProfileProfile from "@/components/account/profile/Profileprofile";
const ProfilePage = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-14  my-10">
      <ProfileProfile />

        <ProfileForm />
     

      <DeleteAccount />
    </div>
  );
};

export default ProfilePage;
